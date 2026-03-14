const requireEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`[env] 필수 환경 변수가 누락되었습니다: "${key}"`);
  }
  return value;
};

// 클라이언트 노출 환경 변수 (NEXT_PUBLIC_ 접두사)
// 클라이언트와 서버 모두에서 접근 가능
export const clientEnv = {
  apiBaseUrl: requireEnv("NEXT_PUBLIC_API_BASE_URL"),
} as const;

// 서버 전용 환경 변수
// Server Component 또는 API Route에서만 사용할 것
export const getServerEnv = () => ({
  googleClientId: requireEnv("GOOGLE_CLIENT_ID"),
  googleClientSecret: requireEnv("GOOGLE_CLIENT_SECRET"),
  kakaoClientId: requireEnv("KAKAO_CLIENT_ID"),
  kakaoClientSecret: requireEnv("KAKAO_CLIENT_SECRET"),
});
