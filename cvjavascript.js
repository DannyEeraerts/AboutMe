window.onload=function() {

const mapTriggerIcon = document.querySelector('.fa-map-marker-alt');
const mapNode = document.querySelector('.map');

function toggleNode(node, classname){
    node.classList.toggle(classname);
}

mapTriggerIcon.addEventListener('click', function(){
    toggleNode(mapNode, "show");
});

}