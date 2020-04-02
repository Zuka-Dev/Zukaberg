const getTime = document.querySelector('#form');
getTime.addEventListener('submit', captureTime);
function captureTime(e){
 const today = new Date();
 
 alert (today);
 
    e.preventDefault();
}