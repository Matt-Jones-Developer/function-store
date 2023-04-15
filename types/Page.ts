import { PortableTextBlock } from 'sanity';

export type Page = {
  id: number;
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
