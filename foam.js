var foamDeathChance = 0.001;
elements.foam.tick = function (pixel) {
  if (pixel.foam && isEmpty(pixel.x, pixel.y - 1)) {
    createPixel("foam", pixel.x, pixel.y - 1);
    pixel.foam--;
    pixelMap[pixel.x][pixel.y - 1].foam = pixel.foam;
    pixelMap[pixel.x][pixel.y - 1].temp = pixel.temp;
  }
  if (foamDeathChance > Math.random()) {
    if (pixel.clone) {
      changePixel(pixel, pixel.clone);
      return;
    }
    deletePixel(pixel.x, pixel.y);
  }
};
