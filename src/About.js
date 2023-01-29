import React from 'react';
import './About.css';
import aboutImg from './assets/img/about.png';
import resume from './assets/props/DineshKumar_Resume.pdf';

function About() {
  //UP TO TOP BTN
  window.addEventListener("scroll",function (){
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active",window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
            <div className="col__2">
                <img src={aboutImg} alt="" className="about__img" />
            </div>
            <div className="col__2">
                <h1 className="about__heading">
                    About Me
                </h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                        I am a recent college graduate, who is finished graduate and 
                        interested in developing the skills needed to become a professional
                        in the field of Computer-Science Engineering.
                    </p>
                    <p className="about__text p__color">
                        I bring a wide range of relevant skills to the 
                        table as well as all required certifications.My hope is to contribute cochability and work ethic as I
                        grow with a Dynamic company that prioritizes green design and functionality..
                    </p>
                    <h2 className="about__heading">
                      Education
                    </h2>
                    <p className="about__text p__color">
                      <strong>SSLC</strong> - R.V.S Matriculation Higher Secondary School.
                    </p>
                    <p className="about__text p__color">
                      <strong>HSC</strong> - C.V.M Matriculation Higher Secondary School.
                    </p>
                    <p className="about__text p__color">
                      <strong>Bachelors of Engineering</strong> In <strong>Computer Science And Engineering</strong> At
                      <br />
                      P.A College Of Engineering And Technology.
                    </p>
                    <div className="about__button d__flex align__items__center">
                        <a href={resume} download={resume} id="dwnld-butn"><button className="about btn pointer">Download Cv</button></a>
                        <a href="#Contact"><button className="about btn pointer">Hire Me</button></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/*UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top active">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engine-fill white" viewBox="0 0 16 16">
          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
        </svg>
      </a>
      </div>
    </div>
  );
}

export default About;
