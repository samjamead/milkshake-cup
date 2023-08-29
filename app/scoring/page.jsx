import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import ScoreInputForm from '../../components/ScoreForm/ScoreInputForm';

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className='flex flex-col justify-center items-center min-h-[60vh]'>
        <p className='py-12 text-foreground'>
          Please{' '}
          <Link href='/login' className='underline'>
            log in
          </Link>{' '}
          to edit scores
        </p>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-12 text-foreground'>
        <h1 className='text-3xl font-bold mb-8'>Enter 2023 scores</h1>
        <p className='mb-4'>Enter gross scores only</p>
        <ScoreInputForm />
      </div>
    </div>
  );
}
