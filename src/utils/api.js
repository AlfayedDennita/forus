const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  const getAccessToken = () => localStorage.getItem('accessToken');

  const _fetchWithAuth = async (url, options = {}) =>
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

  const _successCheck = ({ status, message }) => {
    if (status !== 'success') {
      throw new Error(message);
    }
  };

  const registerUser = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { user },
    } = responseJson;

    return user;
  };

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { token },
    } = responseJson;

    return token;
  };

  const getOwnProfile = async () => {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { user },
    } = responseJson;

    return user;
  };

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { users },
    } = responseJson;

    return users;
  };

  const createThread = async ({ title, body, category }) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, category }),
    });
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { thread },
    } = responseJson;

    return thread;
  };

  const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { threads },
    } = responseJson;

    return threads;
  };

  const getThreadDetail = async (threadId) => {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`);
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { detailThread },
    } = responseJson;

    return detailThread;
  };

  const createComment = async (threadId, commentContent) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: commentContent }),
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { comment },
    } = responseJson;

    return comment;
  };

  const upvoteThread = async (threadId) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/up-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const downvoteThread = async (threadId) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/down-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const neutralizeThreadVote = async (threadId) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/neutral-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const upvoteComment = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const downvoteComment = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const neutralizeCommentVote = async ({ threadId, commentId }) => {
    const response = await _fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: 'POST',
      }
    );
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { vote },
    } = responseJson;

    return vote;
  };

  const getLeaderboard = async () => {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();

    _successCheck(responseJson);

    const {
      data: { leaderboards },
    } = responseJson;

    return leaderboards;
  };

  return {
    setAccessToken,
    getAccessToken,
    registerUser,
    login,
    getOwnProfile,
    getAllUsers,
    createThread,
    getAllThreads,
    getThreadDetail,
    createComment,
    upvoteThread,
    downvoteThread,
    neutralizeThreadVote,
    upvoteComment,
    downvoteComment,
    neutralizeCommentVote,
    getLeaderboard,
  };
})();

export default api;
