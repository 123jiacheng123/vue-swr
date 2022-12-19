<script setup lang="ts"></script>

<template>
  <div class="gallery">
    <img
      src="https://picsum.photos/id/1059/300/300"
      alt="many clothes and pictures"
    />
    <img
      src="https://picsum.photos/id/1060/300/300"
      alt="someone preparing artisanal coffee"
    />
    <img src="https://picsum.photos/id/225/300/300" alt="some tee" />
    <img
      src="https://picsum.photos/id/163/300/300"
      alt="an empty table in a restaurant"
    />
    <img
      src="https://picsum.photos/id/180/300/300"
      alt="a laptop with a notebook"
    />
    <img
      src="https://picsum.photos/id/20/300/300"
      alt="a laptop and many books around it"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";
$n: 6;

.gallery {
  display: grid;
  width: 160px;
  transform-style: preserve-3d;
  --_t: perspective(280px) rotateX(-90deg);
  animation: r 12s cubic-bezier(0.5, -0.2, 0.5, 1.2) infinite;
}
@keyframes r {
  0%,
  3% {
    transform: var(--_t) rotate(0deg);
  }
  @for $i from 1 to $n {
    #{($i/$n)*100 - 2}%,
    #{($i/$n)*100 + 3}% {
      transform: var(--_t) rotate(#{($i/$n) * -360}deg);
    }
  }
  98%,
  100% {
    transform: var(--_t) rotate(-360deg);
  }
}
.gallery > img {
  grid-area: 1/1;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
@for $i from 1 to ($n + 1) {
  .gallery > img:nth-child(#{$i}) {
    transform: rotate(#{360 * ($i - 1) / $n}deg)
      translateY(50% / math.tan(180deg / $n))
      rotateX(90deg);
  }
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #547980;
  overflow: hidden;
}
</style>
>
