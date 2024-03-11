function main(){
  window.addEventListener('deviceorientation',onorientationchange);

  navigator.mediaDevices.getUserMedia({
    video:  {
      facingMode:'environment'
    },
  })
    .then(signal => {
      const video = document.getElementById('video');
      video.srcObject=signal;
      video.play();
    })
    .catch(err => {
      alert(err);
    })
}

function onorientationchange(event) {
  let angle = event.beta - 90;
  if(angle < 0) {
    angle= 0;
  }

  // distance from which we measure height
  const distanceToObject =document.getElementById('slider').value;
  document.getElementById('label').innerHTML =
    `Distance to object: ${distanceToObject} meters`;
  const angleInRadian = angle * Math.PI/180;
  const height =  Math.tan(angleInRadian)* distanceToObject;
  document.getElementById('heightInfo').innerHTML =
    `${height.toFixed(1)}m (${angle.toFixed(1)}&deg;)`
  console.log(angle)
}
