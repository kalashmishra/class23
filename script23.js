var post=document.querySelector("#unpost ");
var love=document.querySelector("#unpost>i ");
var react=document.querySelector("#heart ");

var flag=0
post.addEventListener("dblclick",function(){
    if(flag===0){ 
        love.style.transform="translate(-50%,-50%) scale(2)"
    love.style.opacity="1"
    love.style.color="#fff"
    react.innerHTML=`<i class="ri-heart-3-fill"></i>`
 react.style.color="red"

    
    flag=1
   }else{ 
    love.style.transform="translate(-50%,-50%) scale(1)"
   love.style.opacity="0"
   react.innerHTML=`<i class="ri-heart-3-line"></i>`
  
   react.style.color="#fff"


   flag=0}
    
})

react.addEventListener("click",function(){
   if(flag===0){
       react.innerHTML=`<i class="ri-heart-3-fill"></i>`
      react.style.color="red"
       flag=1
}else{
       react.innerHTML=`<i class="ri-heart-3-line"></i>`
       react.style.color="#fff"

        flag=0
        

    }



})
