import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import BaseSectionCard from '../../BaseLayout/BaseSectionCard';
import Button from '../../ui/Button';
import InputField from '../../ui/InputField';

function CreateThread() {
  const { authedUser } = useSelector((states) => states);

  return (
    <BaseSectionCard withHorizontalPadding>
      <Form
        method="get"
        action="/thread/new"
        className="flex w-full gap-3 sm:gap-4 md:gap-3"
      >
        <img
          src={authedUser.avatar}
          className="h-12 w-12 rounded object-cover object-center"
          alt={`${authedUser.name} Avatar`}
          loading="lazy"
        />
        <InputField
          type="text"
          containerClassName="flex-1"
          name="title"
          placeholder={`Hi ${authedUser.name}, what's on your mind?`}
        />
        <Button type="submit" title="Create New Thread">
          <FiExternalLink className="text-lg lg:text-base" />
          <span className="sr-only lg:not-sr-only">Create Thread</span>
        </Button>
      </Form>
    </BaseSectionCard>
  );
}

export default CreateThread;
