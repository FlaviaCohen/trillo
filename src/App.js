import React from "react";
import "./sass/main.scss";
import logo from "./img/logo.png";
import sprite from "./img/sprite.svg";
import user from "./img/user.jpg";
import hotel1 from "./img/hotel-1.jpg";
import hotel2 from "./img/hotel-2.jpg";
import hotel3 from "./img/hotel-3.jpg";
import friend1 from "./img/user-3.jpg";
import friend2 from "./img/user-4.jpg";
import friend3 from "./img/user-5.jpg";
import friend4 from "./img/user-6.jpg";
import user1 from "./img/user-1.jpg";
import user2 from "./img/user-2.jpg";

const App = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <img src={logo} alt="trillo logo" className="logo" />
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search hotels"
            />
            <button className="search__button">
              <svg className="search__icon">
                <use href={sprite + "#icon-magnifying-glass"} />
              </svg>
            </button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use href={sprite + "#icon-bookmark"} />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use href={sprite + "#icon-chat"} />
              </svg>
              <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
              <img
                className="user-nav__user-photo"
                src={user}
                alt="User photo"
              />
              <span className="user-nav__user-name">Jonas</span>
            </div>
          </nav>
        </header>
        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-home"} />
                  </svg>
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-aircraft-take-off"} />
                  </svg>
                  <span>Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <span>Car rental</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-map"} />
                  </svg>
                  <span>Tours</span>
                </a>
              </li>
            </ul>

            <div className="legal">
              &copy; 2017 by trillo. All rights reserved.
            </div>
          </nav>
          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img
                  src={hotel1}
                  alt="Photo of hotel 1"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel2}
                  alt="Photo of hotel 2"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel3}
                  alt="Photo of hotel 3"
                  className="gallery__photo"
                />
              </figure>
            </div>

            <div className="overview">
              <h1 className="overview__heading">Hotel Las Palmas</h1>

              <div className="overview__stars">
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
              </div>
              <div className="overview__location">
                <svg className="overview__icon-location">
                  <use href={sprite + "#icon-location-pin"} />
                </svg>
                <button className="btn-inline">Albufeira, Portugal</button>
              </div>
              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
              </div>
            </div>

            <div className="detail">
              <div className="detail__description">
                <p className="detail__paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  quas quisquam sapiente consequuntur minima nulla architecto
                  perspiciatis earum natus neque at laborum omnis vero quos
                  voluptatem.
                </p>
                <p className="detail__paragraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  quas quisquam sapiente consequuntur minima nulla architecto.
                </p>
                <ul className="detail__list">
                  <li className="detail__list-item">Close to the beach</li>
                  <li className="detail__list-item">Breakfast included</li>
                  <li className="detail__list-item">Free airport shuttle</li>
                  <li className="detail__list-item">Free wifi in all rooms</li>
                  <li className="detail__list-item">
                    Air conditioning and heating
                  </li>
                  <li className="detail__list-item">Pets allowed</li>
                  <li className="detail__list-item">We speak all languagues</li>
                  <li className="detail__list-item">Perfect for families</li>
                </ul>

                <div className="detail__recommend">
                  <p className="detail__recommend-count">
                    Lucy and 3 other friends recommend this hotel.
                  </p>
                  <div className="detail__recommend-friends">
                    <img
                      src={friend1}
                      alt="Friend 1"
                      className="detail__recommend-photo"
                    />
                    <img
                      src={friend2}
                      alt="Friend 2"
                      className="detail__recommend-photo"
                    />
                    <img
                      src={friend3}
                      alt="Friend 3"
                      className="detail__recommend-photo"
                    />
                    <img
                      src={friend4}
                      alt="Friend 4"
                      className="detail__recommend-photo"
                    />
                  </div>
                </div>
              </div>
              <figure className="detail__reviews">
                <figure className="detail__review">
                  <blockquote className="detail__review-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit quas quisquam sapiente consequuntur minima nulla
                    architecto.
                  </blockquote>
                  <figcaption className="detail__review-user">
                    <img
                      src={user1}
                      alt="User 1"
                      className="detail__review-photo"
                    />
                    <div className="detail__review-user-box">
                      <p className="detail__review-user-name">Nick Smith</p>
                      <p className="detail__review-user-date">Feb 23rd, 2021</p>
                    </div>
                    <div className="detail__review-rating">7.8</div>
                  </figcaption>
                </figure>

                <figure className="detail__review">
                  <blockquote className="detail__review-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit quas quisquam sapiente consequuntur minima nulla
                    architecto.
                  </blockquote>
                  <figcaption className="detail__review-user">
                    <img
                      src={user2}
                      alt="User 2"
                      className="detail__review-photo"
                    />
                    <div className="detail__review-user-box">
                      <p className="detail__review-user-name">Mary Thomas</p>
                      <p className="detail__review-user-date">
                        Sept 13th, 2021
                      </p>
                    </div>
                    <div className="detail__review-rating">9.3</div>
                  </figcaption>
                </figure>

                <button className="btn-inline">
                  Show all <span>&rarr;</span>
                </button>
              </figure>
            </div>

            <div className="cta">
              <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
              </h2>
              <button className="cta__btn">
                <span className="cta__btn-visible">Book now</span>
                <span className="cta__btn-invisible">Only 4 rooms left</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
