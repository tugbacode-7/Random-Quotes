export function LikeIcon({ liked }) {
  return (
    <i
      className={`fa-solid fa-heart text-olive-800 fa-xl  ${liked ? "text-red-800" : ""}`}
    ></i>
  );
}

export function NextIcon() {
  return (
    <i className="fa-solid fa-circle-chevron-right text-olive-800 fa-2xl hover:text-olive-700"></i>
  );
}

export function PrevIcon() {
  return (
    <i className="fa-solid fa-circle-chevron-left text-olive-800 fa-2xl hover:text-olive-700"></i>
  );
}
