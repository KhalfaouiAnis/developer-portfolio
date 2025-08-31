import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaMedium,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function getContactIcon(name) {
  switch (name) {
    case "github":
      return (
        <FaGithub
          size={18}
          className="text-black dark:text-white scale-up"
        />
      );
    case "twitter":
      return (
        <FaSquareXTwitter
          size={18}
          className="text-black dark:text-white scale-up"
        />
      );
    case "linkedin":
      return (
        <FaLinkedin
          size={18}
          className="text-[#0a66c2] dark:text-white scale-up"
        />
      );
    case "youtube":
      return (
        <FaYoutube
          size={18}
          className="text-[#ff0000] dark:text-white scale-up"
        />
      );
    case "instagram":
      return (
        <FaInstagram
          size={18}
          className="text-[#c32aa3] dark:text-white scale-up"
        />
      );
    case "facebook":
      return (
        <FaFacebookSquare
          size={18}
          className="text-[#1877f2] dark:text-white scale-up"
        />
      );
    case "medium":
      return (
        <FaMedium
          size={18}
          className="text-black dark:text-white scale-up"
        />
      );
    case "email":
      return (
        <MdEmail
          size={18}
          className="text-black dark:text-white scale-up"
        />
      );
    case "cv":
      return (
        <FaRegUserCircle
          size={18}
          className="text-black dark:text-white scale-up"
        />
      );
    default:
      break;
  }
}
