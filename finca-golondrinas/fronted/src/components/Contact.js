import React from "react";

function Contact() {
    return (
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">CONTACTOS</h2>
                    <h3 class="section-subheading text-muted">Nos encontramos en Facebook y en Instagram como.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                            <h4>Finca "Las Golondrinas"</h4>
                            <p class="text-muted">Facebook</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                            <h4>las_golondrinas.ec</h4>
                            <p class="text-muted">Instagram</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <p class="large text-muted"> Atuntaqui - Ecuador </p>                        
                        <p class="large text-muted">Finca "Las Golondrinas" Farm Lodging </p>
                        <p class="large text-muted"> Tlf: 0993785518</p>
                    </div>
                </div>
            </div>    
            
        </section>
    );
}

export default Contact;