export function Button({ handleClick, children, liked }) {
  return <button onClick={handleClick}>{children}</button>;
}
