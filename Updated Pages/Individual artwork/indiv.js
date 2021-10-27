const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container-xxx,body,.navbar-container,.logo,.toggle,.art-info");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})