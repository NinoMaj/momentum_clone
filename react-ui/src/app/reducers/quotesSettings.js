/* eslint linebreak-style: 0 */
const initialState = [
  {
    quotes: [],
    favorites: []
  }
];

export default function quotesSettings(state = initialState, action) {
  switch (action.type) {
    case "QUOTESSETTINGS":
      return [
        {
          quotes: action.state.quotes,
          favorites: action.state.favorites
        },
        ...state
      ];
    default:
      return state;
  }
}
