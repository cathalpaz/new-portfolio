import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  const [popUp, setPopUp] = useState(false);

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3hzzr8z', 'template_acdz637', form.current, 'JfLQc9eTqgsq1Kmc9')
      .then((result) => {
          form.current.reset()
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });

    setTimeout(() => {
      setPopUp(true);
    }, 1000);
  };




  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Cathal</b> Paz{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    <strong>Fullstack Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    Born and Raised in Queens, NY.
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/cathal-paz">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://github.com/cathalpaz">
                      <i aria-hidden="true" className="fab fa-github" />
                    </a>
                    <a target="_blank" rel="nofollow" href="https://wellfound.com/u/cathal-paz">
                      <i aria-hidden="true" className="fab fa-angellist" />
                    </a>
                    <a target="_blank" rel="nofollow" href="assets/cathalpaz-resume.pdf">
                      <i aria-hidden="true" className="far fa-file-alt" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="assets/cathalpaz-resume.pdf"
                    className="btn"
                    download='cathalpaz-resume'
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#about-me" className="btn-lnk">
                    {" "}
                    About me{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/pp2.png"
                  alt="<b>Cathal</b> Paz"
                  className="profile-img"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    {/* <li>
                      <span className="num">
                        3 <strong>+</strong>
                      </span>
                      <span className="value">
                        Fullstack <strong>Projects</strong>
                      </span>
                    </li> */}
                    {/* <li>
                      <span className="num">3</span>
                      <span className="value">
                        Fullstack <strong>Projects</strong>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span>Fullstack Developer</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="about-me"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> ABOUT ME </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  & <b>My Skills</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="about-container container">
            <div className="services-item about-paragraph">
              <div className="lui-text about-text">
                <div>
                  {" "}
                  Hey everyone! My name is Cathal Paz and I'm a 22-year-old Software Engineer from New York City. My tech journey started in a somewhat unconventional way, creating mods for video games back in middle school. Despite originally being on the premed track, my drive for problem-solving and ability to understand complex systems drove me down a different path. {" "}
                </div>
                  {" "}
                <div className="second-text">
                  {" "}
                  Fast forward to today, I'm proud to say that I've come a long way from my modding days. I've honed my skills to become a proficient Software Engineer with a focus on full-stack development and data, capable of building applications from the ground up. {" "}
                </div>
              </div>
              <div
                className="image"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
            <div className="services-item right-service-item">
              <div className="lui-subtitle">
                <span> Tech Stack </span>
              </div>
              <div className="lui-text all-tech-icons">
                <div className="tech-stack_icons">
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                      alt="JavaScript"
                    />
                    <span className='icon_name'>JavaScript</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=avif&w=256"
                      alt="TypeScript"
                    />
                    <span className='icon_name'>TypeScript</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-python-2038870-1720083.png?f=avif&w=256"
                      alt="Python"
                    />
                    <span className='icon_name'>Python</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                      alt="HTML"
                    />
                    <span className='icon_name'>HTML</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                      alt="CSS"
                    />
                    <span className='icon_name'>CSS</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                      alt="React"
                    />
                    <span className='icon_name'>React</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=avif&w=256"
                      alt="Redux"
                    />
                    <span className='icon_name'>Redux</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-8-1175119.png?f=avif&w=256"
                      alt="postgresql"
                    />
                    <span className='icon_name'>PostgreSQL</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=avif&w=256"
                      alt="git"
                    />
                    <span className='icon_name'>Git/Github</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=avif&w=256"
                      alt="node"
                    />
                    <span className='icon_name'>Node</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-flask-51-285137.png?f=avif&w=256"
                      alt="flask"
                    />
                    <span className='icon_name'>Flask</span>
                  </figure>
                  <figure className="icon">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-docker-11-1175228.png?f=avif&w=256"
                      alt="docker"
                    />
                    <span className='icon_name'>Docker</span>
                  </figure>
                </div>
              </div>
              <div>
                <span>& more!</span>
              </div>
            </div>
          </div>
            <div className="lui-bgtitle">
              <span> About me </span>
            </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="projects">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Showcase </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Projects</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Projects </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Testimonials */}

      {/* Section - Pricing */}

      {/* Section - Blog */}

      {/* Section - Contacts */}
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Chat</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Location </span>
                    </div>
                    <div className="lui-text">
                      <span> New York, NY </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Freelance </span>
                    </div>
                    <div className="lui-text">
                      <span> Available </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> cathalpaz@gmail.com </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> +1 917 - 972 - 4960 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={sendEmail} ref={form} id="cform">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input type="text" name="user_name" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input type="email" name="user_email" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Subject <b>*</b>
                              <input type="text" name="user_subject" />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            <label>
                              Your Message <b>*</b>
                              <textarea name="message" defaultValue={""} />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <div className="terms-label">
                            * Accept the terms and conditions.
                          </div>
                          <button
                            href="#"
                            className="btn"
                            type='submit'
                          >
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                    {popUp && (
                      <div>
                        <p className='message-success'><i class='fas fa-check'></i>Thanks, your message has sent successfully.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
