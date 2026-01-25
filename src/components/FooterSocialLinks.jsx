import { ImMail } from "react-icons/im";
import { FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-4 text-4xl">
      <a
        href="mailto:watanabe.haruto.4869@gmail.com"
        className="hover:scale-105 transition"
        aria-label="Email"
      >
        <ImMail className="scale-[0.875]" />
      </a>
      <a
        href="https://x.com/wata_haru_4869"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition"
        aria-label="X"
      >
        <FaSquareXTwitter />
      </a>
      <a
        href="https://github.com/ShigaJun"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 transition"
        aria-label="GitHub"
      >
        <FaSquareGithub />
      </a>
    </div>
  );
}
