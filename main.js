import "./assets/scss/style.scss";
import { setupCounter } from "./counter.js";
import anime from "animejs/lib/anime.es.js";

document.querySelector("#app").innerHTML = `
<div class="parallax">
  <h1>Hello Banner1</h1>
  <div class="box box-one">
    <span>test</span><span>mixin</span><span>variables</span>
  </div>
  <div class="box box-two">
    <span>test</span><span>mixin</span><span>variables</span>
  </div>
  <div class="box box-three">
    <span>test</span><span>mixin</span><span>variables</span>
  </div>
  <div class="box box-four">
    <span>test</span><span>mixin</span><span>variables</span>
  </div>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <h1>Hello Banner2</h1>
  <div class="box2-wrapper">
    <div class="box2 box2-one">
      <h3>
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
      </h3>
    </div>
    <div class="box2 box2-two">
      <h3>
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
      </h3>
    </div>
    <div class="box2 box2-three">
      <h3>
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
      </h3>
    </div>
    <div class="box2 box2-four">
      <h3>
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
        HUBLOT OMEGA HAMILTON LONGINES RADO TISSOT BAUME ET MERCIER BREITLING
      </h3>
    </div>
  </div>
</div>
`;

document.querySelector("#app2").innerHTML = `
<div class="ani-wrapper">
  <div class="box1">anime.js</div>
  <div class="box3">anime.js</div>
  <div class="box4">anime.js</div>
  <div class="box5">anime.js</div>
  <div class="box6">anime.js</div>
  <div class="box7">anime.js</div>
  <div class="box8">anime.js</div>
</div>

`;

const box1 = document.querySelector(".box1");
const animation = anime({
  targets: box1,
  translateX: 300,
  duration: 2000,
  direction: "alternate",
  loop: true,
});

const box3 = document.querySelector(".box3");
const animation3 = anime({
  targets: box3,
  translateX: "100vw",
  duration: 3000,
  easing: "easeInOutQuad",
  loop: true,
  // autoplay: false  //to use one time
});

const box4 = document.querySelector(".box4");
const animation4 = anime({
  targets: box4,
  translateX: 500,
  duration: 4000,
  direction: "ease",
  loop: true,
});

const box5 = document.querySelector(".box5");
const animation5 = anime({
  targets: box5,
  scale: 5,
  easing: "linear",
  duration: 4000,
  loop: true,
  direction: "alternate",
});

const box6 = document.querySelector(".box6");
const animation6 = anime({
  targets: box6,
  translateX: 300,
  duration: 2000,
  direction: "alternate",
  loop: true,
});

const box7 = document.querySelector(".box7");
const animation7 = anime({
  targets: box7,
  translateX: 300,
  duration: 2000,
  direction: "alternate",
  loop: true,
});
const box8 = document.querySelector(".box8");
const animation8 = anime({
  targets: box8,
  translateX: 300,
  duration: 2000,
  direction: "alternate",
  loop: true,
});

setupCounter(document.querySelector("#counter"));
