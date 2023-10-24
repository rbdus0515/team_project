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
const plan = document.querySelector('.left-side');

hidden.addEventListener('click', () => {

    plan.style.display = "none";

});

