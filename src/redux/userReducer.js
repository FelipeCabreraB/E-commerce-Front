function userReducer(user = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      return user;

    case "ADD_TOKEN":
      return {
        ...user,
        token: action.payload.token,
        id: action.payload.id,
        role: action.payload.role,
      };

    case "LOGOUT":
      return {};

    default:
      return user;
  }
}

export default userReducer;
