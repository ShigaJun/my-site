export default function Footer() {
    return (
        <footer className="footer">
            <button onClick={returnTop}>ページトップへ移動</button>
        </footer>
    );
}

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};