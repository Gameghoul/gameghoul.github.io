let info_heading = document.querySelector(".info-heading");
let info_body = document.querySelector(".info-body");

let logo_yt = document.querySelector("#youtube");
let logo_twit = document.querySelector("#twitter");
let logo_itch = document.querySelector("#itchio");
let logo_art = document.querySelector("#artstation");

let body_ref = document.querySelector(".gg-body");
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

      var newX = 0 + (x - window.innerWidth / 2) / 8;

      var newY = 0 + (y - window.innerHeight / 2) / 8;

      eye.style.transform = "translate3D(" + newX + "px, " + newY + "px, 0)";
    });
  });
});

function logoHover(x) {
  console.log(x);
  if (x === "yt") {
    info_heading.innerHTML = "YOUTUBE";
    info_body.innerHTML =
      "My Youtube channel features all of my videos, but here I've specifically linked to a playlist of my 2D and 3D animations";
  }

  if (x === "twit") {
    info_heading.innerHTML = "TWITTER";
    info_body.innerHTML =
      "I post all of my work to Twitter too, though it's sometimes interspersed with stolen TikToks and/or cat videos";
  }

  if (x === "itch") {
    info_heading.innerHTML = "ITCH.IO";
    info_body.innerHTML =
      "The handful of games that I have finished making in Unity can be found on my itch.io page";
  }

  if (x === "art") {
    info_heading.innerHTML = "ARTSTATION";
    info_body.innerHTML =
      "Artstation has a nicely arranged showcase of all of my still 2D and 3D artwork";
  }
}

function logoLeave() {
  // info_heading.innerHTML = "HELLO THERE!";
  // info_body.innerHTML = "Hover over a link for more information :)";
}
