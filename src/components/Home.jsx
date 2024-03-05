import React from "react";
import satu from "../assets/asoka1.jpg"
import dua from "../assets/asoka2.png"

function Home() {
  return (
    <>
    <div className="container-py-5">
      <div className="text-center">Ruang Asoka</div>
      <div className="row row-cols-md-2 g-2 py-5">
        <div className="col">
          <div className="card">
            <img src={satu} class="card-img-top" alt="" />
          </div>
        </div>
        <p>Ruang rawat inap Asoka merupakan ruang perawatan non bedah pria dewasa yang terdiri dari kelas I, II, dan III dengan kasus penyakit dalam, penyakit paru dan penyakit kulit. Ruang rawat inap Asoka bersebelahan dengan ruang rawat inap Dahlia dan Soeparjo Roestam</p>
        <div className="col">
          <div className="card">
            <img src={dua} class="card-img-top" alt="" />
          </div>
        </div>
      </div>
    </div>
      {/* <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={satu} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={satu}  class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={satu}  class="d-block w-100" alt="..." />
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
      </div> */}
    </>
  );
}

export default Home;
