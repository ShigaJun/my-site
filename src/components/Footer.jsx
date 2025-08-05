export default function Footer() {
    return (
        <footer className="footer">
            <button onClick={returnTop}>ページトップへ移動</button>
            <p>&copy; 2025 Watanabe Haruto</p>
        </footer>
    );
}

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};