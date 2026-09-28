export function LikeButton({ handleClick, children, liked }) {
  return <button onClick={handleClick}>{children}</button>;
}
