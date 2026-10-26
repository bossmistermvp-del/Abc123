var cloudTop = 0;
var cloudBottom = 127;
var cloudChance = 1;
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (pixel.del || pixel.element !== "steam") return;
  if (pixel.y >= cloudTop && cloudBottom >= pixel.y && cloudChance > Math.random()) {
    changePixel(pixel, "cloud");
    pixel.temp = 20;
  }
};
