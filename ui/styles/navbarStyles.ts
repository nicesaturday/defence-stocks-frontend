export const navbarStyles = {
  nav: "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-black",
  logo: "text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  menuGroup: "flex items-center gap-6",
} as const;

export const navItemStyles = {
  base: "text-sm font-medium transition-colors",
  active: "text-zinc-900 underline underline-offset-4 dark:text-zinc-50",
  inactive: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
} as const;

export const authButtonStyles = {
  base: "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
  logout: "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
  loginActive: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
  loginInactive: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
} as const;
