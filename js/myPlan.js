/* 카카오맵 설정 */ 
window.onload = function(){
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(36.450701, 127.570667),
    level: 10
};

var map = new kakao.maps.Map(container, options);

};

/* 오른쪽 div 숨기기 */
const hidden = document.querySelector('.storage');
const plan = document.querySelector('.right-side');
const arrow = document.getElementById('arrow');

hidden.addEventListener('click', () => {


    if(plan.style.display == 'none')  {
        plan.style.display = 'block';
        arrow.src = "/images/left-arrow.png";
      }else {
        plan.style.display = 'none';
        arrow.src = "/images/right-arrow.png";
      }
});

/* div 펼치기/접기 */
const expend = document.querySelectorAll(".expend");
const destinations = document.querySelectorAll(".destinations");
for (let i = 0; i < expend.length; i++) {
    expend[i].addEventListener('click', () => {
    
            if(destinations[i].style.display == 'none') {
                destinations[i].style.display = 'block';
                expend[i].innerText="-";
            }else {
                destinations[i].style.display = 'none';
                expend[i].innerText="+";
            }
        }

    )
}



const cansle = document.querySelectorAll(".cansle-button");
const divDes = document.querySelector('.destinations');
const rightList = document.getElementById('rightList');

for (let i = 0; i < cansle.length; i++) {
    cansle[i].addEventListener('click', () => {
        const selectedDestination = divDes.querySelector(".선택한여행지");
        const selectedRightList = rightList.querySelector(".선택한여행지");

 
        if (selectedDestination) {

            divDes.removeChild(selectedDestination);
            rightList.appendChild(selectedDestination);

        } else if(selectedRightList) {

            rightList.removeChild(selectedRightList);
            divDes.appendChild(selectedRightList);
            
        }

    
        
    });
}







