export const getCelsius = (kelvin) => {
  const temp = kelvin - 275.15
  return temp.toFixed(1)
}