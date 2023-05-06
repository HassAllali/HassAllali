let button = document.querySelector('.menubutton')
let list = document.querySelector('.ulclass')
let liens = document.querySelectorAll('.lien')

button.addEventListener('click', () => {
    list.classList.toggle("visible")
    console.log(list.classList.contains("visible"));
})
for (const lien of liens) {
    lien.addEventListener('click', () => {
        list.classList.toggle("visible")
    })
}
console.log(button.classList)







/*
document.getElementById("buttonCV").addEventListener("click", function() {

    var file = "Mon CV ALLALI BOUIRIG Hassan.pdf";

    var link = document.createElement("a");
    link.href = file;
    link.download = file;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  */





window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScrollToTop").style.display = "block";
    } else {
        document.getElementById("btnScrollToTop").style.display = "none";
    }
}

document.getElementById("btnScrollToTop").addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


