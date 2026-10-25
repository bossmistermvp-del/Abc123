var cloudLineY = 70;      // 0 вверху, 127 внизу, чем больше, тем ниже облака
var cloudChance = 0.1;    // 0.1 = облако у каждого десятого пикселя пара, 1 = как раньше
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (!pixel.del && pixel.y <= cloudLineY && Math.random() < cloudChance) {
    changePixel(pixel, "cloud");
    pixel.temp = 90;
  }
};
