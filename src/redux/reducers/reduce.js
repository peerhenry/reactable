export default function reduce(state, deltaState){
  return Object.assign(
        {},
        state,
        deltaState
      )
}