/* eslint linebreak-style: 0 */
let initialState = [];
if (localStorage.token) {
  initialState = [
    {
      token: true
    }
  ];
} else {
  initialState = [
    {
      token: false
    }
  ];
}

export default function token(state = initialState, action) {
  switch (action.type) {
    case "TOKEN":
      return [
        {
          token: action.state.token
        },
        ...state
      ];
    default:
      return state;
  }
}
