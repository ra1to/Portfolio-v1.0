import dayjs from 'dayjs';

type Props = {
  convertDate: string | number | Date;
  className?: string;
};

export default function ConvertDate({ convertDate, className }: Props) {
  const publishedAt = dayjs(convertDate).format('YYYY/MM/DD');
  
  return <time className={`text-sm ${className ?? ''}`}>{publishedAt}</time>;
}