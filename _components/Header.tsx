import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import LogoutButton from './LogoutButton';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

function Logo({ className }: { className: string }) {
  return (
    <svg
      width='55'
      height='33'
      viewBox='0 0 650 389'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g fill='currentColor'>
        <rect x='0' y='222' width='570' height='167' rx='5'></rect>
        <path d='M207,140.039609 C207,137.279379 209.188115,134.529972 211.864504,133.903967 L280.135496,117.935436 C282.822087,117.307044 287.188115,117.30943 289.864504,117.935436 L358.135496,133.903967 C360.822087,134.532358 363,137.2707 363,140.039609 L363,223.002162 C363,225.762392 360.764764,228 358.008174,228 L211.991826,228 C209.234917,228 207,225.771071 207,223.002162 L207,140.039609 Z'></path>
        <path d='M100.583654,1 L95.1692359,1 C95.1692359,1 71.2002155,69.509465 71.2002155,121.870834 C71.2002155,155.330412 81.1221263,158.339987 84.5677168,183.400168 C87.5513288,205.100325 84.5677168,223 84.5677168,223 L120.844998,223 C120.844998,223 120.944668,203.89961 118.067249,179.770793 C115.18983,155.641976 97.6001077,141.662328 102.659625,104.158381 C104.712795,88.6216715 105.337506,71.4110459 105.279128,55.5712202 L185.366651,65.4047359 L191.947595,11.8072437 L100.633349,0.595264109 L100.583654,1 Z'></path>
        <path d='M419.84134,222.674965 C419.84134,222.674965 417.981752,149.65099 417.981752,139.631106 C417.981752,133.22126 417.226813,84.3875381 515.017742,48.59014 C548.630552,36.2858173 594.487193,19.6337985 613.43594,25.5022201 C634.809494,32.1216044 643.190742,59.1862967 647.715565,93.0739677 C652.240388,126.961639 648.465408,149.305683 630.232435,161.990686 C609.50231,176.413002 473.932777,144.380627 453.026163,160.280302 C441.13764,169.321635 446.164191,222.674965 446.164191,222.674965 L419.84134,222.674965 Z'></path>
      </g>
    </svg>
  );
}

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
      <div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground'>
        <div>
          <Link href='/'>
            <Logo className='logo' />
          </Link>
        </div>
        <div>
          {user && (
            <div className='flex items-center gap-4'>
              <Link href='/scoring' className='pr-4 underline'>
                Scoring
              </Link>
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
