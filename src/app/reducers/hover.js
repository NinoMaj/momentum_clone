/* eslint linebreak-style: ["error", "windows"] */
const initialState = [
  {
    hover: false
  }
];

export default function hover(state = initialState, action) {
  switch (action.type) {
    case "CHANGEHOVER":
      return [
        {
          hover: action.state.hover
        },
        ...state
      ];
    default:
      return state;
  }
}
