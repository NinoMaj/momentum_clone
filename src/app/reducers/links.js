/* eslint linebreak-style: ["error", "windows"] */
const initialState = [
  {
    clicked: false,
    plusClicked: false
  }
];

export default function links(state = initialState, action) {
  switch (action.type) {
    case "CLICKED":
      return [
        {
          clicked: action.state.clicked,
          plusClicked: action.state.plusClicked
        },
        ...state
      ];
    default:
      return state;
  }
}
