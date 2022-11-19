const examplediv = document.getElementById('example');

document.addEventListener('mousemove', (event)=>{
    const {screenX} = event;
    // console.log(screenX);
    examplediv.style.width = `${screenX}px`;
})