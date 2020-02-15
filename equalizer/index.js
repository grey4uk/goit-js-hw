const inputs = document.querySelector('.inputs'); 
const LOCAL_STORAGE = 'local storage';
inputs.addEventListener('input', _.debounce(handleRange, 500));
inputs.addEventListener('input', handleMove);
let dataStorage = {};
function handleRange(e) {
 const cInput = e.target;
 dataStorage[cInput.dataset.action]=cInput.value;
 localStorage.setItem(LOCAL_STORAGE, JSON.stringify(dataStorage));
}
function checkInnitValues() {
    const getItem = localStorage.getItem(LOCAL_STORAGE);
    if(getItem){
        dataStorage = JSON.parse(getItem);
        console.log(dataStorage);
    } 
}
function setInnit(obj) {
   for (let key in obj){
       const selector = key;
       const cInput = document.querySelector(`input[data-action="${selector}"]`);
gsap.to(cInput, {value: Number(obj[key]), duration: 1, delay: 1});
   } 
}
checkInnitValues()
setInnit(dataStorage);
const VALUE_STRONG = 10;
const allInputs = Array.from(document.querySelectorAll('input'));
function saveValus() {
    
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(dataStorage));
}
let timerToSave;
function handleMove(e){
    clearTimeout(timerToSave);
    timerToSave = setTimeout(saveValus, 500);
    const cInput = e.target;
    const cIndex = allInputs.indexOf(cInput);
    const brothers = allInputs;
    brothers.forEach(
        (el, indx)=>{
            if (indx !== cIndex){
                const vStrong = VALUE_STRONG * (Math.abs(cIndex - indx)/2);
                if (Number(el.value) > Number(cInput.value) && Number(el.value)-Number(cInput.value) > vStrong){
                    el.value = Number(cInput.value)+vStrong;
                }
                if (Number(el.value) < Number(cInput.value) && Number(cInput.value)-Number(el.value) > vStrong){
                    el.value =  Number(cInput.value)-vStrong;
                }   
                dataStorage[el.dataset.action] =  el.value;    
            }
        }
    );
}