
const initialState = {
  showTitle: true,
  showHeader: true
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case "TOGGLE_TITLE":{
      return Object.assign({}, 
        state, 
        {showTitle: !state.showTitle}) 
    }
    case "TOGGLE_HEADER":{
      return Object.assign({}, 
        state, 
        {showHeader: !state.showHeader}) 
    }
    default:
      return state
  }
}