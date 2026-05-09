export default function Home() {
  return (
    <div className="flex items-center justify-center gap-16">
      <div>
        <p>渡邊 陽翔 -Watanabe Haruto-</p>

        <p>所属</p>
        <ul>
          <li>
            <p>
              <a
                href="https://dept.chs.nihon-u.ac.jp/information_science/"
                target="_blank"
              >
                日本大学文理学部情報科学科
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href="https://vdslab.jp/" target="_blank">
                尾上研究室(vdslab)
              </a>
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://chs.nihon-u.ac.jp/research/rings/"
                target="_blank"
              >
                次世代社会研究センター RINGS
              </a>
            </p>
          </li>
        </ul>
      </div>

      <img src="images/profile.jpg" alt="プロフィール写真" className="w-48" />
    </div>
  );
}
