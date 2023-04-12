import { PortableTextBlock } from 'sanity';

export type Store = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  // images, text, cost
  content: PortableTextBlock[];
};
