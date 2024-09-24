(() => {
  enum AudiLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio = AudiLevel.medium;
  console.log(currentAudio);
})();
