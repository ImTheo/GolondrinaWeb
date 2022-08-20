import React from "react";

export function Contact() {
  return (
    <section className="page-section bg-light" id="team">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">CONTACTOS</h2>
          <h3 className="section-subheading text-muted">
            Nos encontramos en Facebook y en Instagram como.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/1.jpg"
                alt="..."
              />
              <h4>Finca "Las Golondrinas"</h4>
              <p className="text-muted">Facebook</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Parveen Anand Facebook Profile"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/2.jpg"
                alt="..."
              />
              <h4>las_golondrinas.ec</h4>
              <p className="text-muted">Instagram</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="#!"
                aria-label="Diana Petersen LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted"> Atuntaqui - Ecuador </p>
            <p className="large text-muted">
              Finca "Las Golondrinas" Farm Lodging{" "}
            </p>
            <p className="large text-muted"> Tlf: 0993785518</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
