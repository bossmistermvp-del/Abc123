var cloudLineY = 60;
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (!pixel.del && pixel.y <= cloudLineY) {
    changePixel(pixel, "cloud");
    pixel.temp = 20;
  }
};
