// src/utils/generateSlug.ts
import { v4 as uuidv4 } from 'uuid';

export const generateSlug = (title: string): string => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return `${slug}-${uuidv4()}`;
};
