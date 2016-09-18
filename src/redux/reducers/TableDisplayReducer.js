
const initialState = {
  showTitle: true,
  showHeader: true,
  columns: 0,
  rows: 0
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case "TOGGLE_TITLE":{
      return Object.assign({}, 
        state, 
        {showTitle: !state.showTitle}) 
    }
    case "TOGGLE_TITLE":{
      return Object.assign({}, 
        state, 
        {showTitle: !state.showHeader}) 
    }
    case "SET_SIZE":{
      return Object.assign({}, 
        state, 
        {columns: action.payload.columns, rows: action.payload.rows}) 
    }
    default:
      return state
  }
}