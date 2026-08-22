import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "京都の日本語プライベートガイド 北尻",
  description:
    "京都在住のベテランガイド・北尻と歩く、京都リピーター向けの日本語プライベートガイド。洛北、奥嵯峨、大原、黒谷・真如堂など、何度来てもまだ知らない京都をご案内します。",
  alternates: { canonical: "/japanese-guide" },
  openGraph: {
    title: "何度来ても、まだ知らない京都がある。｜日本語ガイド 北尻",
    description: "京都在住のベテランガイド・北尻と、急がず深く味わう京都。",
    url: "/japanese-guide",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/kitajiri-guide.jpg", alt: "京都で街歩きを案内する北尻ガイド" }],
  },
};

const email = "eltontanaka@gmail.com";
const mailto = `mailto:${email}?subject=${encodeURIComponent("北尻 京都日本語プライベートガイド お問い合わせ")}`;

const routes = [
  { title: "黒谷・真如堂から哲学の道へ", time: "約4時間", route: "金戒光明寺 → 真如堂 → 哲学の道 → 銀閣寺周辺", text: "幕末の歴史、静かな名刹、東山の空気を味わうコース。京都には何度も来たけれど、黒谷や真如堂はまだ、という方におすすめです。" },
  { title: "洛北の小さな名刹を歩く", time: "約4時間", route: "詩仙堂 → 圓光寺 → 曼殊院", text: "庭園や建築をゆっくり楽しみたい方へ。中心部のにぎわいから少し離れた洛北で、落ち着いた京都を歩きます。" },
  { title: "嵐山の、その先の京都へ", time: "約4時間", route: "祇王寺 → 二尊院 → 奥嵯峨 → 化野念仏寺", text: "渡月橋や竹林だけではない嵯峨野へ。歴史ある寺院と昔の面影が残る道を、急がず歩きます。" },
  { title: "大原をゆっくり歩く", time: "約4時間", route: "三千院 → 大原の里 → 寂光院", text: "市街地とは違う空気が流れる大原へ。平家物語の世界や地域の歴史に触れながら、里の風景も楽しみます。" },
];

const places = ["祇園・東山", "二条城", "伏見稲荷", "金閣寺・銀閣寺", "三十三間堂", "南禅寺・永観堂", "修学院", "高台寺", "醍醐寺", "東寺", "栂尾高山寺"];

