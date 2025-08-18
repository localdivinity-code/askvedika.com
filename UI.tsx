export function Card({ title, children }: { title?: string, children: any }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      {title && <div className="px-4 py-3 border-b font-semibold">{title}</div>}
      <div className="p-4">{children}</div>
    </div>
  )
}
export function Button({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...rest} className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50 active:scale-[.99]">{children}</button>
}
