import KakaoLoginButton from "@/features/auth/ui/components/KakaoLoginButton";
import { loginPageStyles } from "@/ui/styles/loginPageStyles";

export default function LoginPage() {
  return (
    <div className={loginPageStyles.container}>
      <div className={loginPageStyles.card}>
        <div className="flex flex-col items-center gap-2">
          <h1 className={loginPageStyles.title}>로그인</h1>
          <p className={loginPageStyles.description}>
            소셜 계정으로 로그인하세요
          </p>
        </div>
        <div className={loginPageStyles.buttonGroup}>
          <KakaoLoginButton />
        </div>
      </div>
    </div>
  );
}
