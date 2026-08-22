import './japanese-guide.css';
import './proof-gallery.css';
import './uat-polish.css';
import InquiryForm from './InquiryForm';

export default function JapaneseGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <InquiryForm />
    </>
  );
}
