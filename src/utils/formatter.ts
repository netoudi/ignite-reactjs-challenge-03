import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function timeAgo(value: string) {
  return formatDistanceToNow(new Date(value), { addSuffix: true, locale: ptBR });
}
