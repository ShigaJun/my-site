import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import Links from "./Links";

export default function Nav() {
    return (
        <BrowserRouter>
            <div>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/articles">投稿記事</Link></li>
                        <li><Link to="/links">関連リンク</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="links" element={<Links />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}