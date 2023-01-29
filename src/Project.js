import React from 'react';
import './Project.css';
import Project1 from './assets/img/portfolio-1.jpg';
import Project2 from './assets/img/portfolio-4.jpg';
import Project3 from './assets/img/portfolio-2.jpg';
function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">The Projects Are</h1>
        <p className="heading p__color">
            Part Of
        </p>
        <p className="heading p__color">The Projects are ...</p>
      </div>
      <div className="container">
        <div className="row">
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project1} alt="" className="project__img" />
                            <div className="mask__effect">
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Machine Learning Approach For Student Performance Prediction</h4>
                                <a href="/Project1.js" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project2} alt="" className="project__img" />
                            <div className="mask__effect">
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">My portfolio</h4>
                                <a href="/Project1.js" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col__3">
                <div className="project__box pointer relative">
                    <div className="project__box__img pointer relative">
                        <div className="project__img__box">
                            <img src={Project3} alt="" className="project__img" />
                            <div className="mask__effect">
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Loading...!</h5>
                                <h4 className="project__text">?</h4>
                                <a href="/Project1.js" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <button className="view__more pointer btn">View more</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Project
