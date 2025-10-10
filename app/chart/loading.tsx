export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-stretch p-4 gap-4 animate-pulse">
      <h2 className="text-xl font-semibold">Loading chart…</h2>
      <div className="w-full" style={{ height: 384 }}>
        <div className="w-full h-full rounded-md border border-[color:var(--foreground)]/10 p-4">
          <div className="h-6 w-1/3 mb-4 bg-[color:var(--foreground)]/10 rounded" />
          <div className="h-[260px] w-full bg-[color:var(--foreground)]/10 rounded" />
          <div className="mt-4 flex items-center gap-2">
            <div className="h-3 w-20 bg-[color:var(--foreground)]/10 rounded" />
            <div className="h-3 w-20 bg-[color:var(--foreground)]/10 rounded" />
            <div className="h-3 w-20 bg-[color:var(--foreground)]/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
