const formEndpoint = 'https://formspree.io/f/mykdbwbl';

export default function InquiryForm() {
  return (
    <form className="jp-inquiry-form" action={formEndpoint} method="POST">
      <input type="hidden" name="_subject" value="北尻 京都日本語プライベートガイド お問い合わせ" />
      <input type="hidden" name="guide" value="北尻 日本語プライベートガイド" />
      <input type="hidden" name="source" value="https://www.umaacademia.com/japanese-guide" />

      <div className="jp-form-grid">
        <label className="jp-form-field">
          <span>お名前 <em>必須</em></span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className="jp-form-field">
          <span>返信先メール <em>必須</em></span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="jp-form-field">
          <span>ご希望日</span>
          <input type="date" name="preferred_date" />
        </label>
        <label className="jp-form-field">
          <span>人数</span>
          <select name="party_size" defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((count) => <option value={count} key={count}>{count}名</option>)}
            <option value="7名以上">7名以上</option>
          </select>
        </label>
      </div>

      <label className="jp-form-field jp-form-field-full">
        <span>行ってみたい場所</span>
        <input name="places_or_interests" placeholder="例：法然院、真如堂、曼殊院など" />
      </label>

      <label className="jp-form-field jp-form-field-full">
        <span>ご希望・メッセージ</span>
        <textarea name="message" placeholder="例：静かな寺を中心に、歩きすぎないコースを希望。タクシー利用も可。" rows={5} />
      </label>

      <div className="jp-form-actions">
        <button className="btn btn-primary" type="submit">問い合わせを送信する</button>
        <p>入力内容はフォームから直接送信されます。メールソフトは起動しません。お問い合わせ時点では予約確定ではありません。</p>
      </div>
      <p className="jp-form-privacy">入力いただいた情報は、お問い合わせへの回答とツアー調整のためにのみ使用します。送信にはFormspreeを利用しています。詳しくは<a href="/privacy">プライバシーについて</a>をご確認ください。</p>
    </form>
  );
}
