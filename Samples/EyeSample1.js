//https://studio.cospaces.io/#Project:H0DmHz-g9K8.G82KTNh1She:BLXfBnTrrnt.FWK6VyWLEmk
//User 1

function blink(pupil) {
  pupil.setColor(255, 255, 255);
  Space.schedule(function () {
    pupil.setColor(0, 0, 0);
  }, 0.06);
}

function blinkRepeat(eye) {
  var pupil = eye.part("pupil");
  blink(pupil);
  Space.schedule(function () {
    blinkRepeat(eye);
  }, 3);
}

var leftEye = Space.item("fdDAOhkXP5");
var rightEye = Space.item("naihDdoqEK");

blinkRepeat(leftEye);
blinkRepeat(rightEye);
