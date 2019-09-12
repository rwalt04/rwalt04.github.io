function setup() {
  createCanvas(400, 400);
}


function draw() {
  let value = second();
  let m = map(value, 10, 100, 10, width);
  ellipse(m, 50, 10, 10);


  const ctxs = canvas.getContext('2d');
  ctxs.moveTo(260,100);
  ctxs.lineTo(0,100);
  ctxs.stroke();
  ctxs.fillText("*|", 130, 120);
  ctxs.fillText("*|*", 260, 120);

  let met = minute();
  let mt = map(met, 50,300, 0, width);
  fill(204, 102, 0);
  ellipse(met+50,150, 30, 30);

  const ctxm = canvas.getContext('2d');
  ctxm.moveTo(0,200);
  ctxm.lineTo(260,200);
  ctxm.stroke();
  ctxm.fillText("*|", 130, 220);
  ctxm.fillText("*|*", 260, 220);

  let hr = hour();
  let hr2 = map(hr, 10, 100, 0, width);
  ellipse(hr2,300, 100, 100);

  const ctxh = canvas.getContext('2d');
  ctxh.moveTo(0,350);
  ctxh.lineTo(400,350);
  ctxh.stroke();
  ctxh.fillText("*|", 200, 370);
  ctxh.fillText("*|*", 388, 370);
  ctxh.font=" 12px arial";

}
