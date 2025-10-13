export function Divider() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-border" />
      </div>
      <div className="relative flex items-center justify-between w-full max-w-[calc(var(--container-xl)+0.75rem)]">
        <div className="size-3 bg-background border rounded-xs" />
        <div className="size-3 bg-background border rounded-xs" />
      </div>
    </div>
  );
}
