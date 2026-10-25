var cloudTop = 40;       // верх полосы (0 вверху экрана)
var cloudBottom = 70;    // низ полосы (127 внизу)
var cloudChance = 0.05;  // шанс за тик, внутри полосы
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (pixel.del || pixel.element !== "steam") return;
  if (pixel.y >= cloudTop && pixel.y <= cloudBottom && Math.random() < cloudChance) {
    changePixel(pixel, "cloud");
    pixel.temp = 30;
  }
};
