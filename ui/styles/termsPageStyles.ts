export const termsPageStyles = {
  container: "flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black py-8",
  card: "flex w-full max-w-lg flex-col items-center gap-8 rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
  title: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  description: "text-sm text-zinc-500 dark:text-zinc-400",
  termList: "flex w-full flex-col gap-4",
} as const;

export const termGroupStyles = {
  container: "w-full rounded-md border border-zinc-200 dark:border-zinc-700",
  header: "flex items-center justify-between px-4 py-3",
  nameRow: "flex items-center gap-2",
  name: "text-sm font-semibold text-zinc-900 dark:text-zinc-50",
  requiredBadge: "rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300",
  optionalBadge: "rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  toggleButton: "text-xs font-medium text-zinc-500 underline hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200",
  content: "border-t border-zinc-200 px-4 py-3 dark:border-zinc-700",
  section: "mb-3 last:mb-0",
  sectionTitle: "text-xs font-semibold text-zinc-700 dark:text-zinc-300",
  sectionText: "text-xs text-zinc-500 leading-relaxed dark:text-zinc-400",
} as const;
