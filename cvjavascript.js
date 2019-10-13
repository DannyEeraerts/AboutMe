window.onload=function() {

const mapTriggerIcon = document.querySelector('.fa-map-marker-alt');

function showMap(){
    let mapNode = document.querySelector('.map');
    mapNode.classList.toggle("show");
}

mapTriggerIcon.addEventListener('click', showMap);

}