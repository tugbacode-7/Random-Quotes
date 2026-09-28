export function QuoteText({ className, children, liked}) {
  return <p className={`text-2xl font-semibold text-center ${liked ? "underline decoration-red-800" : ""} ${className}`}>{children}</p>;
}
