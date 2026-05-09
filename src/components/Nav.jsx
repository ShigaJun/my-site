import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/profile">プロフィール</Link>
          </li>
          <li>
            <Link to="/articles">投稿記事</Link>
          </li>
          <li>
            <Link to="/links">関連リンク</Link>
          </li>
        </ul>
      </nav>
  );
}
