import React from "react";
import Title from "./Title";
import { servicesItems } from "./data";

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="Our" subTitle="services" />
        <div className="section-center services-center">
          {servicesItems.map((service) => {
            return (
              <article className="service" key={service.id}>
                <span className="service-icon">
                  <i className={service.icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-text">{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
