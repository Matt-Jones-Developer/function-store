import { useState } from 'react';
import Login from './LoginForm';

// login/sign-up switch buttons
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
      // [TODO] hide the search bar when login open
      className='login-dropdown flex justify-center flex-col lg:flex-row flex-wrap
      items-center p-8 mt-24 md:mt-16 pb-0 animate-slideDown'
    >
      {/* sign up or Log in */}
      <button type='button' className='text-2xl m-4'>
        {showLogin ? '' : ''}
      </button>
      {showLogin ? (
        <Login onClose={onClose} />
      ) : (
        <form className='flex gap-4'>
          {/* sign-up submit */}
          <button
            type='submit'
            className='signupnow-btn m-4 px-4 py-2 bg-indigo-600 text-white
          hover:scale-125 transition focus:outline focus:bg-indigo-800'
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
          className='login-switch-btn hover:text-indigo-600 hover:scale-105 transition'
          onClick={handleLoginClick}
        >
          Login
        </button>{' '}
        |{' '}
        <button
          className='signup-switch-btn hover:text-indigo-600 hover:scale-105 transition'
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
