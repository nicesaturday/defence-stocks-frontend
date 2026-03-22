"use client";

import { useParams } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { usePostDetail } from "@/features/board/application/hooks/usePostDetail";
import { boardApi } from "@/features/board/infrastructure/api/boardApi";
import { boardReadPageStyles as s } from "@/ui/styles/boardReadPageStyles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function BoardReadPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const state = usePostDetail(id);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = useCallback(async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await boardApi.deletePost(id);
      router.push("/board");
    } catch {
      setDeleteError("게시물 삭제에 실패했습니다.");
    }
  }, [id, router]);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthLoading, isAuthenticated, router]);

  if (isAuthLoading || !isAuthenticated) {
    return null;
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        {state.status === "LOADING" && (
          <div className={s.loading}>게시물을 불러오는 중...</div>
        )}

        {state.status === "ERROR" && (
          <div className={s.error}>
            <span>{state.message}</span>
            <Link href="/board" className={s.listButton}>
              목록으로
            </Link>
          </div>
        )}

        {state.status === "NOT_FOUND" && (
          <div className={s.notFound}>
            <span>존재하지 않는 게시물입니다.</span>
            <Link href="/board" className={s.listButton}>
              목록으로
            </Link>
          </div>
        )}

        {state.status === "SUCCESS" && (
          <>
            <article className={s.article.wrapper}>
              <div className={s.article.header}>
                <h1 className={s.article.title}>{state.data.title}</h1>
                <div className={s.article.meta}>
                  <span>{state.data.nickname}</span>
                  <span className={s.article.metaLabel}>|</span>
                  <span>{state.data.createdAt}</span>
                </div>
              </div>
              <div className={s.article.body}>{state.data.content}</div>
            </article>

            {deleteError && (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400">
                {deleteError}
              </div>
            )}

            <div className={s.actions}>
              <Link href="/board" className={s.listButton}>
                목록으로
              </Link>
              <div className={s.actionGroup}>
                <Link
                  href={`/board/edit/${id}`}
                  className={s.editButton}
                >
                  수정
                </Link>
                <button
                  type="button"
                  onClick={handleDelete}
                  className={s.deleteButton}
                >
                  삭제
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
