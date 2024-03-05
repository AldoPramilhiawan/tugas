import React from 'react'
import satu from "../assets/tong1.png"
import dua from "../assets/tong2.png"
import tiga from "../assets/gelang-pasien1.png"
import empat from "../assets/gelang-pasien2.png"
import lima from "../assets/tanda-resiko-jatuh.png"
import enam from "../assets/kartu-tunggu.png"

function SaranaPrasarana() {
  return (
    <div className="container-py-5">
      <div className="text-center">Sarana Prasarana</div>
      <div className="row row cols-2-md-2 g-2 py-5">
        <div className="col">
          <div className="card">
            <img src={satu} class="card-img-top" alt="" />
            <div className="card-body">
              <p>Tempah sampah berwarna kuning digunakan untuk membuang limbah medis (masker, sarung tangan, popok, sampah yang terkena cairan tubuh pasien, dll)</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={dua} class="card-img-top" alt="" />
            <div className="card-body">
              <p>Tempat sampah berwarna hitam digunakan untuk membuang limbah non – medis (botol kemasan, sampah makanan, dll)</p>
            </div>
          </div>
        </div>

        <div className="text-center">Gelang Identitas Pasien</div>

        <div className="col">
          <div className="card">
            <img src={tiga} class="card-img-top" alt="" />
            <div className="card-body">
              <p>Gelang berwarna pink digunakan oleh pasien perempuan.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src={empat} class="card-img-top" alt="" />
            <div className="card-body">
              <p>Gelang berwarna biru digunakan oleh pasien laki-laki.</p>
            </div>
          </div>
        </div>
        <p>Gelang wajib digunakan selama pasien berada di rumah sakit dan akan dilepas saat pasien pulang.</p>
        <ul className='list-unstyled'>
          <li>Fungsi dari gelang pasien :
            <ul>
              <li>Sebagai tanda pengenal pasien</li>
              <li>Menghindari resiko kesalahan medis.</li>
            </ul>
          </li>
        </ul>
        <div className="text-center">Tanda Risiko Jatuh</div>
        <div className="col">
          <div className="card">
            <img src={lima} class="card-img-top" alt="" />
          </div>
        </div>
        <ul className='list-unstyled'>
          <li>Fungsi :
            <p>Sebagai penanda pada pasien dengan risiko jatuh tinggi.
              Perhatikan !</p>
              <ul>
                <li>Pasien dengan riwayat jatuh sebelumnya</li>
                <li>Pasien usia lanjut atau anak-anak</li>
                <li>Pasien yang tidak dapat berdiri sendiri dan tidak dapat berjalan dengan normal</li>
                <li>Pasien yang memiliki lebih dari satu penyakit</li>
                <li>Pasien yang pikun atau mudah lupa</li>
                <li>Pasien yang terpasang infus</li>
              </ul>
          </li>
        </ul>
        <div className="text-center">Kartu Tunggu</div>
        <div className="col">
          <div className="card">
            <img src={enam} class="card-img-top" alt="" />
          </div>
        </div>
        <ul className='list-unstyled'>
          <li>Fungsi :
            <ul>
              <li>Sebagai identitas penunggu pasien rawat inap</li>
              <li>Apabila kartu penunggu hilang, maka diwajibkan membayar denda sebesar Rp 20.000 yang dibayarkan ke bagian administrasi keuangan Rumah Sakit</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SaranaPrasarana;