import { Button } from "@/components/ui/button";

import FooterSocialLinks from "./FooterSocialLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t py-4">
      <div className="flex mx-auto max-w-full px-4 items-center">
        <div className="flex-1" />

        <div className="flex flex-col items-center gap-2">
          <FooterSocialLinks />

          <p className="text-sm text-muted-foreground">
            &copy; 2026 Watanabe Haruto · 
            <a 
              href="https://github.com/ShigaJun/my-site"
              target="_blank"
              className="hover:underline ml-1"
            >
              Source on GitHub
              </a>
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <Button
            onClick={returnTop}
            className="text-sm text-muted-foreground hover:scale-105 hover:text-foreground transition"
            aria-label="ページトップへ移動"
          >
            ^
          </Button>
        </div>
      </div>
    </footer>
  );
}

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
