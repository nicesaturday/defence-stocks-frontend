"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authApi } from "@/features/auth/infrastructure/api/authApi";
import { termsPageStyles } from "@/ui/styles/termsPageStyles";

export default function TermsPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    authApi
      .fetchMe()
      .then((me) => {
        if (!me.isRegistered) {
          setReady(true);
        } else {
          router.replace("/");
        }
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  if (!ready) {
    return null;
  }

  return (
    <div className={termsPageStyles.container}>
      <div className={termsPageStyles.card}>
        <div className="flex flex-col items-center gap-2">
          <h1 className={termsPageStyles.title}>약관 동의</h1>
          <p className={termsPageStyles.description}>
            서비스 이용을 위해 약관에 동의해주세요
          </p>
        </div>
      </div>
    </div>
  );
}
