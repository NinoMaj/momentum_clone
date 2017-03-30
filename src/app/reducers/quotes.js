/* eslint linebreak-style: ["error", "windows"] */
const initialState = [
  {
    date: "",
    quote: "",
    author: "",
    emptyHeart: false
  }
];

export default function quotes(state = initialState, action) {
  switch (action.type) {
    case "GETRANDOMQUOTE":
      return [
        {
          date: action.state.date,
          quote: action.state.quote,
          author: action.state.author,
          emptyHeart: action.state.emptyHeart
        },
        ...state
      ];
    default:
      return state;
  }
}
