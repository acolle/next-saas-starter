import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (fullName: string, limit?: number): string => {
  const initials = fullName
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word[0]?.toUpperCase())
    .join('');
    
  return limit ? initials.slice(0, limit) : initials;
};
