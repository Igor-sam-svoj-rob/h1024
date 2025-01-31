const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_USER":
      return {
        ...state,
        user: action.data,
        isLoading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
