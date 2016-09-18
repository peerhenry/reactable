import Immutable from "immutable"
import Matrix from "models/Matrix"
import reduce from "./reduce"

const initialState = {
  uid: '',
  title: 'from redux',
  //header: Immutable.Set({}),
  //matrix: new Matrix(Immutable.Set({}))
  header: ['reduxh1', 'reduxh2', 'reduxh3', 'reduxh4'],
  matrix: [['reduxc1', 'reduxc2', 'reduxc3', 'reduxh4']],
  rows: 1,
  columns: 4
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

function editCell(state, payload){
  const p = payload;
  if(p.rowNumber < 0 ){
    return editHeader(state, p.columnNumber, p.text);
  }
  return editMatrix(state, p.rowNumber, p.columnNumber, p.text)
}

function addRow(state){
  if(state.rows<matrix.length){
    return reduce(state, {rows: state.rows+1})
  }
  const newRow = Array.apply(null, Array(state.header.length)).map(String.prototype.valueOf, "New Cell")
  return reduce(state, {
    matrix: [...matrix, newRow],
    rows: state.rows+1
  })
}

function addColumn(state){
  if(state.columns < state.header.length){
    return reduce(state, {columns: state.columns+1});
  }
  newMatrix = [];
  state.matrix.forEach((row) => {
    newMatrix.push([...row, "New Cell"])
  });
  return reduce(state, {
    columns: state.columns+1,
    header: [...state.header, "New Header"],
    matrix: newMatrix
  });
}

function removeRow(state){
  if(state.rows>0) return reduce(state, {rows: state.rows-1});
  return state;
}

function removeColumn(state){
  if(state.columns>0) return reduce(state, {columns: state.columns-1});
  return state;
}

export default function reducer(state=initialState, action){
  switch(action.type){
    case 'EDIT_CELL':{
      return editCell(state, action.payload)
    }
    case 'EDIT_TITLE':{
      return reduce(state, {title: action.payload.text})
    }
    case 'ADD_ROW':{
      return addRow(state)
    }
    case 'ADD_COLUMN':{
      return addColumn(state)
    }
    case 'REMOVE_ROW':{
      return removeRow(state)
    }
    case 'REMOVE_COLUMN':{
      return removeColumn(state)
    }
    default:
      return state
  }
}