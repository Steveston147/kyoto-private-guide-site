import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "京都をもっと深く知る日本語プライベートガイド 北尻",
  description:
    "京都を何度も訪れている方へ。京都在住のベテランガイド・北尻と、静かな名刹、裏道、歴史と文化を深く味わう日本語プライベートガイド。4時間26,000円、延長1時間6,000円。",
  keywords: ["京都 日本語ガイド", "京都 プライベートガイド", "京都 穴場 ガイド", "京都 リピーター 観光", "京都 歴史 ガイド", "京都 個人ガイド"],
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
const clubTourismUrl = "https://www.club-t.com/keyword/%E5%8C%97%E5%B0%BB/";

const qualifications = ["京都検定 1級", "奈良検定", "神社検定", "温泉ソムリエ", "びわ湖検定"];

const guideScenes = [
  { title: "南禅寺インクライン", image: "/kitajiri-incline.webp", text: "桜の季節。景色だけでなく、琵琶湖疏水や近代京都の背景まで。" },
  { title: "化野念仏寺", image: "/kitajiri-adashino.webp", text: "奥嵯峨の静かな寺で、土地の歴史をゆっくりと。" },
  { title: "法然院", image: "/kitajiri-honenin.webp", text: "紅葉の東山。少人数だから、立ち止まって話せます。" },
  { title: "曼殊院", image: "/kitajiri-manshuin.webp", text: "洛北の門跡寺院。名前は知っていても、まだという方へ。" },
];

