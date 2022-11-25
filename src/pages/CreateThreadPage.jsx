import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BaseSectionCard from '../components/BaseLayout/BaseSectionCard';
import CreateThreadForm from '../components/CreateThreadPage/CreateThreadForm';
import Alert from '../components/ui/Alert';
import { unsetAddThreadStatusActionCreator } from '../states/addThreadStatus/action';
import { setDocumentTitle } from '../utils';

function CreateThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addThreadStatus = useSelector((states) => states.addThreadStatus);

  useEffect(() => {
    setDocumentTitle('Create New Thread');
  }, []);

  useEffect(() => {
    if (addThreadStatus.isSuccess) {
      dispatch(unsetAddThreadStatusActionCreator());
      navigate(`/thread/${addThreadStatus.threadId}`);
    }
  }, [dispatch, navigate, addThreadStatus]);

  return (
    <BaseSectionCard withHorizontalPadding>
      <h2 className="font-heading text-xl font-bold">Create New Thread</h2>
      {addThreadStatus.isSuccess === false && (
        <Alert type="danger" message={addThreadStatus.errorMessage} />
      )}
      <CreateThreadForm />
    </BaseSectionCard>
  );
}

export default CreateThreadPage;
