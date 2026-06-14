export const binaryString = (decimal: number | string) => {
  const parsedDecimal = parseInt(decimal.toString(), 10)
  return parsedDecimal.toString(2).padStart(8, '0')
}

export const dateStringToBinary = (date: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Invalid date format. Expected YYYY-MM-DD, got: ${date}`)
  }

  const dateComponents = date
    .slice(2, 10) // Remove first 2 year digits (e.g., "2024" -> "24")
    .split('-')
    .map((decimal) => {
      if (isNaN(parseInt(decimal, 10))) {
        throw new Error(`Invalid date component: ${decimal}`)
      }
      return binaryString(decimal)
    })

  return `${dateComponents[0]}-${dateComponents[1]}-${dateComponents[2]}`
}
