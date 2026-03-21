import { httpClient, HttpError } from "@/infrastructure/http/httpClient";
import type { BoardPage } from "@/features/board/domain/model/boardPage";
import type { BoardPostDetail } from "@/features/board/domain/model/boardPostDetail";
import type { CreatePostRequest } from "@/features/board/domain/model/createPostRequest";

interface BoardPostResponse {
  readonly board_id: number;
  readonly title: string;
  readonly content: string;
  readonly account_id: number;
  readonly created_at: string;
  readonly updated_at: string;
}

interface BoardPostDetailResponse {
  readonly board_id: number;
  readonly title: string;
  readonly content: string;
  readonly account_id: number;
  readonly created_at: string;
  readonly updated_at: string;
}

interface BoardListResponse {
  readonly items: readonly BoardPostResponse[];
  readonly current_page: number;
  readonly total_pages: number;
  readonly total_count: number;
}

export const boardApi = {
  async fetchList(page: number = 1, size: number = 10): Promise<BoardPage> {
    const response = await httpClient.get<BoardListResponse>(
      `/board/list?page=${page}&size=${size}`,
    );

    return {
      posts: response.items.map((item) => ({
        id: item.board_id,
        title: item.title,
        nickname: `사용자${item.account_id}`,
        createdAt: item.created_at.slice(0, 10),
        viewCount: 0,
      })),
      totalPages: response.total_pages,
      currentPage: response.current_page,
    };
  },
  async createPost(request: CreatePostRequest): Promise<number> {
    const response = await httpClient.post<{ id: number }>("/board/register", {
      title: request.title,
      content: request.content,
    });
    return response.id;
  },

  async fetchPost(id: number): Promise<BoardPostDetail | null> {
    try {
      const response = await httpClient.get<BoardPostDetailResponse>(
        `/board/read/${id}`,
      );
      return {
        id: response.board_id,
        title: response.title,
        content: response.content,
        nickname: `사용자${response.account_id}`,
        createdAt: response.created_at.slice(0, 10),
        viewCount: 0,
      };
    } catch (error) {
      if (error instanceof HttpError && error.status === 404) {
        return null;
      }
      throw error;
    }
  },
} as const;
