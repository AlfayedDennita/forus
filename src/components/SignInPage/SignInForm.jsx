import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { asyncSetAuthedUser } from '../../states/authedUser/action';
import { EMAIL_REGEX } from '../../utils/constants';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import InputFieldGroup from '../ui/InputField/InputFieldGroup';

function SignInForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = ({ email, password }) => {
    dispatch(asyncSetAuthedUser({ email, password }));
  };

  return (
    <form
      method="post"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onFormSubmit)}
    >
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
          placeholder="secret-words"
          {...register('password', {
            required: 'Password field must be filled.',
          })}
          errorMessage={errors.password?.message}
        />
      </InputFieldGroup>
      <Button type="submit" className="mt-4" title="Sign In">
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
