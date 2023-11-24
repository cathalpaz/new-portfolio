const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/cathal-paz">
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a target="_blank" rel="nofollow" href="https://github.com/cathalpaz">
                  <i aria-hidden="true" className="fab fa-github" />
                </a>
                <a target="_blank" rel="nofollow" href="https://wellfound.com/u/cathal-paz">
                  <i aria-hidden="true" className="fab fa-angellist" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
