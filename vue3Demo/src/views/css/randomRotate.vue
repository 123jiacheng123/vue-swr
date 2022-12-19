<template>
  <div class="gallery">
    <img src="https://picsum.photos/id/174/400/400" alt="a hot air balloon" />
    <img src="https://picsum.photos/id/175/400/400" alt="a clock" />
    <img
      src="https://picsum.photos/id/188/400/400"
      alt="a sky photo of an old city"
    />
    <img src="https://picsum.photos/id/211/400/400" alt="a small boat" />
    <img src="https://picsum.photos/id/22/400/400" alt="a lonely man :(" />
    <img src="https://picsum.photos/id/28/400/400" alt="a forest" />
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  --s: 250px; /* the size */

  display: grid;
  transform-style: preserve-3d;
  --_p: perspective(calc(2.5 * var(--s)));
  animation: r 9s infinite cubic-bezier(0.5, -0.5, 0.5, 1.5);
}
.gallery img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1;
  object-fit: cover;
  transform: var(--_t) translateZ(calc(var(--s) / 2));
}
.gallery img:nth-child(2) {
  --_t: rotateX(-90deg);
}
.gallery img:nth-child(3) {
  --_t: rotateY(90deg);
}
.gallery img:nth-child(4) {
  --_t: rotateX(180deg) rotate(90deg);
}
.gallery img:nth-child(5) {
  --_t: rotateX(90deg);
}
.gallery img:nth-child(6) {
  --_t: rotateY(-90deg);
}

@keyframes r {
  0%,
  3% {
    transform: var(--_p) rotate3d(0, 0, 0, 0deg);
  }
  14%,
  19% {
    transform: var(--_p) rotate3d(-1, 1, 0, 180deg);
  }
  31%,
  36% {
    transform: var(--_p) rotate3d(0, -1, 0, 90deg);
  }
  47%,
  52% {
    transform: var(--_p) rotate3d(1, 0, 0, 90deg);
  }
  64%,
  69% {
    transform: var(--_p) rotate3d(1, 0, 0, -90deg);
  }
  81%,
  86% {
    transform: var(--_p) rotate3d(0, 1, 0, 90deg);
  }
  97%,
  100% {
    transform: var(--_p) rotate3d(0, 0, 0, 0deg);
  }
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #556270;
  animation: b 9s infinite;
}

@keyframes b {
  0%,
  3% {
    background: #774f38;
  }
  14%,
  19% {
    background: #c5e0dc;
  }
  31%,
  36% {
    background: #036564;
  }
  45%,
  55% {
    background: #b38184;
  }
  64%,
  69% {
    background: #424254;
  }
  81%,
  86% {
    background: #4dbce9;
  }
  97%,
  to {
    background: #774f38;
  }
}
</style>>