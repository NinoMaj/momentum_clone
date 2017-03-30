/* eslint linebreak-style: ["error", "windows"] */
const initialState = [
  {
    hover: false
  }
];

export default function form(state = initialState, action) {
  switch (action.type) {
    case "FORM":
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
