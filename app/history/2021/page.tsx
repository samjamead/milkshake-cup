export default async function Index() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground'>
        <div className='flex flex-col items-center lg:mb-2'>
          <h2 className='text-3xl font-bold'>2021 Writeup</h2>
        </div>

        <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent' />

        <div className='flex flex-col items-center lg:mb-12'>
          <h4 className='mb-4'>Check back soon for scores!</h4>
        </div>
      </div>
    </div>
  );
}
