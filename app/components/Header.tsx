import Image from 'next/image';
import clsx from 'clsx';

export default function Header() {
  return (
    <>
      <header className={
        clsx(
          'bg-gradient-to-br from-[#159C98] to-[#138F9E]',
          'flex flex-col items-center justify-center gap-4',
          'p-4')
      }>
        <h1 className="font-semibold text-white text-6xl">Backed by the best</h1>
        <small className="font-light text-white text-3xl">Wealthup is backed and supported by</small>
        <Image 
          src="/images/header-company.png"
          alt="header-company"
          width={800}
          height={400}
        />
      </header>
    </>
  )
}