import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { asyncRegisterUser } from '../../states/users/action';
import { EMAIL_REGEX } from '../../utils/constants';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import InputFieldGroup from '../ui/InputField/InputFieldGroup';

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAfterSignUp = useSelector(
    (states) => states.authStatus.isAfterSignUp
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  useEffect(() => {
    if (isAfterSignUp) {
      navigate('/sign-in');
    }
  }, [navigate, isAfterSignUp]);

  return (
    <form
      method="post"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <InputFieldGroup labelText="Name" title="Name">
        <InputField
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name field must be filled.' })}
          errorMessage={errors.name?.message}
        />
      </InputFieldGroup>
      <InputFieldGroup labelText="Email" title="Email">
        <InputField
          type="email"
          placeholder="your@email.com"
          {...register('email', {
            required: 'Email field must be filled.',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Must be a valid email.',
            },
          })}
          errorMessage={errors.email?.message}
        />
      </InputFieldGroup>
      <InputFieldGroup labelText="Password" title="Password">
        <InputField
          type="password"
          placeholder="min. 6 characters"
          {...register('password', {
            required: 'Password field must be filled.',
            minLength: {
              value: 6,
              message: 'Password must contain at least 6 characters.',
            },
          })}
          errorMessage={errors.password?.message}
        />
      </InputFieldGroup>
      <InputFieldGroup labelText="Confirm Password" title="Confirm Password">
        <InputField
          type="password"
          placeholder="re-type your password"
          {...register('confirmPassword', {
            required: 'Confirm Password field must be filled.',
            minLength: {
              value: 6,
              message: 'Confirm Password must contain at least 6 characters.',
            },
            validate: {
              matchPassword: (confirmPassword) =>
                confirmPassword === watch('password') ||
                'Confirm Password field must match Password field.',
            },
          })}
          errorMessage={errors.confirmPassword?.message}
        />
      </InputFieldGroup>
      <Button type="submit" className="mt-4" title="Sign Up">
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;
