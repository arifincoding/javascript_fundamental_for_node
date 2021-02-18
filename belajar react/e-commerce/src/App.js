import React from 'react';
// import {Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://code.jquery.com/jquery-3.5.1.slim.min.js'
import './App.css';


function App(){
  
    return(
      <div>
        <div className="jumbo-tron">
        </div>
        <div className="jumbotron-content">
        <nav className="navbar container navbar-expand-lg navbar-dark">
        <div className="navbar-brand font-weight-bold">Pasarku</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item nav-link text-white">Pasar tradisional <div className="bot-border-active mx-auto"></div></li>
              <li className="nav-item nav-link text-white">Pengalaman<div className="bot-border mx-auto"></div></li>
              <li className="nav-item nav-link text-white">Pengalaman Online<div className="bot-border mx-auto"></div></li>
            </ul>
          </div>
        </nav>
        <div className="d-lg-flex d-none justify-content-center mt-4">
            <div className="col-8 row pr-1 bg-light rounded-pill">
              <div className="my-1 col-4 border-right">
              <label className="font-weight-bold m-0 small">Lokasi</label>
              <input className="form-control border-0 p-0 form-control-sm" type="text" placeholder="Dimanakah Anda ?"/>
            </div>
            <div className="my-1 col-3 border-right">
              <label className="font-weight-bold m-0 small">Tanggal Kirim</label>
              <input className="form-control border-0 p-0 form-control-sm" type="text" placeholder="Dimanakah Anda ?"/>
            </div>
            <div className="my-1 col-3">
              <label className="font-weight-bold m-0 small">Jam Kirim</label>
              <input className="form-control border-0 p-0 form-control-sm" type="text" placeholder="Dimanakah Anda ?"/>
            </div>
            <div className="my-1 col pl-1 pr-0 text-right">
              <button className="btn btn-danger btn-search rounded-circle"><i className="fas fa-search"></i></button>
            </div>
          </div>
        </div>
        <div className="find-place container">
          <h1 className="text-white font-weight-bold">Cari<br/>Yang Dekat</h1>
          <button className="btn btn-light btn-sm mt-2 font-weight-bold">telusuri pasar disekitar</button>
        </div>
        </div>
        <div className="mt-5 container">
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
          <h2 className="font-weight-bold">Cari kategori apa?</h2>
        </div>
      </div>
    );
}

export default App;
