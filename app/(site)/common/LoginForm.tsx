import { useState } from 'react';
import { createClient } from '@sanity/client';
import bcrypt from 'bcryptjs';

type LoginProps = {
  onClose: () => void;
};

const client = createClient({
  projectId: '0hqp6uux',
  dataset: 'production',
  apiVersion: '2023-04-12',
  token: process.env.WRITE_TOKEN, // user schema vercel env var
  useCdn: false, // This is needed to get the latest data from the backend
});

function Login({ onClose }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const query = `*[_type == "user" && email == $email][0]`;
      const params = {
        email: email,
      };
      const result = await client.fetch(query, params);
      if (result) {
        // User exists, check if password matches
        const isValidPassword = await bcrypt.compare(
          password,
          result.password.hash
        );
        if (isValidPassword) {
          // Password matches, log user in
          // Set some state or redirect to main app page
          console.log('Login success - redirecting');
        } else {
          // Password does not match, show error message
          console.log('Login error');
        }
      } else {
        // User does not exist, create a new user
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const mutation = `mutation {
          create user {
            email: $email,
            password: {
              salt: $salt,
              hash: $hashedPassword
            }
          }
        }`;
        const params = {
          email: email,
          password: {
            salt: salt,
            hashedPassword: hashedPassword,
          },
        };
        await client.fetch(mutation, params);
        // Log user in
        // Set some state or redirect to main app page
        console.log('Login success - redirecting');
      }
      onClose(); // Close the login modal after login
    } catch (error) {
      console.error('Login error', error);
      // Show error message
    }
  };

  return (
    <form
      className='flex gap-4 flex-col lg:flex-row items-center'
      onSubmit={handleSubmit}
    >
      <label htmlFor='email' className='email-lbl text-gray-800'>
        Email:
      </label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className='px-4 py-2 border border-gray-300 
        focus:outline-none focus:ring focus:ring-indigo-600 w-96 lg:w-56'
      />

      <label htmlFor='password' className='pwd-lbl text-gray-800'>
        Password:
      </label>
      <input
        id='password'
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className='px-4 py-2 border border-gray-300
        focus:outline-none focus:ring focus:ring-indigo-600 w-96 lg:w-56'
      />
      <button
        type='submit'
        className='px-8 py-2 m-4 bg-indigo-600 text-white
         hover:scale-105 hover:bg-indigo-800 w-48'
        onClick={onClose}
      >
        Submit
      </button>
    </form>
  );
}

export default Login;
