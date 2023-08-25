export default async function Index() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground'>
        <div className='flex flex-col items-center lg:mb-2'>
          <h1 className='text-3xl font-bold'>2023 Itinerary</h1>
        </div>

        <div className='w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent' />

        <div className='lg:mb-12'>
          <h2>Day 1 - Friday September 1st</h2>

          <h2>Kirkbymoorside Golf Club Charity event</h2>
          <address>
            Kirkbymoorside Golf Course,
            <br />
            Manor Vale, Kirkbymoorside,
            <br />
            North Yorkshire, YO62 6EG
          </address>

          <h3>Teams and Tee Times</h3>
          <ul>
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

          <h2>Dinner Location</h2>
          <address>
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

          <h2>Accommodation</h2>
          <address>
            The George & Dragon Hotel,
            <br />
            17 Market Place, Kirkbymoorside YO62 6AA
          </address>
          <p>Just a short walk from Mike & Sue&apos;s.</p>
          <ul>
            <li>Triple Room - Harry, Ali, Josh.</li>
            <li>Double Room - Alan & Jamie.</li>
            <li>B&B - £49 each.</li>
          </ul>

          <p>Sam & Pin staying with Mike & Sue.</p>
        </div>
        <div className='lg:mb-12'>
          <h2>Day 2 - Saturday September 2nd</h2>

          <h2>The 2023 Milkshake Cup</h2>
          <address>
            The Village Golf Course Backstonegill Lane,
            <br />
            Wike LS17 9JS
          </address>
          <p>
            First round tees off at 11:00 - two rounds, stroke play. Winner
            takes it all.
            <br />
            Meet at The George &amp; Dragon at 09:15.
          </p>

          <h2>Awards Dinner</h2>
          <address>
            The Olive Branch,
            <br />
            139 Street Lane, Roundhay, Leeds LS8 1AA
          </address>
          <p>
            Full veg and GF options available as personally checked and
            inspected by T. Clements Esq.
            <br />
            Table booked for 18:15 so the whole Clements fam can join us, then
            all back to Tom&apos;s for a bevvy or two -<br />
            42 Chelwood Crescent, Leeds LS8 2AQ
          </p>

          <h2>Accommodation</h2>
          <address>
            Hinsley Hall
            <br />
            62 Headingly Lane, Leeds, LS6 2BX
          </address>
          <p>
            We&rsquo;ll get cabs to the restaurant and then back from
            Tom&rsquo;s.
          </p>
          <ul>
            <li>Twin room with adjoining private bathroom - Sam and Pin.</li>
            <li>
              Two twin rooms with a shared adjoining private bathroom - Jamie,
              Harry, Ali, Josh.
            </li>
            <li>Single Room - Alan.</li>
            <li>B & B - £39 each.</li>
          </ul>
        </div>
        <div>
          <h2>Day 3 - Sunday September 3rd</h2>

          <h2>The Milkshake Cup Travelling Golf Society</h2>
          <address>
            Howley Hall Golf Club Scotchman Lane,
            <br />
            Morley, Leeds LS27 0NX
          </address>
          <p>
            Tee times 09:50 and 10:00 - £40 per person.
            <br />
            35-40 mins travel time.
          </p>

          <h2>Lunch Venue</h2>
          <address>
            The Greedy Duck pub,
            <br />
            Scotchman Lane, Morley, West Yorkshire, LS27 0NZ
          </address>
          <p>3 mins from the course.</p>
        </div>
      </div>
    </div>
  );
}
