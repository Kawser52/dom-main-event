function changeColorYellow(){
    document.body.style.backgroundColor= 'yellow';
}

const blue=document.getElementById('blue-button');
blue.onclick= blueButton;
function blueButton(){
   document.body.style.backgroundColor= 'blue';
}

const aquea = document.getElementById('number-4');
        aquea.onclick = function () {
            document.body.style.backgroundColor = 'Aqua';
    }
// handle by using add eventlisenter
 const slateBlue = document.getElementById('number-5');
        slateBlue.addEventListener('click', slateBlueColor);
        function slateBlueColor() {
            document.body.style.backgroundColor = 'DarkSlateBlue';
        }
// handle by using add eventlisenter 2nd way
     
     
   let firBirck = document.getElementById('number-6');
        firBirck.addEventListener('click', function () {
            document.body.style.backgroundColor = 'red';
        });
// Last Style
  document.getElementById('number-7').addEventListener('click', function () {
            document.body.style.background = 'Gold';
        })