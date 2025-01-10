import RssFeedDisplay from "./Rss-feed-display";
import Fetch from "./Fetch";

export default function Articles() {
    return (
        <article className="gallery">
            <h2>投稿記事</h2>
            <Fetch />
            <RssFeedDisplay />
        </article>
    );
}