/* eslint linebreak-style: 0 */
const initialState = [
  {
    Links: true,
    Search: true,
    Weather: true,
    Focus: true,
    Quotes: true,
    Todo: true
  }
];

export default function form(state = initialState, action) {
  switch (action.type) {
    case "WIDGETS":
      return [
        {
          Links: action.state.Links,
          Search: action.state.Search,
          Weather: action.state.Weather,
          Focus: action.state.Focus,
          Quotes: action.state.Quotes,
          Todo: action.state.Todo
        },
        ...state
      ];
    default:
      return state;
  }
}
