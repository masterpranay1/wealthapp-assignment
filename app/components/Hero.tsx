import Image from 'next/image';
import clsx from 'clsx';

function Profile() {
  return (
      <div className={clsx(
        'flex flex-row items-center justify-center gap-4',
        'min-w-[50ch]'
      )}>
        <Image 
          src="/images/profile.png"
          alt="Picture of the testimony"
          width={120}
          height={120}
        />

        <div className='font-normal text-xl'>
          <h3 className='font-medium text-2xl'>Simrin Sirur</h3>
          <small className='leading-6 block my-4 text-xl'>Journalist <br/> The Print, Gurugram</small>
          <p className='max-w-[45ch]'>&quot;I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money.&quot;</p>
        </div>
      </div>
  )
}

export default function Hero() {
  return (
    <>
      <main
        className={clsx(
          'flex flex-col justify-center items-center',
          'bg-[#0A5783] text-white',
          'p-12'
        )}
      >
        <h2 className='text-4xl font-bold'>Transforming Lives - Financially!</h2>

        <section className={clsx(
          'flex flex-row items-center justify-center gap-4 flex-wrap',
        )}>
          <Profile />
          <Image 
            src="/images/arrow.png"
            alt="arrow"
            width={17}
            height={34}
            className='w-auto h-auto'
          />
          <Image
            src="/images/hero-grid.png"
            alt="hero"
            width={456}
            height={456}
          />
        </section>
      </main>
    </>
  );
}
