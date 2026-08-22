import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "京都をもっと深く知る日本語プライベートガイド 北尻",
  description:
    "京都を何度も訪れている方へ。京都在住のベテランガイド・北尻と、静かな名刹、裏道、歴史と文化を深く味わう日本語プライベートガイド。4時間26,000円、延長1時間6,000円。",
  keywords: [
    "京都 日本語ガイド",
    "京都 プライベートガイド",
    "京都 穴場 ガイド",
    "京都 リピーター 観光",
    "京都 寺 ガイド",
    "京都 歴史 ガイド",
    "京都 大人 旅行",
    "京都 個人ガイド",
  ],
  alternates: { canonical: "/japanese-guide" },
  openGraph: {
    title: "何度来ても、まだ知らない京都がある。｜日本語ガイド 北尻",
    description: "観光する京都から、教わる京都へ。京都在住のベテランガイドと歩く、リピーターのためのプライベート京都。",
    url: "/japanese-guide",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/kitajiri-guide.jpg", alt: "京都在住の日本語プライベートガイド北尻" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "何度来ても、まだ知らない京都がある。｜日本語ガイド 北尻",
    description: "京都を何度も訪れている方へ。静かな名刹、裏道、歴史と文化をベテランガイドと深く味わう4時間。",
    images: ["/kitajiri-guide.jpg"],
  },
};

