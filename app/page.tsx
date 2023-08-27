import Hero from '@/components/Home/Hero';

export default async function Index() {
  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-4 lg:py-8 text-foreground'>
        <Hero />
      </div>
    </div>
  );
}
