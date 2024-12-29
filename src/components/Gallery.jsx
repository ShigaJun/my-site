import Articles from "./Articles";
import Fetch from "./Fetch";

export default function Gallery() {
    return (
        <article className="gallery">
            <h2>投稿記事</h2>
            <Fetch />
            <Articles />
        </article>
    );
}