export default function JapaneseGuidePage() {
  return (
    <main className="site-shell" lang="ja">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Uma Academia Kyoto Private Guide home"><span className="brand-mark" aria-hidden="true">K</span><span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Uma Academia</small></span></a>
        <nav className="site-nav" aria-label="日本語ガイドページのナビゲーション"><a href="#about">北尻について</a><a href="#routes">モデルコース</a><a href="#service">料金・ご案内内容</a><a href="#contact">お問い合わせ</a><a href="/">English</a></nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">京都リピーターのための日本語プライベートガイド</p>
          <h1>何度来ても、まだ知らない京都がある。</h1>
          <p className="hero-text">京都在住のベテランガイド・北尻が、ガイドブックでは通り過ぎてしまう路地、寺院、歴史と文化をご案内します。名所を急いで消化するのではなく、二度目、三度目、その先の京都を、ゆっくり深く味わう時間です。</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#contact">日程を問い合わせる</a><a className="btn btn-secondary" href="#routes">モデルコースを見る</a></div>
          <div className="badge-row" aria-label="サービスの特徴"><span>4時間 ¥26,000</span><span>土日もご相談可</span><span>公共交通＋徒歩</span><span>当日現金払い</span></div>
        </div>
        <div className="hero-image-wrap"><img src="/kitajiri-guide.jpg" alt="京都で街歩きを案内する北尻ガイド" className="hero-image" fetchPriority="high" /></div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head"><p className="section-kicker">Your guide</p><h2>北尻と歩く、急がない京都</h2><p className="section-intro">有名な場所も、知られていない場所も。歴史や文化の背景を知ると、京都の見え方が変わります。</p></div>
        <div className="about-grid"><div className="about-photo-card"><img src="/kitajiri-guide.jpg" alt="京都在住の日本語プライベートガイド北尻" className="about-photo" /></div><div className="about-copy"><p>京都在住。長年、大手旅行会社のツアーガイドとして経験を重ねてきました。「北尻さんと行く」ツアーシリーズでも多くのお客様をご案内してきた、経験豊富なベテランガイドです。</p><p>京都検定1級をはじめ、歴史や文化に関する検定資格を複数保有。観光地の説明だけでなく、その土地の物語、寺社の背景、京都の暮らしや文化まで、分かりやすくお話しします。</p><p>現在はセミリタイア。日程が合う日に、一組ずつ丁寧にご案内します。予定を詰め込みすぎず、気になった場所では立ち止まりながら、京都をじっくり楽しみたい方に向いたガイドです。</p></div></div>
      </section>

      <section className="content-section" id="routes">
        <div className="section-head"><p className="section-kicker">Sample tours</p><h2>まずは4つの京都から</h2><p className="section-intro">下記は一例です。行きたい場所を挙げていただければ、移動時間や季節、歩くペースを考えて無理のないコースをご提案します。</p></div>
        <div className="route-grid">{routes.map((item, index) => <article className="route-card" key={item.title}><span className="route-number">0{index + 1}</span><h3>{item.title}</h3><p className="route-time">{item.time}</p><p className="route-flow">{item.route}</p><p>{item.text}</p></article>)}</div>
        <p className="section-note">モデルコースは一例です。寺社の開閉門、混雑、天候、交通状況などにより当日の行程を調整する場合があります。</p>
      </section>

      <section className="content-section" id="custom">
        <div className="section-head"><p className="section-kicker">Your Kyoto</p><h2>聞いたことはある。でも、まだ行ったことがない。</h2><p className="section-intro">そんな場所を教えてください。有名寺院から静かな名刹、裏道まで、ご希望に合わせて組み立てます。</p></div>
        <div className="guest-grid">{places.map((place) => <article className="guest-card" key={place}><p className="guest-text">{place}</p></article>)}</div>
        <p className="section-note">このほか、真如堂、金戒光明寺、詩仙堂、圓光寺、曼殊院、祇王寺、二尊院、化野念仏寺、寂光院などもご相談ください。</p>
      </section>

      <section className="content-section pricing-section" id="service">
        <div className="section-head"><p className="section-kicker">Guide fee & service</p><h2>4時間 ¥26,000。延長もできます</h2><p className="section-intro">料金は1グループあたりのガイド料金です。当日、現金でお支払いください。</p></div>
        <div className="pricing-grid"><article className="price-card featured"><div className="price-badge">基本プラン</div><h3>4時間</h3><div className="price">¥26,000</div><p>1グループあたり</p></article><article className="price-card"><h3>時間延長</h3><div className="price">¥6,000</div><p>1時間あたり</p></article><article className="price-card"><h3>お支払い</h3><div className="price">現金</div><p>ツアー当日にお支払い</p></article></div>
        <div className="service-grid"><article className="info-card"><h3>公共交通機関と徒歩</h3><p>基本は約4時間。公共交通機関と徒歩でご案内します。日程に余裕がある場合は時間延長もご相談いただけます。</p></article><article className="info-card"><h3>旅行代理店ではありません</h3><p>車両、タクシー、ホテル等の予約・手配は行いません。ガイドサービスのみを提供します。</p></article><article className="info-card"><h3>実費は別途</h3><p>交通費、昼食・飲食代、寺社等の拝観料・入場料は含まれません。ガイドの入場料も、必要な場合は当日現金で別途ご負担ください。</p></article></div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="section-head compact-head"><p className="section-kicker">Contact</p><h2>まずはメールでご相談ください</h2></div>
        <div className="contact-card"><p className="contact-lead">ご希望の日程、人数、行ってみたい場所や興味のあるテーマ、歩くペースなどをお知らせください。行き先が決まっていなくても、「何度も京都に来ているので、今回は普通ではない京都を見たい」だけでも大丈夫です。</p><p>日程を確認し、対応可能な場合にご返信します。土曜日・日曜日もご相談いただけます。お問い合わせ時点では予約確定ではありません。</p><div className="contact-actions"><a className="btn btn-primary" href={mailto}>メールで問い合わせる</a></div><p className="contact-direct-note">お問い合わせ先：{email}<br />ガイド料金はツアー当日に現金でお支払いください。</p></div>
      </section>

      <footer className="site-footer"><p><strong>北尻 | 京都 日本語プライベートガイド</strong></p><p>Uma Academia · 日本語ガイドのお問い合わせ</p></footer>
    </main>
  );
}
