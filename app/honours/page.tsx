import data from "./data.json";

export default async function Index() {
  return (
    <div className="w-full py-8 lg:py-12">
      <div className="animate-in opacity-0 text-foreground flex flex-col gap-4 lg:gap-8">
        <h1 className="text-3xl font-bold mb-4">Honours Board</h1>

        <div className="lg:mb-12">
          <table className="mb-8 table-auto w-full text-xs md:text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Year</th>
                <th className="p-2">Venue</th>
                <th className="p-2">Winner</th>
                <th className="p-2 hidden md:table-cell">Runner up</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.year} className="even:bg-foreground/5">
                  <td className="p-2">{entry.year}</td>
                  <td className="p-2">{entry.venue || ""}</td>
                  <td className="p-2 font-medium">{entry.winner}</td>
                  <td className="p-2 hidden md:table-cell">
                    {entry.second || ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
