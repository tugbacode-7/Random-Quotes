import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCircleRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export function PrevIcon() {
  return (
    <FontAwesomeIcon
      icon={faCircleLeft}
      className="fa-solid fa-circle-chevron-left text-olive-800 fa-2xl hover:text-olive-700"
    />
  );
}

export const NextIcon = () => (
  <FontAwesomeIcon
    icon={faCircleRight}
    className="fa-solid fa-circle-chevron-right text-olive-800 fa-2xl hover:text-olive-700"
  />
);

export const LikeIcon = ({ liked }) => (
  <FontAwesomeIcon
    icon={faHeart}
    className={`fa-solid fa-heart text-olive-800 fa-xl  ${liked ? "text-red-800" : ""}`}
  />
);
