"use client";

import { clientEnv } from "@/infrastructure/config/env";
import OAuthLoginButton from "@/features/auth/ui/components/OAuthLoginButton";

export default function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    const kakaoOAuthUrl = `${clientEnv.apiBaseUrl}${clientEnv.kakaoLoginPath}`;
    window.location.href = kakaoOAuthUrl;
  };

  return (
    <OAuthLoginButton
      provider="kakao"
      label="Kakao로 로그인"
      onClick={handleKakaoLogin}
    />
  );
}
