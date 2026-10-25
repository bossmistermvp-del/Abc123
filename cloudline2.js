var cloudLines = [
  { y: 70, chance: 0.001, temp: 150 },  // верхняя линия
  { y: 100, chance: 0.1, temp: 120 }      // нижняя линия
];
var oldSteamTick = elements.steam.tick;
elements.steam.tick = function (pixel) {
  if (oldSteamTick) oldSteamTick(pixel);
  if (pixel.del || pixel.element !== "steam") return;
  for (var i = 0; i < cloudLines.length; i++) {
    var l = cloudLines[i];
    if (pixel.y <= l.y) {
      if (Math.random() < l.chance) {
        changePixel(pixel, "cloud");
        pixel.temp = l.temp;
      }
      return;
    }
  }
};
