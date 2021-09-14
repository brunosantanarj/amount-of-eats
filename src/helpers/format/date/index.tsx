export const formatDateToPT = (date: Date) =>
  new Intl.DateTimeFormat('pt-br').format(date)
