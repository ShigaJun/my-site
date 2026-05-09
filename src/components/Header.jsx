import { Link } from "react-router-dom";

import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-6 border-b">
      <Link to="/">
        <span className="text-xl font-semibold">
          <img
            src="images/logo.png"
            alt="Logo"
            className="inline-block size-8 mr-2"
          />
          Watanabe Haruto
        </span>
      </Link>

      <Nav />
    </header>
  );
}
