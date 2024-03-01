import React from "react";
import satu from "../assets/perawat1.jpg";
import dua from "../assets/perawat2.jpg";
import tiga from "../assets/perawat3.jpg";
import empat from "../assets/perawat4.jpg";
import "../App.css";

function Perawat() {
  return (
    <>
      <h1>Perawat</h1>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={satu} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Kepala Ruangan</h5>
              <p>EDI RIYANTO, S.KEP., NS.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={dua} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Perawat Penanggung Jawab</h5>
              <p>HARNI WAHYUNI, S.KEP., NS.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={tiga} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Perawat Penanggung Jawab</h5>
              <p>DIMAS ANGGARA NDARU N., S.KEP., NS.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={empat} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Perawat Penanggung Jawab</h5>
              <p>ERVITA DWI M., S.KEP., NS.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Perawat;
