import Immutable from "immutable"
import Matrix from "models/Matrix"
import reduce from "./reduce"

const initialState = {
  uid: '',
  title: 'from redux',
  //header: Immutable.Set({}),
  //matrix: new Matrix(Immutable.Set({}))
  header: [],
  matrix: []
}

function editHeader(state, column, text){
  return reduce(state, {
    header: state.header.set(column, text)
  });
}

function editMatrix(state, row, column, text){
  return reduce(state, {
    matrix: state.matrix.set(row, col, text)
  })
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case 'EDIT_CELL':{
      const p = action.payload;
      if(p.rowNumber < 0 ){
        return editHeader(state, p.columnNumber, p.text);
      }
      return editMatrix(state, p.rowNumber, p.columnNumber, p.text)
    }
    case 'EDIT_TITLE':{
      return reduce(state, {title: action.payload.text})
    }
    default:
      return state
  }
}