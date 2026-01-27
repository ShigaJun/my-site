import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function Nav() {
  return (
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">ホーム</Link>
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
