const animate = document.querySelector(".animate");
const container = document.querySelector(".main-div");
class Round {
  constructor(parent, x, y) {
    if (!x) {
      x = Math.random() * (parent.clientWidth - 20) + 10;
      // console.dir(parent.clientWidth);
    }
    if (!y) {
      y = Math.random() * (parent.clientHeight - 20) + 10;
    }
    this.body = document.createElement("div");
    //  this.body.style.filter = ;
    this.body.classList.add("second-div");
    parent.appendChild(this.body);
    gsap.fromTo(this.body, { opacity: 0 }, { opacity: 1, duration: 4, x, y });
  }
}

function createRound(quantity) {
  if (quantity > 0) {
    new Round(container);
    setTimeout(createRound, 100, --quantity);
  }
}
createRound(10);

container.addEventListener("mousemove", onClick);

function onClick(event) {
  if(event.target === event.currentTarget){
    return;
  }
  const x = Math.random() * (container.clientWidth - 20) + 10;
  const y = Math.random() * (container.clientHeight - 20) + 10;
  gsap.to (event.target, {  duration: 1, x, y });
}
// animate.addEventListener('')
let xx = 0;
let yy = 0;
let _x = 0;
setInterval(() => {
  animate.style.left = _x + 'px';
  _x += 10;
  animate.style.backgroundPositionX = xx +'px';
  animate.style.backgroundPositionY = yy + 'px';
  xx-=animate.clientWidth;
  if (xx<-4*animate.clientWidth){
    xx=0;
    if (yy===0){
      yy = -330;
    }
    else {yy =0}
  }
}, 100);
