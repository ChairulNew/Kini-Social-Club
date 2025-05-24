import React from "react";
import "./Feedback.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonial } from "../../data";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    centerMode: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="feedback">
      <div className="wrapper-feedback">
        <h1 className="title-feedback">USER FEEDBACK</h1>
        <p className="sub_title">
          We collect all incoming feedback as a basis for evaluation and
          improvement. <br /> Here are some of the responses from our users.
        </p>
        <section id="testimonial">
          <div className="container">
            <Slider {...settings} className="testimonial_container">
              {testimonial.map((list, index) => (
                <div className="testimonial_card" key={index}>
                  <div className="stars_container">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text_muted list-date">{list.date}</p>
                  <div className="user_row">
                    <div className="profile">
                      <img src="/default-profile.png" alt={list.name} />
                    </div>
                    <div className="details">
                      <h3 className="name">{list.name}</h3>
                    </div>
                  </div>
                  <p className="text_muted content">{list.description}</p>
                  <p className="text_muted content">{list.note}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
      <div className="btn-section-gallery button-center">
        <button className="btn">Click for more...</button>
      </div>
    </section>
  );
};

export default Feedback;
