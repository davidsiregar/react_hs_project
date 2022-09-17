import React , {Fragment} from "react";
import "./Contact.css"
// import "node_modules/bootstrap/scss";

const Contact = () => {
  return (
    <Fragment>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="row-judul-contact-us">
              <h1>Contact Us</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label for="nama" className="form-label">
                      Masukan nama:
                    </label>
                    <input
                      className="form-control"
                      id="nama"
                      placeholder="John Doe"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="email" class="form-label">
                      Masukan email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label for="pesan" className="form-label">
                      Pesan:
                    </label>
                    <textarea
                      className="form-control"
                      id="pesan"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Kirim
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;