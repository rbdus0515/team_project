/* 카카오맵 설정 */ 
window.onload = function(){
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(36.450701, 127.570667),
    level: 10
};

var map = new kakao.maps.Map(container, options);

};

/* 선택한 여행지 div 숨기기 */
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

/* 출발지 div 펼치기 */
const expend = document.querySelectorAll(".expend");
const destinations = document.querySelectorAll(".destinations");
var newContent = "-";
for (let i = 0; i < expend.length; i++) {
    expend[i].addEventListener('click', () => {
    
        for(let i = 0; i < destinations.length; i++) {

            if(destinations[i].style.display == 'none') {
                destinations[i].style.display = 'block';
                expend.innerHTML = newContent;
            }else {
                destinations[i].style.display = 'none';
                
            }
        }

    })
}


