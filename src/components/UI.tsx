// src/components/UI.tsx

export function Card({
  title,
  children,
}: {
  title?: string;
  children: any;
}) {
  return (
    <div className="rounded-xl border border-maroon/20 bg-paper shadow-sm">
      {title && (
        <div className="px-4 py-3 border-b border-maroon/20 font-semibold text-maroon">
          {title}
        </div>
      )}
      <div className="p-4 text-maroon">{children}</div>
    </div>
  );
}

export function Button({
  children,
  className = '',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-md border border-maroon bg-maroon text-paper hover:bg-maroon/90 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
