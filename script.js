function appear(params) {
    let shareIcons = document.getElementById("shareicons");
    shareIcons.style.opacity="1";
    shareIcons.style.display="block";
    let shareIcon = document.getElementById("shareicon");
    shareIcon.onclick = normal;
}
function normal(){
    let shareIcons = document.getElementById("shareicons");
    shareIcons.style.opacity="0";
    shareIcons.style.display="hidden";
    shareIcons.style.transition="1s";
    let shareIcon = document.getElementById("shareicon");
    shareIcon.onclick = appear;
}
