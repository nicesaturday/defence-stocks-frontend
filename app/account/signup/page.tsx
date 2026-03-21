"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { termsStorage } from "@/features/terms/infrastructure/storage/termsStorage";
import { signupPageStyles } from "@/ui/styles/signupPageStyles";

export default function SignupPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const agreements = termsStorage.load();

    if (!agreements || agreements.length === 0) {
      router.replace("/terms");
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) {
    return null;
  }

  return (
    <div className={signupPageStyles.container}>
      <div className={signupPageStyles.card}>
        <div className="flex flex-col items-center gap-2">
          <h1 className={signupPageStyles.title}>회원가입</h1>
          <p className={signupPageStyles.description}>
            추가 정보를 입력하여 가입을 완료하세요
          </p>
        </div>
      </div>
    </div>
  );
}
