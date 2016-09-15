export default class CellWithLinkModel extends CellModel{
  constructor(rowNumber, columnNumber, text, link, linkIsActive){
    super(rowNumber, columnNumber, text);
    this.link = link;
    this.linkIsActive = linkIsActive;
  }
}