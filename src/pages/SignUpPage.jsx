import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthLayoutFooter from '../components/AuthLayout/AuthLayoutFooter';
import AuthLayoutHeader from '../components/AuthLayout/AuthLayoutHeader';
import AuthLayoutMain from '../components/AuthLayout/AuthLayoutMain';
import SignUpForm from '../components/SignUpPage/SignUpForm';
import Alert from '../components/ui/Alert';
import { unsetSignUpErrorMessageActionCreator } from '../states/authStatus/action';
import { capitalizeFirstLetter, setDocumentTitle } from '../utils';

function SignUpPage() {
  const dispatch = useDispatch();
  const { signUpErrorMessage } = useSelector((states) => states.authStatus);

  useEffect(() => {
    setDocumentTitle('Sign Up');
  }, []);

  useEffect(() => {
    dispatch(unsetSignUpErrorMessageActionCreator());
  }, [dispatch]);

  return (
    <>
      <AuthLayoutHeader type="sign-up" />
      <AuthLayoutMain>
        {signUpErrorMessage && (
          <Alert
            type="danger"
            message={capitalizeFirstLetter(signUpErrorMessage)}
          />
        )}
        <SignUpForm />
      </AuthLayoutMain>
      <AuthLayoutFooter>
        <p>
          Already have an account?{' '}
          <Link
            className="text-primary-500 hover:underline"
            to="/sign-in"
            title="Sign In"
          >
            Sign in here
          </Link>
          .
        </p>
      </AuthLayoutFooter>
    </>
  );
}

export default SignUpPage;
