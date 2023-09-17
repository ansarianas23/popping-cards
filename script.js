let container = document.querySelector("#container")

 // Throttling Function
 // this will make sure event listener fire after delay and not on every milisecond
 const throttleFunction=(func, delay)=>{
     
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();
 
    // Logging the difference between previously
    // called and current called timings
    console.log(now-prev, delay);
     
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){
      prev = now;
 
      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args); 
    }
  }
}


container.addEventListener("mousemove", throttleFunction((e)=>{
  // creating a div
  let div = document.createElement("div")
  div.classList.add("cards")
  div.style.left = e.clientX +"px"
  div.style.top = e.clientY +"px"
  document.body.appendChild(div);

  // creating a img element and append in a previous created div
  let img = document.createElement("img");
  img.setAttribute("src", "/camera.jpg")
  div.appendChild(img)

  // we are removing div after delay
  setTimeout(()=>{
    div.remove()
  },1000)

  // animating the image popping up image
  gsap.to(img,{
    y:"0",
    ease: Power3,
    duration: .6
  })

  // animating the image popping down/hiding image
  gsap.to(img,{
    y:"100%",
    ease: Power2,
    delay: .6
  })
}, 500));
