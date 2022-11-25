import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { asyncAddThread } from '../../states/threads/action';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import InputFieldGroup from '../ui/InputField/InputFieldGroup';

function CreateThreadForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register('body', {
      required: 'Thread must have a content.',
    });
  }, [register]);

  const onTitleInputChange = (event) => {
    const titleInputValue = event.target.value;
    setSearchParams({ title: titleInputValue });
  };

  const onBodyInputChange = (bodyInputValue) => {
    setValue('body', bodyInputValue);
  };

  const onFormSubmit = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <form
      method="post"
      className="flex flex-col gap-4 pb-4"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <InputFieldGroup labelText="Title" title="Thread Title">
        <InputField
          type="text"
          placeholder="What's the main idea of your thread?"
          defaultValue={searchParams.get('title')}
          {...register('title', {
            onChange: onTitleInputChange,
            required: 'Thread must have a title.',
          })}
          errorMessage={errors.title?.message}
        />
      </InputFieldGroup>
      <InputFieldGroup labelText="Category (Single)" title="Thread Category">
        <InputField
          type="text"
          placeholder="Single category"
          {...register('category', {
            required: 'Thread must have a category.',
          })}
          errorMessage={errors.category?.message}
        />
      </InputFieldGroup>
      <InputFieldGroup element="div" labelText="Body">
        <InputField
          type="wysiwyg"
          name="body"
          onChange={onBodyInputChange}
          placeholder="Type your thoughts or questions here ..."
          errorMessage={errors.body?.message}
        />
      </InputFieldGroup>
      <Button type="submit" className="mt-4" title="Create Thread">
        Create Thread
      </Button>
    </form>
  );
}

export default CreateThreadForm;
