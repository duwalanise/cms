const initialState = {
  isAuthenticated: false,
  authenticatedUser: null,
  accessToken: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};
