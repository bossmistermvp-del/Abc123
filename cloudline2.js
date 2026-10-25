var cloudLines = [
  { y: 40, chance: 0.5, temp: 80 },  // верхняя линия
  { y: 80, chance: 0.75, temp: 40 }      // нижняя линия
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
