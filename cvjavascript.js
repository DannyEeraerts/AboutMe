window.onload=function() {

const mapTriggerIcon = document.querySelector('.fa-map-marker-alt');
const mapNode = document.querySelector('.map');

mapTriggerIcon.addEventListener('click', function(){
    mapNode.classList.toggle("show");
});

}