import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "#73e6ff" }}>
        <Carousel />
      </div>

      <div>
        <div className="row row-cols-1 row-cols-md-3 p-3 gx-0">
          <div>
            <div className="card h-100 bg-info-subtle rounded-0">
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="card-title mb-4">Categories</h2>
                <p className="card-text mb-4">
                  Browse through our collection of resources covering a wide
                  range of diseases.
                </p>
                <Link to="/categories" className="text-decoration-none">
                  <button className="btn btn-dark my-2 btn-sm">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div
              className="card h-100 rounded-0"
              style={{ backgroundColor: "#73e6ff" }}
            >
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="card-title mb-4">Finance</h2>
                <p className="card-text mb-4">
                  Learn more about the financial side of healthcare, from
                  insurance and billing to healthcare policy and reform.
                </p>
                <Link to="/finance" className="text-decoration-none">
                  <button className="btn btn-dark my-2 btn-sm">
                    See Plans
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="card h-100 bg-info-subtle rounded-0">
              <div className="card-body d-flex flex-column justify-content-center">
                <h2 className="card-title mb-4">Online Appointment</h2>
                <p className="card-text mb-4">
                  Schedule a virtual appointment with a healthcare provider from
                  the comfort of your own home.
                </p>
                <Link to="/appointment" className="text-decoration-none">
                  <button className="btn btn-dark my-2 btn-sm">
                    Make Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
