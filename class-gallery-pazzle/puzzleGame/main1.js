import GameItem from "./GameItem.js";
export default
class PuzzleGame {
  constructor(imgUrl, col, row,gameBox,letUl) {
    
    gameBox.insertAdjacentHTML(
      "beforeEnd",
      `<img src='${imgUrl}' width = "${gameBox.clientWidth}" height = "${gameBox.clientHeight}" style = "position: relative; opacity: 0">`
    );
    this.setBlocks(gameBox,letUl);
    this.col = col;
    this.elements = [];
    this.divX = gameBox.clientWidth / col;
    this.divY = gameBox.clientHeight / row;
    gameBox.style.position = "relative";
    for (let i = 0; i < col * row; i++) {
      const cGameitem = new GameItem(i, this.divX, this.divY, imgUrl);
      const div = cGameitem.displayElement;
      gameBox.appendChild(div);
      const pos = PuzzleGame.getPositionById(i, col, this.divX, this.divY);
      let setX = pos.x;
      let setY = pos.y;
      cGameitem.setInitialPosition(setX, setY);
      this.elements.push(cGameitem);
    }
    gameBox.addEventListener("click", this.onClickItem.bind(this));

    this.elementRandom = [].concat(this.elements);
    this.elementRandom.sort((a, b) => -0.5 + Math.random());

    //console.log(elementRandom);
    this.elementRandom.forEach((el, i) => {
      const pos = PuzzleGame.getPositionById(i, col, this.divX, this.divY);
      el.setPosition(pos.x, pos.y);
    });
  }

setBlocks(game,ul){
  this.game=game;
  this.ul=ul;
}

getGame(){
  return this.game;
}

getUl(){
  return this.ul;
}

  onClickItem(e) {
    
    const div = e.target;
    const item = this.elementRandom.find(el => el.displayElement === div);
    const selectedItem = this.elementRandom.find(el => el.selected);

 
    if (item.selected) {
   
      item.setSelected(false);
    }
    else {
      if (selectedItem) {

       this.changePosition(item, selectedItem);
      }
      else {
        item.setSelected(true);
      }
    }
    // console.log(e, item);
    //div.style.width = "150px";

  }
  changePosition (it1, it2) {
    it1.setSelected(false);
    it2.setSelected(false);
    const index1 = this.elementRandom.indexOf(it1);
    const index2 = this.elementRandom.indexOf(it2);
    const position1 = PuzzleGame.getPositionById(index1, this.col, this.divX, this.divY);
    const position2 = PuzzleGame.getPositionById(index2, this.col, this.divX, this.divY);
    it1.setPosition(position2.x, position2.y);
    it2.setPosition(position1.x, position1.y);
    const tmp = this.elementRandom[index1];
    this.elementRandom[index1] = this.elementRandom[index2];
    this.elementRandom[index2] = tmp;

    const aaa = this.elementRandom.find((el,i) => el.index !== i);
    if (!aaa){
      setTimeout(()=>{alert('WIN!');
      const game=this.getGame();
      game.style.display='none';
      this.getUl().style.display='block'}
      , 1000);
    }
  }

  static getPositionById = function(index, col, divX, divY) {
    const x = (index % col) * divX;
    const y = Math.floor(index / col) * divY;
    return { x, y };
  };
  static selectedItem = null;
}


