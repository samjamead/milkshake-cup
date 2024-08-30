import SolariBoard from '@/_components/solari-board'

export default async function DrawPage() {
  return (
    <div className='animate-in flex w-full flex-col gap-4 py-8 lg:gap-8 lg:py-12'>
      <h1 className='mb-4 text-3xl font-bold'>The Draw: 2024</h1>
      <p>The rules of the draw:</p>
      <ul className='flex list-disc flex-col gap-2 pl-4'>
        <li className='ml-4 pl-2'>One player from each pool in each group</li>
        <li className='ml-4 pl-2'>
          Whichever group Harry is drawn in will tee off first
        </li>
      </ul>
      <div className='flex items-start justify-between gap-8'>
        <div className='flex basis-1/4 flex-col justify-start gap-2 rounded-md bg-purple-400/15 p-3'>
          <p className='font-semibold'>Pool 1</p>
          <div className='flex justify-between gap-2'>
            <p>Sue</p>
            <p className='font-mono text-sm'>10.0</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Sam</p>
            <p className='font-mono text-sm'>10.8</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Mike</p>
            <p className='font-mono text-sm'>11.8</p>
          </div>
          <p className='font-semibold'>Pool 2</p>
          <div className='flex justify-between gap-2'>
            <p>Thomas</p>
            <p className='font-mono text-sm'>13.0</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Harry</p>
            <p className='font-mono text-sm'>15.7</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Alan</p>
            <p className='font-mono text-sm'>23.4</p>
          </div>
          <p className='font-semibold'>Pool 3</p>
          <div className='flex justify-between gap-2'>
            <p>Jamie</p>
            <p className='font-mono text-sm'>29.6</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Appin</p>
          </div>
          <div className='flex justify-between gap-2'>
            <p>Alistair</p>
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          <SolariBoard
            groupName='Group A'
            names={[
              'Sue',
              'Sam',
              'Mike',
              'Thomas',
              'Harry',
              'Alan',
              'Jamie',
              'Appin',
              'Alistair',
            ]}
            selectedNames={['Mike', 'Harry', 'Alistair']}
          />
          <SolariBoard
            drawDone
            groupName='Group B'
            names={['Sue', 'Sam', 'Thomas', 'Alan', 'Jamie', 'Appin']}
            selectedNames={['Sam', 'Thomas', 'Appin']}
          />
          <SolariBoard
            groupName='Group C'
            names={['Sue', 'Alan', 'Jamie']}
            selectedNames={['Sue', 'Alan', 'Jamie']}
          />
        </div>
      </div>
    </div>
  )
}
