"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authApi } from "@/features/auth/infrastructure/api/authApi";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    authApi
      .fetchMe()
      .then((me) => {
        console.log("[AuthCallback] isRegistered:", me.isRegistered);
        console.log("[AuthCallback] nickname:", me.nickname);
        console.log("[AuthCallback] email:", me.email);

        if (!me.isRegistered) {
          router.replace("/terms");
        } else {
          router.replace("/");
        }
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  return null;
}
