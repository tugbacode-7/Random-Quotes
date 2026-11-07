export function AuthorName({ className, children }) {
  return (
    <p className={`text-lg font-normal text-right  ${className}`}>{children}</p>
  );
}
