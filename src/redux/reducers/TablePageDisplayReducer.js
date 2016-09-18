import reduce from "./reduce"

const initialState = {
  showDetails: true,
  showComments: true
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case 'TOGGLE_DETAILS':{
      return reduce(state, { showDetails: !state.showDetails })
    }
    case 'TOGGLE_COMMENTS':{
      return reduce(state, { showComments: !state.showComments })
    }
    default:
      return state
  }
}