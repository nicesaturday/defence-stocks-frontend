"use client";

import { oauthButtonStyles } from "@/ui/styles/loginPageStyles";

type OAuthProvider = keyof typeof oauthButtonStyles extends "base" | infer P ? P : never;

interface OAuthLoginButtonProps {
  provider: OAuthProvider;
  label: string;
  onClick: () => void;
}

export default function OAuthLoginButton({ provider, label, onClick }: OAuthLoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${oauthButtonStyles.base} ${oauthButtonStyles[provider]}`}
    >
      {label}
    </button>
  );
}
