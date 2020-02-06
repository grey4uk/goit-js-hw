class PuzzleGame {
  constructor(imgUrl, classHtml, col, row) {
    const place = document.querySelector(classHtml);
    place.insertAdjacentHTML(
      "beforeEnd",
      `<img src='${imgUrl}' width = "${place.clientWidth}" height = "${place.clientHeight}" style = "position: relative; opacity: 0">`
    );
    const elemens = [];
    const divX = place.clientWidth / col;
    const divY = place.clientHeight / row;
    place.style.position = "relative";
    for (let i = 0; i < col * row; i++) {
      const div = document.createElement("div");
      div.style.width = divX + "px";
      div.style.height = divY + "px";
      div.style.position = "absolute";
      div.style.border = "2px solid green";
      place.appendChild(div);
      
      const pos = PuzzleGame.getPositionById(i, col, divX, divY);
      let setX = pos.x;
      let setY = pos.y;
      div.textContent = i +1;
      div.style.left = setX + "px";
      div.style.top = setY + "px";
      //div.style.size = "padding: 15px";
      div.style.background = `url(${imgUrl})`;
      div.style.backgroundPositionX = -setX + "px";
      div.style.backgroundPositionY = -setY + "px";
      elemens.push(div);
    }
    const elementRandom = [].concat(elemens);
    elementRandom.sort((a, b) => -0.5 + Math.random());
    
    console.log(elementRandom);
    elementRandom.forEach((el, i) => {
     // debugger
      const pos = PuzzleGame.getPositionById(i, col, divX, divY);
     el.style.left = pos.x + 'px';
     el.style.top = pos.y+ 'px';
    } ); 
  }

  static getPositionById = function(index, col, divX, divY) {
    const x = (index % col) * divX;
    const y = Math.floor(index / col) * divY;
    return { x, y };
  };

}




new PuzzleGame(
  "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
  ".game",
  3,
  2
);
