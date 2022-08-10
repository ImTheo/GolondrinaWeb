import React, { useEffect, useState } from "react";
import {useRoom} from "../controller/roomController"

export function Rooms() {
  const {rooms}= useRoom();
  
  const roomData = [];

  for (const data of rooms) {
    console.log(data.image)
    roomData.push(
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href={"#"+data.id}
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src={data.image}
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{data.name}</div>
            <div className="portfolio-caption-subheading text-muted">
              {data.description}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="page-section bg-light" id="rooms">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Nuestras Habitaciones
          </h2>
          <h3 className="section-subheading text-muted">
            Disfruta de un fin de semana inolvidable en la finca las Golondrinas
          </h3>
        </div>
        <div className="row">{roomData}</div>
      </div>
    </section>
  );
}

export default Rooms;
