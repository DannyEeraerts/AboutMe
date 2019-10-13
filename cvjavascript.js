window.onload=function() {

const mapTriggerIcon = document.querySelector('.fa-map-marker-alt');
const mapNode = document.querySelector('.map');


function showMap(){
    mapNode.classList.toggle("show");
}

mapTriggerIcon.addEventListener('click', showMap);

}