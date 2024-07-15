function retornarSoNumero(value: string)
{
  return value.replace(/\D/g, "")
}

function pad(value) {
  return value.toString().padStart(2, 0);
}

function retornarDataSemUtc(date: string)
{
  let newDate = new Date(date);
  
  let dateFormat = `${newDate.getFullYear()}-${pad(newDate.getMonth() + 1)}-${pad(newDate.getDate())}T${pad(newDate.getHours())}:${pad(newDate.getMinutes())}:${pad(newDate.getSeconds())}`

  // return dateFormat.replace( " " , "T" )+'.000Z'
  return dateFormat
}

export { retornarSoNumero, retornarDataSemUtc };