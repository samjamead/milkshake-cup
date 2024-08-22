export default async function Index() {
  return (
    <div className='w-full'>
      <div className='animate-in opacity-0 max-w-4xl mx-auto px-3 py-8 lg:py-16 text-foreground'>
        <h1 className='text-3xl font-bold mb-8 lg:mb-16'>2023 Itinerary</h1>

        <div className='mb-8 lg:mb-12'>
          <h2 className='mb-4 lg:mb-8 p-4 text-background rounded-lg bg-brand-alt-300'>
            Friday September 1st
          </h2>

          <h2 className='mb-4'>Kirkbymoorside Golf Club Charity event</h2>
          <address className='mb-4'>
            Kirkbymoorside Golf Course,
            <br />
            Manor Vale, Kirkbymoorside,
            <br />
            North Yorkshire, YO62 6EG
          </address>

          <h3>Teams and Tee Times</h3>
          <ul className='mb-4'>
            <li>
              <strong>Team Cream First</strong> - Tee time 14:00: Josh, Harry,
              Alan, Ali.
            </li>
            <li>
              <strong>Team Devon Dumplings</strong> - Tee time 14:10: Sam, Tom,
              Jamie, Pin.
            </li>
          </ul>

          <p>
            Stableford with best two scores to count on each hole, all 4 scores
            to count on the 18th.
          </p>

          <div className='w-full p-[1px] my-4 lg:my-8 bg-gradient-to-r from-foreground/10 to-transparent' />

          <h2 className='mb-4'>Dinner Location</h2>
          <address className='mb-4'>
            Mike and Sue Clements&apos; house
            <br />
            The Struan, Old Road,
            <br />
            Kirkbymoorside, YO62 6LT
          </address>
          <p>
            Described as the &quot;marvellously generous&quot; home of Mike and
            Sue Clements.
          </p>

          <div className='w-full p-[1px] my-4 lg:my-8 bg-gradient-to-r from-foreground/10 to-transparent' />

          <h2 className='mb-4'>Accommodation</h2>
          <address className='mb-4'>
            The George & Dragon Hotel,
            <br />
            17 Market Place, Kirkbymoorside YO62 6AA
          </address>
          <p className='mb-4'>Just a short walk from Mike & Sue&apos;s.</p>
          <ul className='mb-4'>
            <li>Triple Room - Harry, Ali, Josh.</li>
            <li>Double Room - Alan & Jamie.</li>
            <li>B&B - £49 each.</li>
          </ul>

          <p>Sam & Pin staying with Mike & Sue.</p>
        </div>

        <div className='lg:mb-12'>
          <h2 className='mb-4 lg:mb-8 p-4 text-background rounded-lg bg-brand-alt-300'>
            Saturday September 2nd
          </h2>

          <h2 className='mb-4'>The 2023 Milkshake Cup</h2>
          <address className='mb-4'>
            The Village Golf Course Backstonegill Lane,
            <br />
            Wike LS17 9JS
          </address>
          <p className='mb-4 font-bold'>
            Meet at The George &amp; Dragon at 09:15.
          </p>
          <p className='mb-4'>
            First round tees off at 11:00 - two rounds, stroke play (net).
            Winner takes it all.
          </p>

          <div className='w-full p-[1px] my-4 lg:my-8 bg-gradient-to-r from-foreground/10 to-transparent' />

          <h2 className='mb-4'>Awards Dinner</h2>
          <address className='mb-4'>
            The Olive Branch,
            <br />
            139 Street Lane, Roundhay, Leeds LS8 1AA
          </address>
          <p className='mb-4'>
            Full veg and GF options available as personally checked and
            inspected by T. Clements Esq.
          </p>
          <p className='mb-4'>
            <strong>Table booked for 18:15</strong> so the whole Clements fam
            can join us, then all back to Tom&apos;s for a bevvy or two &mdash;{' '}
            <span className='italic'>42 Chelwood Crescent, Leeds LS8 2AQ</span>
          </p>

          <div className='w-full p-[1px] my-4 lg:my-8 bg-gradient-to-r from-foreground/10 to-transparent' />

          <h2 className='mb-4'>Accommodation</h2>
          <address className='mb-4'>
            Hinsley Hall
            <br />
            62 Headingly Lane, Leeds, LS6 2BX
          </address>
          <p className='mb-4'>
            We&rsquo;ll get cabs to the restaurant and then back from
            Tom&rsquo;s.
          </p>
          <ul className='mb-4'>
            <li>Twin room with adjoining private bathroom - Sam and Pin.</li>
            <li>
              Two twin rooms with a shared adjoining private bathroom - Jamie,
              Harry, Ali, Josh.
            </li>
            <li>Single Room - Alan.</li>
            <li>B & B - £39 each.</li>
          </ul>
        </div>
        <div className='mb-8 lg:mb-16'>
          <h2 className='mb-4 lg:mb-8 p-4 text-background rounded-lg bg-brand-alt-300'>
            Sunday September 3rd
          </h2>

          <h2 className='mb-4'>The Milkshake Cup Travelling Golf Society</h2>
          <address className='mb-4'>
            Howley Hall Golf Club Scotchman Lane,
            <br />
            Morley, Leeds LS27 0NX
          </address>
          <p className='mb-4'>
            Tee times 09:50 and 10:00 - £40 per person.
            <br />
            35-40 mins travel time.
          </p>

          <div className='w-full p-[1px] my-4 lg:my-8 bg-gradient-to-r from-foreground/10 to-transparent' />

          <h2 className='mb-4'>Lunch Venue</h2>
          <address className='mb-4'>
            The Greedy Duck pub,
            <br />
            Scotchman Lane, Morley, West Yorkshire, LS27 0NZ
          </address>
          <p className='mb-4'>3 mins from the course.</p>
        </div>
      </div>
    </div>
  );
}
