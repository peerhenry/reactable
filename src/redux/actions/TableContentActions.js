export function editCell(rowNumber, columnNumber, text){
  return {
    type: 'EDIT_CELL',
    payload: { rowNumber, columnNumber, text }
  }
}

export function editTitle(text){
  return {
    type: 'EDIT_TITLE',
    payload: text
  }
}