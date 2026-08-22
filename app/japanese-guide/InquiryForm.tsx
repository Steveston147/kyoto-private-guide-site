'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const email = 'eltontanaka@gmail.com';

export default function InquiryForm() {
  const [target, setTarget] = useState<Element | null>(null);
  const [name, setName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [places, setPlaces] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTarget(document.querySelector('.jp-contact-card'));
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `北尻 京都日本語プライベートガイド お問い合わせ${name ? `（${name}様）` : ''}`;
    const body = [
      '北尻 京都日本語プライベートガイドへのお問い合わせ',
      '',
      `お名前：${name}`,
      `返信先メール：${replyEmail}`,
      `ご希望日：${date || '未定'}`,
      `人数：${partySize || '未定'}名`,
      `行ってみたい場所：${places || '未定'}`,
      '',
      'ご希望・メッセージ：',
      message || '特になし',
      '',
      '※このフォームは予約確定ではありません。日程確認後に返信をお願いします。',
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!target) return null;

  return createPortal(
    <form className="jp-inquiry-form" onSubmit={handleSubmit}>
      <div className="jp-form-grid">
        <label className="jp-form-field">
          <span>お名前 <em>必須</em></span>
          <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required />
        </label>
        <label className="jp-form-field">
          <span>返信先メール <em>必須</em></span>
          <input type="email" value={replyEmail} onChange={(event) => setReplyEmail(event.target.value)} autoComplete="email" required />
        </label>
        <label className="jp-form-field">
          <span>ご希望日</span>
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label className="jp-form-field">
          <span>人数</span>
          <select value={partySize} onChange={(event) => setPartySize(event.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((count) => <option value={count} key={count}>{count}名</option>)}
            <option value="7">7名以上</option>
          </select>
        </label>
      </div>
      <label className="jp-form-field jp-form-field-full">
        <span>行ってみたい場所</span>
        <input value={places} onChange={(event) => setPlaces(event.target.value)} placeholder="例：法然院、真如堂、曼殊院など" />
      </label>
      <label className="jp-form-field jp-form-field-full">
        <span>ご希望・メッセージ</span>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="例：静かな寺を中心に、歩きすぎないコースを希望。タクシー利用も可。" rows={5} />
      </label>
      <div className="jp-form-actions">
        <button className="btn btn-primary" type="submit">入力内容をメールで送る</button>
        <p>送信ボタンを押すと、お使いのメールソフトが開きます。内容をご確認のうえ送信してください。</p>
      </div>
    </form>,
    target,
  );
}
