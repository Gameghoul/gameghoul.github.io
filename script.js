let pupil_ref = document.querySelectorAll(".gg-pupil");

let events = ["mousemove", "touchmove"];

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

events.forEach((eventType) => {
  document.body.addEventListener(eventType, (event) => {
    pupil_ref.forEach((eye) => {
      //   let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      //   let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      //   //   console.log(eyeX, eyeY);

      //   var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
      //   var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

      //   let radian = Math.atan2(x - eyeX, y - eyeY);

      //   let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
      //   //   console.log(rotationDegrees);

      //   eye.style.transform = "rotate(" + rotationDegrees + "deg)";

      var x = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
      var y = !isTouchDevice() ? event.clientY : event.touches[0].clientY;

      console.log(y);

      //   var newX = 0 + (x - (window.screen.width * window.devicePixelRatio) / 2);

      var newX = 0 + (x - window.innerWidth / 2) / 8;

      var newY = 0 + (y - window.innerHeight / 2) / 8;

      eye.style.transform = "translate3D(" + newX + "px, " + newY + "px, 0)";
    });
  });
});
