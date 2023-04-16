import { PortableTextBlock } from 'sanity';

export type Product = {
  id: number;
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
