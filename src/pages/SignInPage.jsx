import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthLayoutFooter from '../components/AuthLayout/AuthLayoutFooter';
import AuthLayoutHeader from '../components/AuthLayout/AuthLayoutHeader';
import AuthLayoutMain from '../components/AuthLayout/AuthLayoutMain';
import SignInForm from '../components/SignInPage/SignInForm';
import Alert from '../components/ui/Alert';
import { unsetSignInErrorMessageActionCreator } from '../states/authStatus/action';
import { capitalizeFirstLetter, setDocumentTitle } from '../utils';

function SignInPage() {
  const dispatch = useDispatch();
  const { signInErrorMessage, isAfterSignUp } = useSelector(
    (states) => states.authStatus
  );

  useEffect(() => {
    setDocumentTitle('Sign In');
  }, []);

  useEffect(() => {
    dispatch(unsetSignInErrorMessageActionCreator());
  }, [dispatch]);

  return (
    <>
      <AuthLayoutHeader type="sign-in" />
      <AuthLayoutMain>
        {isAfterSignUp && (
          <Alert
            type="success"
            message="Congratulations, your account has been successfully registered. Please sign in to continue."
          />
        )}
        {signInErrorMessage && (
          <Alert
            type="danger"
            message={capitalizeFirstLetter(signInErrorMessage)}
          />
        )}
        <SignInForm />
      </AuthLayoutMain>
      <AuthLayoutFooter>
        <p>
          Don&apos;t have an account?{' '}
          <Link
            to="/sign-up"
            className="text-primary-500 hover:underline"
            title="Sign Up"
          >
            Sign up here
          </Link>
          .
        </p>
      </AuthLayoutFooter>
    </>
  );
}

export default SignInPage;
