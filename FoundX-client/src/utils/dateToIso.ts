interface IDate {
  month: number;
  day: number;
  year: number;
}

export const dateToISOString = (date: IDate) => {
  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};
