import React, { useEffect, useState } from "react";

export function Modals() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/activities")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const activities = [];
  for (const data of backendData) {
    activities.push(
      <div
      className="portfolio-modal modal fade"
      id={data.id}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
      name= {data.id}
    >
      <h1>{data.id}</h1>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  <h2 className="text-uppercase">{data.name}</h2>
                  <p className="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    className="img-fluid d-block mx-auto"
                    src={data.image}
                    alt="..."
                  />
                  <p>
                    {data.summary}
                  </p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong>
                      Hospedaje
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Ven y Disfruta de nuestro Paisaje
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-xmark me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div>
      {activities}
    </div>
    
  );
}

export default Modals;
