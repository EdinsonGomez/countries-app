export const convertToDecimal = (number) => {
  if (!number) return '';

  const opt = { style: 'decimal', useGrouping: true };
  const res = Number(number).toLocaleString('en', opt);

  return res;
}