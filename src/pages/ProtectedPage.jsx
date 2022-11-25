import { node } from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function ProtectedPage({ children }) {
  const authedUser = useSelector((states) => states.authedUser);

  useEffect(() => {
    if (authedUser === null) {
      throw new Response('Unauthorized', {
        status: 401,
        statusText: 'Unauthorized',
      });
    }
  }, [authedUser]);

  return children;
}

ProtectedPage.propTypes = {
  children: node.isRequired,
};

export default ProtectedPage;
