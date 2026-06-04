export default function Loading() {
  const loadingQuips = [
    'Pouring milkshakes...',
    'Blading chips...',
    'Topping drives...',
    'Lipping out a putt...',
  ]

  const quip = loadingQuips[Math.floor(Math.random() * loadingQuips.length)]

  return (
    <div className='flex h-full min-h-svh w-full items-center justify-center'>
      <p className='font-medium'>{quip}</p>
    </div>
  )
}
