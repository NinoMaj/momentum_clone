/* eslint linebreak-style: 0 */
export function getRandomQoute(state) {
  return {type: "GETRANDOMQUOTE", state};
}

export function changeHover(state) {
  return {type: "CHANGEHOVER", state};
}

export function chagneHeart(state) {
  return {type: "CHANGEHEART", state};
}
