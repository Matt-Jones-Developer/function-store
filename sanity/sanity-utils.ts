import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { Store } from '@/types/Store';
import { Product } from '@/types/Product';
import { Page } from '@/types/Page';
import { User } from '@/types/User';

export async function getStore(): Promise<Store[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'store']{
      id,
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  // groq query
  return createClient(clientConfig).fetch(
    groq`*[_type == 'store' && slug.current == $slug][0] {
      id,
      _id,
      _createdAt,
      name, 
      'slug': slug.current,
      'image': image.asset->url,
      content
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page']{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'image': image.asset,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'image': image.asset,
      content
    }`,
    { slug }
  );
}

export async function createUser(user: User): Promise<User> {
  return createClient(clientConfig).create({ ...user, _type: 'user' });
}

export async function getUserByEmail(email: string): Promise<User> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'user' && email == $email][0] {
      _id,
      _createdAt,
      name,
      email,
      password
    }`,
    { email }
  );
}
