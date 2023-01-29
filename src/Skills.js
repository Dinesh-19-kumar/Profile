import React from "react";
import "./Skills.css";
import mImg from './assets/icons/main.svg';
import jImg from './assets/icons/j.svg';
import nImg from './assets/icons/n.svg';
import mdbImg from './assets/icons/mdb.svg';
import jsImg from './assets/icons/js.svg';
import cImg from './assets/icons/c.svg';
import hImg from './assets/icons/h.svg';
import bImg from './assets/icons/b.svg';

function Skills() {
  return (
    <div className="service component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">My Proffesional Skills</h1>
        <p className="heading p__color">
          The Following Skills Are Mentioned here
        </p>
        <p className="heading p__color">FrontEnd Developing Assets</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={hImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML - 5</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={cImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS - 3 </h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={jsImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">JAVASCRIPT</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={bImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">BOOTSTRAP</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={mImg} alt=" " viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">REACT JS</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="heading">
        <p className="heading p__color">My BackEnd Assets</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={jImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">CORE JAVA</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={nImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">NODE JS</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={mdbImg} alt="" viewBox="0 0 1000 1000" width={50} height={50} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">MONGODB</h1>
                <p className="p service__text p__color">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
