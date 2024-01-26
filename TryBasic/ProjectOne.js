console.log("somnath")
let temp=document.querySelectorAll('.buttan');
let bod=document.querySelector('body');
temp.forEach(function (buttans) {
    console.log(buttans)
    //creat a event listener its learn more when we learn event in js
    buttans.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        //console.log(e.target.id)
        if(e.target.id==='gray'){
            bod.style.backgroundColor="gray"
        }
        if(e.target.id==='white'){
            bod.style.backgroundColor="white"
        }
        if(e.target.id==='blue'){
            bod.style.backgroundColor="blue"
        }
        if(e.target.id==='yellow'){
            bod.style.backgroundColor="yellow"
        }
    })
});