const destinations = [
  { title: "南禅寺インクライン", image: "/kitajiri-incline.webp", alt: "桜の南禅寺インクラインを案内する北尻ガイド" },
  { title: "化野念仏寺", image: "/kitajiri-adashino.webp", alt: "化野念仏寺を案内する北尻ガイド" },
  { title: "法然院", image: "/kitajiri-honenin.webp", alt: "紅葉の法然院を案内する北尻ガイド" },
  { title: "曼殊院", image: "/kitajiri-manshuin.webp", alt: "曼殊院を案内する北尻ガイド" },
  { title: "詩仙堂", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kyoto%2C_Shisen-do.jpg?width=900", alt: "詩仙堂の庭園" },
  { title: "祇王寺", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gi%C5%8Dji.jpg?width=900", alt: "嵯峨野の祇王寺" },
  { title: "金戒光明寺", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/170216%20Konkaikomyoji%20Kyoto%20Japan10n.jpg?width=900", alt: "京都の金戒光明寺" },
  { title: "祇園白川", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shirakara%20Canal%2C%20Gion%2C%20Kyoto.jpg?width=900", alt: "祇園白川の町並み" },
];

const routes = [
  { title: "黒谷・真如堂・法然院", time: "約4時間", route: "金戒光明寺 → 真如堂 → 法然院", text: "有名な東山のすぐ近くに残る、静かな名刹をつなぎます。幕末、庭、寺の物語をじっくり。" },
  { title: "洛北の小さな名刹を歩く", time: "約4時間", route: "詩仙堂 → 圓光寺 → 曼殊院", text: "庭園、建築、寺の物語を味わう洛北。中心部のにぎわいから少し離れた京都へ。" },
  { title: "嵐山の、その先の京都へ", time: "約4時間", route: "祇王寺 → 二尊院 → 奥嵯峨 → 化野念仏寺", text: "渡月橋や竹林だけではない嵯峨野へ。平家物語や地域の歴史に触れながら歩きます。" },
  { title: "大原をゆっくり深く歩く", time: "約4時間", route: "三千院 → 大原の里 → 寂光院", text: "三千院だけで帰らず、大原の里と寂光院まで。京都郊外の暮らしと物語を感じる半日です。" },
];

export default function JapaneseGuidePage() {
  return (
    <main className="site-shell japanese-guide-page" lang="ja">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Uma Academia Kyoto Private Guide home"><span className="brand-mark" aria-hidden="true">K</span><span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Uma Academia</small></span></a>
        <nav className="site-nav" aria-label="日本語ガイドページのナビゲーション">
          <a href="#about">北尻について</a><a href="#proof">実績・資格</a><a href="#places">訪問地</a><a href="#service">料金</a><a href="#contact">お問い合わせ</a><a href="/">English</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">京都を何度も訪れている方へ</p>
          <h1>何度来ても、まだ知らない京都がある。</h1>
          <p className="hero-text">名所を「見る」京都から、その背景を「知る」京都へ。京都在住のベテランガイド・北尻が、静かな名刹、裏道、歴史と文化をご案内します。京都を知っている方にこそ楽しんでいただきたい、一組貸切の4時間です。</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#contact">希望日を相談する</a><a className="btn btn-secondary" href="#places">訪問地を見る</a></div>
          <div className="badge-row" aria-label="サービスの特徴"><span>4時間 ¥26,000</span><span>一組貸切</span><span>タクシー利用も可</span><span>当日現金払い</span></div>
        </div>
        <div className="hero-image-wrap"><img src="/kitajiri-guide.jpg" alt="京都在住の日本語プライベートガイド北尻" className="hero-image" fetchPriority="high" /></div>
      </section>

      <section className="content-section jp-audience-section" aria-labelledby="jp-audience-title">
        <div className="section-head jp-wide-head"><p className="section-kicker">For Kyoto repeaters</p><h2 id="jp-audience-title">京都を知っている方にこそ、案内したい京都があります。</h2><p className="section-intro">清水寺も金閣寺も、祇園も嵐山も知っている。だから次は、ガイドブックの順番どおりではなく、京都で暮らし、長年案内してきた人の話を聞きながら歩いてみませんか。</p></div>
        <div className="jp-audience-grid">
          <article className="jp-audience-card"><span>01</span><h3>「聞いたことがある」の、その先へ</h3><p>名前は知っている。でもまだ行っていない。そんな静かな名刹や町を選びます。</p></article>
          <article className="jp-audience-card"><span>02</span><h3>観光ではなく、京都を教わる</h3><p>寺社の由来、人物、建築、庭、地域の暮らし。見ただけでは分からない背景を会話しながら。</p></article>
          <article className="jp-audience-card"><span>03</span><h3>大人の旅は、無理に詰め込まない</h3><p>歩くこと自体を楽しみ、必要ならタクシーも利用。数を競わず、その日の京都を味わいます。</p></article>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head jp-wide-head"><p className="section-kicker">Your guide</p><h2>北尻と歩く、京都を教わる4時間</h2><p className="section-intro">説明を聞いて終わりではなく、「なぜ？」「これは何？」と話しながら歩けるのが個人ガイドの良さです。</p></div>
        <div className="jp-guide-grid">
          <div className="about-copy"><p>京都在住。クラブツーリズムで長年ツアーガイドとして経験を重ね、現在も「北尻ガイド同行」「北尻ナビゲーター同行」として公開ツアーに名前が掲載されています。</p><p>寺社の名前や年代を並べるだけではなく、その土地の物語や人物、京都の暮らしまで分かりやすくお話しします。丁寧で親しみやすく、急がせないご案内を大切にしています。</p><p>現在はセミリタイア。日程が合う日に一組ずつ、気になった場所では立ち止まりながら、京都を深く楽しみたい方をご案内します。</p></div>
          <aside className="jp-credential-card" aria-label="北尻ガイドの特徴"><p className="jp-credential-label">Kitajiri at a glance</p><dl><div><dt>拠点</dt><dd>京都在住</dd></div><div><dt>経験</dt><dd>大手旅行会社で長年のガイド経験</dd></div><div><dt>得意</dt><dd>歴史・寺社・文化・静かな京都</dd></div><div><dt>スタイル</dt><dd>急がず、会話しながら、丁寧に</dd></div></dl></aside>
        </div>
      </section>

      <section className="content-section jp-scenes-section" aria-labelledby="jp-scenes-title">
        <div className="section-head jp-wide-head"><p className="section-kicker">Guiding in Kyoto</p><h2 id="jp-scenes-title">実際のご案内風景</h2><p className="section-intro">写真はいずれも北尻の案内風景です。大人数を先導するのではなく、お客様の反応を見ながら、その場で話を深めていきます。</p></div>
        <div className="jp-scene-grid">{guideScenes.map((scene) => <figure className="jp-scene-card" key={scene.title}><img src={scene.image} alt={`${scene.title}でお客様をご案内する北尻ガイド`} loading="lazy" /><figcaption><strong>{scene.title}</strong><span>{scene.text}</span></figcaption></figure>)}</div>
      </section>

      <section className="content-section jp-proof-section" id="proof">
        <div className="section-head jp-wide-head"><p className="section-kicker">Experience & credentials</p><h2>経験と資格は、知識のエビデンス。</h2><p className="section-intro">「詳しい人らしい」だけではなく、現在の活動と保有資格を分かる形でお見せします。</p></div>
        <div className="jp-proof-grid">
          <article className="jp-proof-panel jp-club-panel">
            <p className="jp-proof-overline">ACTIVE WITH CLUB TOURISM</p>
            <h3>大手旅行会社でも、現在ツアーを担当</h3>
            <p>クラブツーリズムの公開ツアー検索では、<strong>「北尻ガイド同行」「北尻ナビゲーター同行」</strong>の企画が複数掲載されています。</p>
            <div className="jp-tour-examples" aria-label="クラブツーリズムで確認できる担当テーマの例"><span>奈良まほろば名所歩き</span><span>佐渡島ハイキング</span><span>天草諸島ウォーク</span><span>京都の文化行事</span></div>
            <p className="jp-proof-date"><time dateTime="2026-08-22">2026年8月22日確認</time></p>
            <a className="jp-external-link" href={clubTourismUrl} target="_blank" rel="noreferrer">クラブツーリズムで「北尻」の掲載ツアーを見る ↗</a>
          </article>
          <aside className="jp-proof-panel jp-qualification-panel" aria-label="北尻ガイドの保有資格">
            <p className="jp-proof-overline">QUALIFICATIONS</p><h3>保有資格</h3>
            <ul className="jp-qualification-list">{qualifications.map((qualification) => <li key={qualification}><span aria-hidden="true">✓</span><strong>{qualification}</strong></li>)}</ul>
            <p className="jp-qualification-note">京都だけに限らず、寺社、日本の地域文化、旅そのものへの関心を長年積み重ねてきたことの裏付けです。</p>
          </aside>
        </div>
        <p className="jp-proof-disclaimer">※クラブツーリズム掲載のツアーは同社が企画・販売する別商品です。本ページの個人ガイドサービスとは予約・料金・条件が異なります。掲載内容や催行日は同社サイトでご確認ください。</p>
      </section>

      <section className="content-section jp-destinations-section" id="places">
        <div className="section-head jp-wide-head"><p className="section-kicker">Places worth knowing</p><h2>「名前は知っている。でも、まだ行ったことがない。」京都へ。</h2><p className="section-intro">初めての京都向けの定番コースではありません。二度目、三度目、その先の京都で、静けさや物語が残る場所を中心にご提案します。</p></div>
        <div className="jp-destination-grid">{destinations.map((place) => <article className="jp-destination-card" key={place.title}><img src={place.image} alt={place.alt} loading="lazy" referrerPolicy="no-referrer" /><div className="jp-destination-shade" aria-hidden="true" /><h3>{place.title}</h3></article>)}</div>
        <p className="section-note">このほか、真如堂、圓光寺、寂光院、二尊院、栂尾高山寺なども。行きたい場所を2、3か所挙げていただければ、季節・移動・混雑を考えて組み立てます。</p>
        <p className="jp-photo-credit">訪問地のフリー写真：詩仙堂 Adriano / CC BY-SA 3.0、祇王寺 ChubbyWimbus / Public Domain、金戒光明寺 663highland / CC BY-SA 4.0、祇園白川 MichaelMaggs / CC BY-SA 2.5（Wikimedia Commons）。その他は北尻ガイドの案内風景写真。</p>
      </section>

      <section className="content-section" id="routes">
        <div className="section-head jp-wide-head"><p className="section-kicker">Sample tours</p><h2>4時間の組み方の一例</h2><p className="section-intro">行程は固定ではありません。ご希望、季節、混雑、歩くペースを見ながら、その日に合う京都を組み立てます。</p></div>
        <div className="route-grid">{routes.map((item, index) => <article className="route-card" key={item.title}><span className="route-number">0{index + 1}</span><h3>{item.title}</h3><p className="route-time">{item.time}</p><p className="route-flow">{item.route}</p><p>{item.text}</p></article>)}</div>
        <p className="section-note">モデルコースは一例です。寺社の開閉門、混雑、天候、交通状況などにより当日の行程を調整する場合があります。</p>
      </section>

      <section className="content-section pricing-section" id="service">
        <div className="section-head jp-wide-head"><p className="section-kicker">Guide fee & service</p><h2>4時間 ¥26,000。一組のために、京都を組み立てます。</h2><p className="section-intro">料金は1グループあたりのガイド料金です。ツアー当日に現金でお支払いください。</p></div>
        <div className="pricing-grid"><article className="price-card featured"><div className="price-badge">基本プラン</div><h3>4時間</h3><div className="price">¥26,000</div><p>1グループあたり</p></article><article className="price-card"><h3>時間延長</h3><div className="price">¥6,000</div><p>1時間あたり</p></article><article className="price-card"><h3>お支払い</h3><div className="price jp-cash-label">現金</div><p>ツアー当日にお支払い</p></article></div>
        <div className="service-grid"><article className="info-card"><h3>徒歩・公共交通・タクシー</h3><p>徒歩と公共交通を基本に、距離、天候、体調に応じてタクシーも利用できます。タクシー代はお客様の実費負担です。</p></article><article className="info-card"><h3>ガイドサービスのみ</h3><p>ホテル、専用車、ハイヤー等の予約・手配は行いません。事前の車両手配を含まない、シンプルな個人ガイドサービスです。</p></article><article className="info-card"><h3>実費は別途</h3><p>交通費、昼食・飲食代、寺社等の拝観料・入場料は含まれません。ガイドの入場料も、必要な場合は当日現金で別途ご負担ください。</p></article></div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head compact-head jp-contact-head"><p className="section-kicker">Contact</p><h2>次の京都について、まずはメールで話しましょう。</h2></div>
        <div className="contact-card jp-contact-card"><p className="contact-lead">ご希望の日程、人数、行ってみたい場所をお知らせください。「静かな寺を巡りたい」「歴史の話をたくさん聞きたい」「歩きすぎず、タクシーも使いたい」など、旅の好みも一言いただければ十分です。</p><p>日程を確認し、対応可能な場合にご返信します。土曜日・日曜日もご相談いただけます。お問い合わせ時点では予約確定ではありません。</p><div className="contact-actions"><a className="btn btn-primary" href={mailto}>希望日をメールで相談する</a></div><p className="contact-direct-note">お問い合わせ先：{email}<br />ガイド料金はツアー当日に現金でお支払いください。</p></div>
      </section>

      <footer className="site-footer"><p><strong>北尻 | 京都 日本語プライベートガイド</strong></p><p>Uma Academia · 京都を何度も訪れている方のための個人ガイド</p></footer>
    </main>
  );
}
