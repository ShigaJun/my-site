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
            &copy; 2026 Watanabe Haruto
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <Button
            onClick={returnTop}
            className="text-sm text-muted-foreground hover:scale-105 hover:text-foreground transition"
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
