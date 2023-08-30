import Link from 'next/link';

const resources = [
  {
    title: '2023 Information',
    subtitle: 'The tee times, the schedule, the details, the links, the plan.',
    url: '/2023',
    icon: 'M 3 4 H 21 V 22 H 3 V 4 M 16 2 V 6 M 8 2 V 6 M 3 10 H 21 M 9 16 L 11 18 L 15 14',
  },
  {
    title: '2023 Leaderboard',
    subtitle: 'Scoring to update soon...',
    url: '/leaderboard',
    icon: 'M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528',
  },
  {
    title: 'Honours Board',
    subtitle: "Move over Lords, there's a new honours board in town.",
    url: '/honours',
    icon: 'M 6 8 A 6 6 0 1 0 18 8 A 6 6 0 1 0 6 8 M15.477 12.89 L 17 22 l-5-3 l-5 3 l 1.523-9.11',
  },
];

export default function Resources() {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-4 mb-12'>
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
            <h3 className='text-base font-bold'>{title}</h3>
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
  );
}
