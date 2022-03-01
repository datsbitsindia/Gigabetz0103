import Slider from "react-slick";
import "../css/style.css";

import logo from "../img/logo.png";
import s1 from "../img/s1.png";
import s2 from "../img/s2.png";
import r1 from "../img/r1.png";
import r2 from "../img/r2.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import i123 from "../img/123.png";
import i124 from "../img/124.png";
import i125 from "../img/125.png";
import slider from "../img/slider4.jpg";
import card from "../img/card.png";
import card1 from "../img/card-1.png";
import i12 from "../img/12.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const settings1 = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  centerMode: true,
  autoplay: true,
};

const Home = () => {
  return (
    <div>
      <header>
        <nav className="betway-nav navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="betway-ul navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link title-logo" href='/sports' >
                    <img src={s1} alt="Card Back" />
                    <img src={s2} className="img-top" alt="Card Front" />
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-logo" href="#">
                    <img src={card1} alt="Card Back" />
                    <img src={card} className="img-top" alt="Card Front" />
                    live casino
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link title-logo" href="#">
                    <img src={r1} alt="Card Back" />
                    <img src={r2} className="img-top" alt="Card Front" />
                    esports
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link title-logo" href="#">
                    <img src={p2} alt="Card Back" />
                    <img src={p1} className="img-top" alt="Card Front" />
                    Promotions
                  </a>
                </li>
              </ul>
              <ul className="betway-ul2 navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item bs-1">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item bs-2">
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-slider">
          <img src={slider} />
          <div className="slider-text">
            <h2>t20 world cup boundary special</h2>
            <h1>
              money back as a free bet <br />
              if the last ball is a boundary
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
            <div className="banner-btn">
              <a href="#">register</a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container py-5">
          <div className="giga-div">
            <h1>GIGABETZ</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-div2">
          <div className="testimonial-reel testi-box">
            <Slider {...settings}>
              <div>
                <div className="box">
                  <figure className="image">
                    <img className="img-fluid" src={i12} />
                  </figure>
                  <div className="test-component">
                    <article className="test-title">
                      <h1>Mzansi Super League</h1>
                    </article>
                    <article className="test-content">
                      <p>
                        Betway are also pleased to be the Official Global
                        Betting Partner of the Mzansi Super League, the premier
                        Twenty20 cricket tournament in South Africa.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <figure className="image">
                    <img className="img-fluid" src={i123} />
                  </figure>
                  <div className="test-component">
                    <article className="test-title">
                      <h1>West Indies</h1>
                    </article>
                    <article className="test-content">
                      <p>
                        We live and breathe cricket, which is why we're proud to
                        be the Official Betting Partner of Cricket West Indies.
                        The partnership sees Betway collaborate with both the
                        men and women's senior teams, showcasing across their
                        home and away games.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <figure className="image">
                    <img className="img-fluid " src={i124} />
                  </figure>
                  <div className="test-component">
                    <article className="test-title">
                      <h1>West Ham</h1>
                    </article>
                    <article className="test-content">
                      <p>
                        Our love for the game stretches to the English Premier
                        League, where we're proud to be the principal sponsor of
                        West Ham United Football Club, which includes the Betway
                        logo featuring on the front of all the club's senior
                        team's matchday shirts and training wear.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <figure className="image">
                    <img className="img-fluid " src={i125} />
                  </figure>
                  <div className="test-component">
                    <article className="test-title">
                      <h1>Kevin Pietersen</h1>
                    </article>
                    <article className="test-content">
                      <p>
                        Getting into the mind of world-class cricketers can make
                        all the difference. So we've joined forces with
                        cricketing legend Kevin Pietersen to get you up close
                        and personal with the best cricket has to offer. One of
                        the world's most decorated cricketers, KP brings a
                        wealth of knowledge, including exclusive insight and
                        expert analysis on cricket's biggest matches and
                        tournaments.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-links">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Betway Corporate</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Responsible Gaming</a>
                  </li>
                  <li>
                    <a href="#">Privacy &amp; Security</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <ul>
                  <li>
                    <a href="#">Bonus Terms</a>
                  </li>
                  <li>
                    <a href="#">Betting Help</a>
                  </li>
                  <li>
                    <a href="#">Getting Started</a>
                  </li>
                  <li>
                    <a href="#">Online Slots</a>
                  </li>
                  <li>
                    <a href="#">Online Casino</a>
                  </li>
                  <li>
                    <a href="#">Online Roulette</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Online Blackjack</a>
                  </li>
                  <li>
                    <a href="#">Online Betting</a>
                  </li>
                  <li>
                    <a href="#">Betting Sites</a>
                  </li>
                  <li>
                    <a href="#">Football Betting</a>
                  </li>
                  <li>
                    <a href="#">Esports Betting</a>
                  </li>
                  <li>
                    <a href="#">Cricket Betting</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-12">
                <ul>
                  <li>
                    <a href="#">Betting App</a>
                  </li>
                  <li>
                    <a href="#">Horse Racing Betting</a>
                  </li>
                  <li>
                    <a href="#">Tennis Betting</a>
                  </li>
                  <li>
                    <a href="#">Golf Betting</a>
                  </li>
                  <li>
                    <a href="#">Associates</a>
                  </li>
                  <li>
                    <a href="#">Andar Bahar</a>
                  </li>
                  <li>
                    <a href="#">Teen Patti</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="testy-div">
          <Slider {...settings1}>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src={i12}></img>
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid" src={i123}></img>
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src={i124}></img>
                </figure>
              </div>
            </div>
            <div>
              <div className="box">
                <figure className="image">
                  <img className="img-fluid " src={i125}></img>
                </figure>
              </div>
            </div>
          </Slider>
        </div>
        <div className="container">
          <div className="copyright">
            <p>Copyright © 2021 GIGABITE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
