var con = document.querySelector(".container");
var love = document.querySelector('.icon');
con.addEventListener('dblclick',function(){
    console.log('hi');
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.8';
    setTimeout(function(){
    love.style.transform = 'translate(-50%, -50%) scale(0)';
    },1500)
})