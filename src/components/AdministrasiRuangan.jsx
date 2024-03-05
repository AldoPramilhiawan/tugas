import React from "react";

function AdministrasiRuangan() {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
            <th>Kategori pelayanan rawat inap</th>
            <th>Tarif</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Kelas I</td>
            <td>Rp. 400.000</td>
        </tr>
        <tr>
            <td>Kelas II</td>
            <td>Rp. 300.000</td>
        </tr>
        <tr>
            <td>Kelas III</td>
            <td>Rp. 110.000</td>
        </tr>
      </tbody>
    </table>
  );
}

export default AdministrasiRuangan;
