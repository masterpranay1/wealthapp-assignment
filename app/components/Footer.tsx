import Image from 'next/image';
import clsx from 'clsx';

export default function Footer() {
  return (
    <>
      <footer className={clsx(
        'bg-gradient-to-b from-[#1FB3A5] to-[#18A1A7]',
        'p-8'
      )}>
        <Image 
          src="/images/footer-company.png"
          alt="footer-company"
          width={1392}
          height={400}
        />
      </footer>
    </>
  )
}