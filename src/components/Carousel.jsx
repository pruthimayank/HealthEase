import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <>
      <div className="p-2">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1561328399-f94d2ce78679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="img-fluid rounded"
                alt="Healthy lifestyle"
              />
            </div>
            <div className="col-lg-6 my-auto p-2">
              <h1>Find out what's causing your symptoms</h1>
              <p>
                Use symptom checker to quickly and easily find out what could be
                causing your symptoms. It's fast, free and anonymous, and can
                help you make informed decisions about your health.
              </p>
              <a target="_blank" href="https://symptomate.com/interview/0">
                <button className="btn btn-dark my-2">Start Checkup</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
