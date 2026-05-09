import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Articles from "./Articles";
import Links from "./Links";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="articles" element={<Articles />} />
        <Route path="links" element={<Links />} />
      </Routes>
    </main>
  );
}
