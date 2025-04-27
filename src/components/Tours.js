import React from "react";
import Title from "./Title";
import { toursCards } from "./data";

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subTitle="tours" />
        <div className="section-center featured-center">
          {toursCards.map((card) => {
            const {
              id,
              tourImg,
              tourTitle,
              tourDetail,
              tourDays,
              tourDate,
              tourCountry,
              tourCost,
            } = card;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={tourImg} className="tour-img" alt={tourTitle} />
                  <p className="tour-date">{tourDate}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tourTitle}</h4>
                  </div>
                  <p>{tourDetail}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {tourCountry}
                    </p>
                    <p>{tourDays}</p>
                    <p>{tourCost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tours;
