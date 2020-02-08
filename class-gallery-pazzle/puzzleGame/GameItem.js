export default class GameItem {
  constructor(i, widht, height, imgUrl) {
    this.div = document.createElement("div");
    this.div.style.width = widht + "px";
    this.div.style.height = height + "px";
    this.div.style.position = "absolute";
    this.div.style.border = "1px solid red";
    // place.appendChild(div);
    //this.div.textContent = i + 1;
    //div.style.size = "padding: 15px";
    this.div.style.background = `url(${imgUrl})`;
    this.selected = false;
    this.index = i;
    this.div.dataset.index = i;
  }
  get displayElement() {
    return this.div;
  }
  setInitialPosition(x, y) {
    this.div.style.backgroundPositionX = -x + "px";
    this.div.style.backgroundPositionY = -y + "px";
    this.setPosition(x, y);
  }
  setPosition(x, y) {
    this.div.style.left = x + "px";
    this.div.style.top = y + "px";
  }
  setSelected(val) {
    this.selected = val;
    this.div.style.border = this.selected? "5px dotted green" :  "1px solid red";
  }
  toggleSelect()
  {
    this.selected = !this.selected;
    this.setSelected(this.selected);
    return this.selected;
  }
}
