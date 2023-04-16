import { useState } from 'react';
import Login from './LoginForm';

// lgoin/signup switch buttons
type LoginPageProps = {
  onClose: () => void;
};

function LoginPage({ onClose }: LoginPageProps) {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  return (
    <div
      className='login-dropdown flex justify-center flex-col lg:flex-row flex-wrap
      items-center p-8 mt-16 pb-0 mb-0 animate-slideDown'
    >
      <button type='button' className='text-2xl m-4'>
        {showLogin ? '' : 'Sign Up Here!'}
      </button>
      {showLogin ? (
        <Login onClose={onClose} />
      ) : (
        <form className='flex gap-4'>
          {/* Add input fields for sign up */}
          <button
            type='submit'
            className='m-4 px-4 py-2 bg-indigo-600 text-white
          hover:bg-gray-600 focus:outline-none focus:bg-indigo-800'
          >
            Sign Up Now
          </button>
        </form>
      )}
      {/* Login to Sign Up switch */}
      <div
        className='login-signup px-4 py-2 mt-4 lg:mt-0 text-md cursor-pointer 
        items-center font-light border-2'
      >
        <button
          className='login-btn hover:text-indigo-600'
          onClick={handleLoginClick}
        >
          Login
        </button>{' '}
        |{' '}
        <button
          className='signup-btn hover:text-indigo-600'
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
