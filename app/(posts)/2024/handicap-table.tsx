import * as d3 from 'd3'

export default function HandicapTable() {
  const data = [
    { name: 'Sue', index: 10.0, playing: 10 },
    { name: 'Sam', index: 10.8, playing: 10 },
    { name: 'Mike', index: 11.8, playing: 11 },
    { name: 'Thomas', index: 13.0, playing: 13 },
    { name: 'Harry', index: 15.7, playing: 16 },
    { name: 'Alan', index: 23.4, playing: 24 },
    { name: 'Jamie', index: 29.6, playing: 30 },
    { name: 'Appin', index: null, playing: 36 },
    { name: 'Alistair', index: null, playing: 36 },
  ]

  return (
    <table>
      <thead>
        <tr>
          <td className='px-4'>Name</td>
          <td className='px-4 text-right'>Index</td>
          <td className='px-4 text-right'>Playing</td>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, index, playing }) => {
          return (
            <tr key={name}>
              <td className='px-4'>{name}</td>
              <td className='px-4 text-right font-mono'>
                {index && d3.format('.1f')(index)}
              </td>
              <td className='px-4 text-right font-mono'>{playing}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
