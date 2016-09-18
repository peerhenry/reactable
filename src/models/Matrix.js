export default class Matrix{
  constructor(data){
    this.data = data; // has to be immutable list
  }

  get(row, col){
    return this.data.get(row).get(col);
  }

  set(row, col, value){
    const newData = data.set(row, data.get(row).set(col, value)); 
    return new Matrix(newData);
  }
}