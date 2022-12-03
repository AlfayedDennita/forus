import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { asyncAddComment } from '../../../states/threadDetail/action';
import Button from '../../ui/Button';
import InputField from '../../ui/InputField';

function AddComment() {
  const dispatch = useDispatch();
  const authedUser = useSelector((states) => states.authedUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = ({ comment }) => {
    dispatch(asyncAddComment(comment));
    reset();
  };

  return (
    <form
      method="post"
      className="flex flex-col gap-3 px-5 sm:flex-row sm:items-start sm:gap-4 md:gap-3 lg:px-6"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="flex gap-3 sm:contents">
        <img
          src={authedUser.avatar}
          className="h-12 w-12 rounded object-cover object-center"
          alt={`${authedUser.name} Avatar`}
          loading="lazy"
        />
        <InputField
          type="text"
          containerClassName="flex-1"
          className="h-12"
          placeholder="Give your comment ..."
          title="New Comment"
          {...register('comment', {
            required: 'Comment field must be filled.',
          })}
          errorMessage={errors.comment?.message}
        />
      </div>
      <Button type="submit" className="h-12" title="Add Comment">
        Add Comment
      </Button>
    </form>
  );
}

export default AddComment;
