import Link from 'next/link';
import Image from 'next/image';
import champ from '../public/champ.jpeg';
import champHover from '../public/champHover.jpeg';

export const dynamic = 'force-dynamic';

const resources = [
  {
    title: '2023 Information',
    subtitle: 'The tee times, the schedule, the details, the links, the plan.',
    url: '/2023',
    icon: 'M 3 4 H 21 V 22 H 3 V 4 M 16 2 V 6 M 8 2 V 6 M 3 10 H 21 M 9 16 L 11 18 L 15 14',
  },
  {
    title: '2022 Recap',
    subtitle: 'Relive the excitement of our first visit to The Village',
    url: '/2022',
    icon: 'M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528',
  },
  {
    title: 'Honours Board',
    subtitle: "Move over Lords, there's a new honours board in town.",
    url: '/honours',
    icon: 'M 6 8 A 6 6 0 1 0 18 8 A 6 6 0 1 0 6 8 M15.477 12.89 L 17 22 l-5-3 l-5 3 l 1.523-9.11',
  },
];

export default async function Index() {
  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-4 lg:py-12 text-foreground'>
        <div className='bg-[color:var(--card-bg)] border border-yellow-200 rounded-xl p-4 lg:p-8 mb-8 flex flex-col lg:flex-row justify-between items-stretch gap-12 group'>
          <div className='shrink flex flex-col justify-between text-background'>
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
            />
            <Image
              src={champHover}
              alt='2022 Champion Alan Mead'
              width={250}
              height={333}
              className=' absolute top-0 w-[100%] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300'
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          {resources.map(({ title, url, icon }) => (
            <Link
              key={title}
              className='relative flex flex-row justify-between gap-6 items-center group rounded-lg border p-6'
              href={url}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='opacity-80 group-hover:opacity-100'
              >
                <path
                  d={icon}
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='grow'>
                <h3 className='font-bold'>{title}</h3>
              </div>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300'
              >
                <polyline points='9 18 15 12 9 6' />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
