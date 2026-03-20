export const loginPageStyles = {
  container: "flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black",
  card: "flex w-full max-w-sm flex-col items-center gap-8 rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
  title: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  description: "text-sm text-zinc-500 dark:text-zinc-400",
  buttonGroup: "flex w-full flex-col gap-3",
} as const;

export const oauthButtonStyles = {
  base: "flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors",
  kakao: "bg-[#FEE500] text-[#191919] hover:bg-[#F5DC00]",
  google: "border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700",
  naver: "bg-[#03C75A] text-white hover:bg-[#02b351]",
  meta: "bg-[#1877F2] text-white hover:bg-[#166FE5]",
} as const;
