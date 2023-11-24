import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


const PortfolioIsotope = ({ noViewMore }) => {

  const programazonSlides = [
    {
      image: "assets/images/test.png",
      alt: "Programazon",
    },
    {
      image: "assets/images/programazon1.gif",
      alt: "Programazon",
    },
    {
      image: "assets/images/programazon2.gif",
      alt: "Programazon",
    },
    {
      image: "assets/images/programazon3.gif",
      alt: "Programazon",
    },
    {
      image: "assets/images/programazon4.gif",
      alt: "Programazon",
    }
  ];
  const slacordSlides = [
    {
      image: "assets/images/slacord.png",
      alt: "Slacord",
    },
    {
      image: "assets/images/slacord1.gif",
      alt: "Slacord",
    },
    {
      image: "assets/images/slacord2.gif",
      alt: "Slacord",
    },
    {
      image: "assets/images/slacord3.gif",
      alt: "Slacord",
    },
  ];
  const joinSlides = [
    {
      image: "assets/images/joinUp.png",
      alt: "join(Up)",
    },
    {
      image: "assets/images/join1.gif",
      alt: "join(Up)",
    },
    {
      image: "assets/images/join2.gif",
      alt: "join(Up)",
    },
  ];


  const [slide1, setSlide1] = useState(0)
  const [slide2, setSlide2] = useState(0)
  const [slide3, setSlide3] = useState(0)


  const nextSlide = () => {
    setSlide1(slide1 === programazonSlides.length - 1 ? 0 : slide1 + 1)
  }
  const nextSlide2 = () => {
    setSlide2(slide2 === slacordSlides.length - 1 ? 0 : slide2 + 1)
  }
  const nextSlide3 = () => {
    setSlide3(slide3 === joinSlides.length - 1 ? 0 : slide3 + 1)
  }
  const prevSlide = () => {
    setSlide1(slide1 === 0 ? programazonSlides.length - 1 : slide1 - 1)
  }
  const prevSlide2 = () => {
    setSlide2(slide2 === 0 ? slacordSlides.length - 1 : slide2 - 1)
  }
  const prevSlide3 = () => {
    setSlide3(slide3 === 0 ? joinSlides.length - 1 : slide3 - 1)
  }

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img proj">
                  {/* <Link legacyBehavior href="/work-single"> */}
                    <a className="carousel">
                      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                      {programazonSlides.map((slide, index) => (
                        <img key={index} src={slide.image} alt={slide.alt} className={slide1 === index ? "slide" : "slide slide-hidden"} />
                      ))}
                      <span className="overlay" />
                      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                      {/* <div className="indicators">{slides.map((_, idx) => {
                         <span key={idx} onClick={null} className="indicator"></span>
                      })}</div> */}
                    </a>
                  {/* </Link> */}
                </div>
              </div>
              <div className="desc">
                <span className="category"> Python, Flask, React, Redux, SQLAlchemy, AWS </span>
                <h5 className="name">
                  {/* <Link legacyBehavior href="/work-single"> */}
                    <a>Programazon</a>
                  {/* </Link> */}
                </h5>
                <div className="text">
                  <p className="project-desc">
                    Amazon inspired e-commerce site for all tech needs. Users experience an enhanced interface for selling, purchasing, and reviewing products, along with the capability to update their cart.
                  </p>
                </div>
                <div className="project-links">
                  <a  className="project-link code-btn scrolla-element-anim-1 scroll-animate" data-animate="active" href="https://github.com/cathalpaz/programazon" target="_blank">
                    <span className="code-btn-text">Code <i aria-hidden="true" className="fab fa-github" /> </span>
                  </a>
                  <a className="project-link code-btn scrolla-element-anim-1 scroll-animate" href="https://programazon.onrender.com"  target="_blank">
                    <span className="code-btn-text">Live Demo <i aria-hidden="true" className="fas fa-arrow-right" /></span>
                  </a>
                </div>
                {/* <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  {/* <Link legacyBehavior href="/work-single"> */}
                  <a className="carousel">
                      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide2} />
                      {slacordSlides.map((slide, index) => (
                        <img key={index} src={slide.image} alt={slide.alt} className={slide2 === index ? "slide" : "slide slide-hidden"} />
                      ))}
                      <span className="overlay" />
                      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide2} />
                      {/* <div className="indicators">{slides.map((_, idx) => {
                         <span key={idx} onClick={null} className="indicator"></span>
                      })}</div> */}
                    </a>
                  {/* </Link> */}
                </div>
              </div>
              <div className="desc">
                <span className="category"> Python, Flask, React, Redux, SQLAlchemy, AWS, Websockets </span>
                <h5 className="name">
                  {/* <Link legacyBehavior href="/work-single"> */}
                    <a>Slacord</a>
                  {/* </Link> */}
                </h5>
                <div className="text">
                  <p className="project-desc">
                    Discord clone. Users can customize their account and friend other users. And with full server functionality, can interact with other users in real time through channels and direct messages.
                  </p>
                </div>
                <div className="project-links">
                  <a  className="project-link code-btn scrolla-element-anim-1 scroll-animate" data-animate="active" href="https://github.com/cathalpaz/discord-clone" target="_blank">
                    <span className="code-btn-text">Code <i aria-hidden="true" className="fab fa-github" /> </span>
                  </a>
                  <a className="project-link code-btn scrolla-element-anim-1 scroll-animate" href="https://slacord.onrender.com"  target="_blank">
                    <span className="code-btn-text">Live Demo <i aria-hidden="true" className="fas fa-arrow-right" /></span>
                  </a>
                </div>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  {/* <Link legacyBehavior href="/work-single"> */}
                  <a className="carousel">
                      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide3} />
                      {joinSlides.map((slide, index) => (
                        <img key={index} src={slide.image} alt={slide.alt} className={slide3 === index ? "slide" : "slide slide-hidden"} />
                      ))}
                      <span className="overlay" />
                      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide3} />
                      {/* <div className="indicators">{slides.map((_, idx) => {
                         <span key={idx} onClick={null} className="indicator"></span>
                      })}</div> */}
                    </a>
                  {/* </Link> */}
                </div>
              </div>
              <div className="desc">
                <span className="category"> JavaScript, Node, Express, React, Redux, PostgreSQL </span>
                <h5 className="name">
                  {/* <Link legacyBehavior href="/work-single"> */}
                    <a>join(Up)</a>
                  {/* </Link> */}
                </h5>
                <div className="text">
                  <p className="project-desc">
                    Coding community focused app. Users can connect with others sharing common interests through events and groups. Users can join groups and RSVP for events.
                  </p>
                </div>
                <div className="project-links">
                  <a  className="project-link code-btn scrolla-element-anim-1 scroll-animate" data-animate="active" href="https://github.com/cathalpaz/joinUp-Project" target="_blank">
                    <span className="code-btn-text">Code <i aria-hidden="true" className="fab fa-github" /> </span>
                  </a>
                  <a className="project-link code-btn scrolla-element-anim-1 scroll-animate" href="https://api-project-ziul.onrender.com"  target="_blank">
                    <span className="code-btn-text">Live Demo <i aria-hidden="true" className="fas fa-arrow-right" /></span>
                  </a>
                </div>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <a legacyBehavior href="https://github.com/cathalpaz" target="_blank">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>More small projects on<i aria-hidden="true" className="fab fa-github more-github" /></span>
              </a>
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
