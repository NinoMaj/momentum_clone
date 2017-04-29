/* eslint linebreak-style: 0 */
const initialState = [
  {
    clicked: false,
    plusClicked: false,
    list: []
  }
];

export default function links(state = initialState, action) {
  switch (action.type) {
    case "CLICKED":
      return [
        {
          clicked: action.state.clicked,
          plusClicked: action.state.plusClicked,
          list: action.state.list
        },
        ...state
      ];
    case "FORM":
      return [
        {
          clicked: action.state.clicked,
          plusClicked: action.state.plusClicked,
          list: action.state.list
        }
      ];
    default:
      return state;
  }
}
