let keysArr = [...document.querySelectorAll('span')];
 
function playSound(key){
    const test = el => el.id === key;

    if(keysArr.some(test)){
        let keyCon = document.getElementById(key).classList;
        keyCon.add('playing');
        new Audio(`assets/drums/${key}.wav`).play();
    }
};

function removeTrans(key){
    document.getElementById(key).classList.remove('playing');
}

window.addEventListener('keydown',e => {
    playSound(e.code);
});
window.addEventListener('keyup', e => removeTrans(e.code));