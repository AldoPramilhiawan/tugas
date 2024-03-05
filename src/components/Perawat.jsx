import React from "react";
import satu from "../assets/perawat1.jpg";
import dua from "../assets/perawat2.jpg";
import tiga from "../assets/perawat3.jpg";
import empat from "../assets/perawat4.jpg";
import "../App.css";

function Perawat() {
  return (
    <>
      <div className="container-py-5">
        <div className="text-center">Perawat</div>
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
          <div className="col">
            <div class="card">
              <img src={satu} class="card-img-top"  alt="..." />
              <div class="card-body">
                <h4 class="card-title">Kepala Ruangan</h4>
                <h5 className="card-text">Edi Riyanto, S.Kep., Ns.</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={dua} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Perawat Penanggung Jawab</h4>
                <h5 className="card-text">Harni Wahyuni, S.Kep., Ns.</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={tiga} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Perawat Penanggung Jawab</h4>
                <h5 className="card-text">Dimas Anggara Ndaru N., S.Kep., Ns.</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img src={empat} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title">Perawat Penanggung Jawab</h4>
                <h5 className="card-text">Ervita Dwi M., S.Kep., Ns.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perawat;
