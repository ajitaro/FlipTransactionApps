export function formatDate(dateString: string): string {
  const indoMonth = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = dateString.split(' ')[0].split('-');
  const year = date[0];
  const month = parseInt(date[1], 10) - 1;
  const day = date[2];

  return `${parseInt(day, 10)} ${indoMonth[month]} ${year}`;
}
