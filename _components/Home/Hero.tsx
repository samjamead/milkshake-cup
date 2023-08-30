import Image from 'next/image';
import styles from './Hero.module.css';

import champ from '../../public/champ.jpeg';
import champHover from '../../public/champHover.jpeg';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className='p-4 lg:p-8 flex flex-col lg:flex-row justify-between items-stretch gap-12 group'>
        <div className='shrink flex flex-col justify-between text-brand-950'>
          <h4 className='font-bold mb-4 lg:mb-0'>
            DEFENDING CHAMPION&apos;S WELCOME
          </h4>
          <div>
            <p className='mb-4 text-xl'>
              As he declined his invitation to this year&apos;s Milkshake Cup,
              Tiger wistfully said to me, &quot;There&apos;s no sense in going
              to a tournament if you don&apos;t believe that you can win
              it.&quot;
            </p>
            <p className='mb-4 text-xl '>Do you have what it takes?</p>
            <p className='mb-4 lg:mb-0 text-xl '>See you in Leeds!</p>
          </div>
          <h4 className='font-bold text-right '>
            &mdash;Alan Mead, 2022 Champion
          </h4>
        </div>

        <div className='w-[100%] lg:w-[250px] flex-shrink-0 relative'>
          <Image
            src={champ}
            alt='2022 Champion Alan Mead'
            width={250}
            height={333}
            className='rounded-lg w-[100%]'
            priority
          />
          <Image
            src={champHover}
            alt='2022 Champion Alan Mead'
            width={250}
            height={333}
            className=' absolute top-0 w-[100%] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'
            priority
          />
        </div>
      </div>
    </div>
  );
}
