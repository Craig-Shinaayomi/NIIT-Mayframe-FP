import React, { Component } from "react";
import Slider from "react-slick";
import classes from "./TestimonyInvest.module.css";

export default class Autoplay extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 4000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h6>Testimonials</h6>
          <h1>What Our Customers Says About Us</h1>

          <Slider {...settings} className={classes.cardContainer}>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future.
                    Their expert team guided me every step of the way,
                    offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future.
                   Their expert team guided me every step of the way, 
                  offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future.
                  Their expert team guided me every step of the way,
                  offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future.
                    Their expert team guided me every step of the way,
                    offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future. 
                   Their expert team guided me every step of the way, 
                   offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.cardWrap}>
              <div className={classes.card}>
                <div className={classes.cardText}>
                  <h4>Tolu Oyeh</h4>
                  <h5>Business woman</h5>
                  <p>
                   Choosing Mayframe investment was a game changer  for my financial future. 
                   Their expert team guided me every step of the way,
                    offering tailored investment strategies that aligned perfectly with my goals.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
