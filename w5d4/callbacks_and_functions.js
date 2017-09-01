
window.setTimeout(function(){
  alert('Hammertime');
}, 5000);

function hammerTime(time) {
    window.setTimeout(function(){
      alert(`${time} is hammertime!`);
    }, time);
}
