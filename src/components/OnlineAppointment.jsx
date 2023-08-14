import appointmentData from "../api/appointment.json";
import Footer from "./Footer";

export default function OnlineAppointment() {
  return (
    <div>
      <div className="row p-2 bg-info-subtle gx-0">
        {appointmentData.map((item) => {
          return (
            <div className="col-6" key={item.id}>
              <a className="text-decoration-none" href={item.url}>
                <div className="card m-1">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#73e6ff" }}
                  >
                    <h3>{item.name}</h3>
                  </div>
                  <div className="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>{item.description}</p>
                    </blockquote>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
