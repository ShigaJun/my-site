import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Articles from "./Gallery";

export default function Nav() {
    return (
        <BrowserRouter>
            <div>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/articles">投稿記事</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="articles" element={<Articles />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}