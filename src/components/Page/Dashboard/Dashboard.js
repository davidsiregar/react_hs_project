import React, { Fragment } from "react";
import Logo from "../../../assests/img.png";
import "./Dashboard.css";

import backImage from "../../../assests/coding.jpg";
import people from "../../../assests/ss.png"

import Popular from "../PopularClass/Popular";
const Dashboard = () => {
  return (
    <Fragment>
      <div
        style={{ backgroundImage: `url(${backImage})` }}
        className="firstpage"
      >
        

        <h1 className="heading">Raih Karir Impian</h1>
        <h1 className="heading">Walau Sesat di Jalan.</h1>
        <div className="wrap2">
          <div className="inline">
            Kuasai skill dan dapatkan pekerjaan impianmu.
          </div>
          <div className="inline">
            Sudah <span className="different">2380</span>
            <span> alumni berhasil meraih karir impian mereka.</span>
          </div>
          <div className="inline">
            Apabila setelah lulus kamu belum bekerja dalam 365 hari,
          </div>
          <div className="inline">
            kamu berhak mendapatkan refund{" "}
            <span className="different">up to 110%</span> investasimu.
          </div>
          <div className="find">
            <a href="kelas.html">Temukan kelas terbaikmu</a>
          </div>
          <button style={{ backgroundImage: `url(${people})` }} className="find2"></button>
        </div>
      </div>

      <Popular />
    </Fragment>
  );
};

export default Dashboard;
