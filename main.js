import "./assets/scss/style.scss";
import { setupCounter } from "./counter.js";

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

setupCounter(document.querySelector("#counter"));