const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("北尻 京都日本語プライベートガイド お問い合わせ")}`;

const routes = [
  {
    title: "黒谷・真如堂から哲学の道へ",
    time: "約4時間",
    route: "金戒光明寺 → 真如堂 → 哲学の道 → 銀閣寺周辺",
    text: "幕末の京都と静かな名刹をつなぐ東山。名前は知っていても、じっくり歩いたことがない方にこそおすすめしたいコースです。",
  },
  {
    title: "洛北の小さな名刹を歩く",
    time: "約4時間",
    route: "詩仙堂 → 圓光寺 → 曼殊院",
    text: "庭園、建築、寺の物語を味わう洛北。中心部のにぎわいから離れ、京都らしい静けさの中で一つひとつ見ていきます。",
  },
  {
    title: "嵐山の、その先の京都へ",
    time: "約4時間",
    route: "祇王寺 → 二尊院 → 奥嵯峨 → 化野念仏寺",
    text: "渡月橋や竹林だけではない嵯峨野へ。平家物語や地域の歴史に触れながら、観光客の流れから少し離れた奥嵯峨を歩きます。",
  },
  {
    title: "大原をゆっくり深く歩く",
    time: "約4時間",
    route: "三千院 → 大原の里 → 寂光院",
    text: "三千院だけで帰らず、大原の里と寂光院まで。平家物語の世界と京都郊外の暮らしを感じる、大人のための半日です。",
  },
];

const areas = [
  {
    title: "東山・岡崎",
    places: ["祇園", "高台寺", "南禅寺", "永観堂", "金戒光明寺", "真如堂", "銀閣寺"],
  },
  {
    title: "洛北",
    places: ["詩仙堂", "圓光寺", "曼殊院", "修学院", "大原三千院", "寂光院"],
  },
  {
    title: "嵯峨・高雄",
    places: ["祇王寺", "二尊院", "化野念仏寺", "奥嵯峨", "栂尾高山寺"],
  },
  {
    title: "市内・山科・伏見",
    places: ["二条城", "三十三間堂", "東寺", "醍醐寺", "伏見稲荷", "金閣寺"],
  },
];

export default function JapaneseGuidePage() {
  return (
    <main className="site-shell japanese-guide-page" lang="ja">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Uma Academia Kyoto Private Guide home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Uma Academia</small></span>
        </a>
        <nav className="site-nav" aria-label="日本語ガイドページのナビゲーション">
          <a href="#about">北尻について</a>
          <a href="#routes">コース</a>
          <a href="#service">料金</a>
          <a href="#contact">お問い合わせ</a>
          <a href="/">English</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">京都を何度も訪れている方へ</p>
          <h1>何度来ても、まだ知らない京都がある。</h1>
          <p className="hero-text">名所を「見る」京都から、その背景を「知る」京都へ。京都在住のベテランガイド・北尻が、静かな名刹、裏道、歴史と文化をご案内します。京都を知っている方にこそ楽しんでいただきたい、一組貸切の4時間です。</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">希望日を相談する</a>
            <a className="btn btn-secondary" href="#routes">モデルコースを見る</a>
          </div>
          <div className="badge-row" aria-label="サービスの特徴">
            <span>4時間 ¥26,000</span>
            <span>一組貸切</span>
            <span>タクシー利用も可</span>
            <span>当日現金払い</span>
          </div>
        </div>
        <div className="hero-image-wrap"><img src="/kitajiri-guide.jpg" alt="京都在住の日本語プライベートガイド北尻" className="hero-image" fetchPriority="high" /></div>
      </section>

      <section className="content-section jp-audience-section" aria-labelledby="jp-audience-title">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">For Kyoto repeaters</p>
          <h2 id="jp-audience-title">京都を知っている方にこそ、案内したい京都があります。</h2>
          <p className="section-intro">清水寺も金閣寺も、祇園も嵐山も知っている。だから次は、ガイドブックの順番どおりではなく、京都で暮らし、長年案内してきた人の話を聞きながら歩いてみませんか。</p>
        </div>
        <div className="jp-audience-grid">
          <article className="jp-audience-card"><span>01</span><h3>人に教えたくなる京都へ</h3><p>有名寺院のすぐ近くにある静かな名刹や、何度も名前を聞きながらまだ訪れていない場所へ。</p></article>
          <article className="jp-audience-card"><span>02</span><h3>観光ではなく、京都を教わる</h3><p>寺社の由来、歴史人物、建築、庭、地域の暮らし。見ただけでは分からない背景を、会話しながら楽しみます。</p></article>
          <article className="jp-audience-card"><span>03</span><h3>無理に詰め込まない</h3><p>歩くこと自体を楽しみながら、必要ならタクシーも使います。数を競わず、その日の京都を味わう案内です。</p></article>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">Your guide</p>
          <h2>北尻と歩く、京都を教わる4時間</h2>
          <p className="section-intro">説明を聞いて終わりではなく、「なぜ？」「これは何？」と話しながら歩けるのが個人ガイドの良さです。</p>
        </div>
        <div className="jp-guide-grid">
          <div className="about-copy">
            <p>京都在住。クラブツーリズムで長年ツアーガイドとして経験を重ね、「北尻さんと行く」ツアーシリーズでも多くのお客様をご案内してきました。丁寧な仕事と親しみやすい案内を大切にしています。</p>
            <p>京都検定1級をはじめ、神社検定、奈良検定など歴史や文化に関する資格を保有。寺社の名前や年代を並べるだけではなく、その土地の物語や人物、京都の暮らしまで分かりやすくお話しします。</p>
            <p>現在はセミリタイアし、日程が合う日に一組ずつご案内しています。予定を詰め込みすぎず、気になった場所では立ち止まりながら、京都を深く楽しみたい方に向いたガイドです。</p>
          </div>
          <aside className="jp-credential-card" aria-label="北尻ガイドの特徴">
            <p className="jp-credential-label">Kitajiri at a glance</p>
            <dl>
              <div><dt>拠点</dt><dd>京都在住</dd></div>
              <div><dt>経験</dt><dd>大手旅行会社で長年のガイド経験</dd></div>
              <div><dt>資格</dt><dd>京都検定1級・神社検定・奈良検定など</dd></div>
              <div><dt>スタイル</dt><dd>急がず、会話しながら、丁寧に</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="content-section" id="routes">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">Sample tours</p>
          <h2>観光地の「その先」へ。</h2>
          <p className="section-intro">以下は約4時間の一例です。実際には、ご希望、季節、混雑、歩くペースを見ながら組み立てます。移動を楽にしたい場合は、タクシーを組み合わせることもできます。</p>
        </div>
        <div className="route-grid">{routes.map((item, index) => <article className="route-card" key={item.title}><span className="route-number">0{index + 1}</span><h3>{item.title}</h3><p className="route-time">{item.time}</p><p className="route-flow">{item.route}</p><p>{item.text}</p></article>)}</div>
        <p className="section-note">モデルコースは一例です。寺社の開閉門、混雑、天候、交通状況などにより当日の行程を調整する場合があります。</p>
      </section>

      <section className="content-section" id="custom">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">Your Kyoto</p>
          <h2>「名前は知っている。でも、まだ行ったことがない。」を教えてください。</h2>
          <p className="section-intro">行きたい場所を2、3か所挙げるだけでも大丈夫です。そこから、移動に無理のない、その日のための京都を考えます。</p>
        </div>
        <div className="jp-area-grid">{areas.map((area) => <article className="jp-area-card" key={area.title}><h3>{area.title}</h3><div className="jp-place-list">{area.places.map((place) => <span key={place}>{place}</span>)}</div></article>)}</div>
        <p className="section-note">ここにない場所ももちろんご相談ください。有名な場所を深く見ることも、静かな場所だけをつなぐこともできます。</p>
      </section>

      <section className="content-section pricing-section" id="service">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">Guide fee & service</p>
          <h2>4時間 ¥26,000。一組のために、京都を組み立てます。</h2>
          <p className="section-intro">料金は1グループあたりのガイド料金です。ツアー当日に現金でお支払いください。</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card featured"><div className="price-badge">基本プラン</div><h3>4時間</h3><div className="price">¥26,000</div><p>1グループあたり</p></article>
          <article className="price-card"><h3>時間延長</h3><div className="price">¥6,000</div><p>1時間あたり</p></article>
          <article className="price-card"><h3>お支払い</h3><div className="price jp-cash-label">現金</div><p>ツアー当日にお支払い</p></article>
        </div>
        <div className="service-grid">
          <article className="info-card"><h3>徒歩・公共交通・タクシー</h3><p>徒歩と公共交通を基本に、距離、天候、体調に応じてタクシーも利用できます。タクシー代はお客様の実費負担です。</p></article>
          <article className="info-card"><h3>ガイドサービスのみ</h3><p>ホテル、専用車、ハイヤー等の予約・手配は行いません。事前の車両手配を含まない、シンプルな個人ガイドサービスです。</p></article>
          <article className="info-card"><h3>実費は別途</h3><p>交通費、昼食・飲食代、寺社等の拝観料・入場料は含まれません。ガイドの入場料も、必要な場合は当日現金で別途ご負担ください。</p></article>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head compact-head jp-contact-head"><p className="section-kicker">Contact</p><h2>次の京都について、まずはメールで話しましょう。</h2></div>
        <div className="contact-card jp-contact-card">
          <p className="contact-lead">ご希望の日程、人数、行ってみたい場所をお知らせください。「静かな寺を巡りたい」「歴史の話をたくさん聞きたい」「歩きすぎず、タクシーも使いたい」など、旅の好みも一言いただければ十分です。</p>
          <p>日程を確認し、対応可能な場合にご返信します。土曜日・日曜日もご相談いただけます。お問い合わせ時点では予約確定ではありません。</p>
          <div className="contact-actions"><a className="btn btn-primary" href={mailto}>希望日をメールで相談する</a></div>
          <p className="contact-direct-note">お問い合わせ先：{email}<br />ガイド料金はツアー当日に現金でお支払いください。</p>
        </div>
      </section>

      <footer className="site-footer"><p><strong>北尻 | 京都 日本語プライベートガイド</strong></p><p>Uma Academia · 京都を何度も訪れている方のための個人ガイド</p></footer>
    </main>
  );
}
