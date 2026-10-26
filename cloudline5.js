var cloudTop = 70;
var cloudBottom = 127;
var cloudChance = 0.25;
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (pixel.del || pixel.element !== "steam") return;
  if (pixel.y >= cloudTop && cloudBottom >= pixel.y && cloudChance > Math.random()) {
    changePixel(pixel, "cloud");
    pixel.temp = 140;
  }
};
