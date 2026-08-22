import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy / プライバシー',
  description: 'Privacy information for enquiries sent through Uma Academia Kyoto Private Guide.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="site-shell" lang="ja">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kyoto Private Guide home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy"><strong>Kyoto Private Guide</strong><small>Uma Academia</small></span>
        </a>
        <nav className="site-nav" aria-label="Privacy page navigation">
          <a href="/japanese-guide">日本語ガイド</a><a href="/">English</a>
        </nav>
      </header>

      <section className="content-section">
        <div className="section-head jp-wide-head">
          <p className="section-kicker">Privacy</p>
          <h1>お問い合わせ情報の取り扱い</h1>
          <p className="section-intro">Uma Academiaのガイドサービスへのお問い合わせでお預かりする情報は、必要な範囲に限定して取り扱います。</p>
        </div>
        <div className="about-copy">
          <h2>利用目的</h2>
          <p>お名前、返信先メールアドレス、ご希望日、人数、行ってみたい場所、メッセージ等は、お問い合わせへの回答、日程確認、ツアー内容の相談・調整のために使用します。</p>
          <h2 id="formspree">フォーム送信</h2>
          <p>ウェブフォームの送信にはFormspreeを利用しています。フォームに入力された情報は、送信処理のためFormspreeのサービスを経由します。</p>
          <h2>第三者への販売</h2>
          <p>お問い合わせ情報を広告目的で第三者に販売することはありません。法令上必要な場合を除き、ガイドサービスの相談・実施に不要な第三者提供は行いません。</p>
          <h2>保管</h2>
          <p>お問い合わせ対応やツアー調整に必要な期間、メール等に記録が残る場合があります。不要になった情報は、業務上・法令上必要な範囲を除き、適切に整理します。</p>
          <h2>お問い合わせ</h2>
          <p>本ページの内容については、ガイドサービスのお問い合わせ先までご連絡ください。</p>
        </div>
      </section>

      <footer className="site-footer"><p><strong>Uma Academia | Kyoto Private Guide</strong></p><p><a href="/japanese-guide">日本語ガイドへ戻る</a></p></footer>
    </main>
  );
}
