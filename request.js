var istatus= document.querySelector("h5")
var btn = document.querySelector("#add")

var flag=0

btn.addEventListener("click",function(){
    if(flag==0){
    istatus.innerHTML="FRIENDS"
    istatus.style.color="green"
    btn.innerHTML="Remove Friend"
    btn.style.backgroundColor="grey"
    flag=1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor="green"
        flag=0
    }
        
    
})
