import {format} from 'date-fns';
import {ref} from 'vue'

export function formatDate(date: string | Date): string {
 return format(new Date(date), "MMMM dd, yyyy");
}