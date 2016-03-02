var cv = require('opencv');

cv.readImage("fotokel-satu.jpg", function(err, im){
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    if (err) throw err;

    for (var i = 0; i < faces.length; i++){
      var face = faces[i];
      console.log(face);
      im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2);
    }

    im.save('face-detection.png');
  });
});
