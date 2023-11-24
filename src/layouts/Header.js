import Link from "next/link";
import { Fragment, use, useEffect, useState } from "react";
import { linkClick, toggleMenu } from "../utils";

const Header = () => {
  const [day, setDay] = useState(true);

  useEffect(() => {
    setDay(false)
  }, [])

  // document.querySelector("body").classList.add("dark-skin");
  useEffect(() => {
    if (day) {
      document.querySelector("body").classList.add("dark-skin");
    } else {
      document.querySelector("body").classList.add("dark-skin");
    }
  }, [day]);

  const [pageToggle, setPageToggle] = useState(false);

  return (
    <Fragment>
      {/* Header */}
      <header className="header">
        <div className="header__builder">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {/* logo */}
              <div className="logo">
                {/* <Link href="/" legacyBehavior>
                  <a>
                    <img
                      width={228}
                      height={38}
                      src="assets/images/logo2.png"
                      alt=""
                    />
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right">
              {/* switcher btn */}

              {/* menu btn */}
              <a href="#" className="menu-btn" onClick={(e) => toggleMenu(e)}>
                <span />
                <span />
              </a>
              {/* Menu Full Overlay */}
              <div className="menu-full-overlay">
                <div className="menu-full-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        {/* menu full */}
                        <div className="menu-full">
                          <ul className="menu-full">
                            <li className="menu-item">
                              <Link legacyBehavior href="/">
                                <a
                                  className="splitting-text-anim-2"
                                  data-splitting="chars"
                                >
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#about-me"
                                onClick={() => linkClick()}
                              >
                                About Me
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#projects"
                                onClick={() => linkClick()}
                              >
                                Projects
                              </a>
                            </li>
                            <li className="menu-item">
                              <a
                                className="splitting-text-anim-2"
                                data-splitting="chars"
                                href="/#contact-section"
                                onClick={() => linkClick()}
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* social */}
                        <div className="menu-social-links">
                          <a
                            href="hhttps://www.linkedin.com/in/cathal-paz"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="linkedin"
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                          <a
                            href="https://github.com/cathalpaz"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="github"
                          >
                            <i className="fab fa-github" />
                          </a>
                          <a
                            href="https://wellfound.com/u/cathal-paz"
                            target="blank"
                            className="scrolla-element-anim-1"
                            title="wellfound"
                          >
                            <i className="fab fa-angellist" />
                          </a>
                        </div>
                        <div className="v-line-block">
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-overlay" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;
