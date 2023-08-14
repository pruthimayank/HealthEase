import categoriesData from "../api/categories.json";
import Cards from "./Cards";
import "../CSS/modal.css";
import Footer from "./Footer";

import { useState } from "react";

export default function Categories() {
  const [cat, currentCat] = useState("Airborne");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleClick = (e) => {
    currentCat(e.target.innerText);
  };

  const filteredDiseases = categoriesData
    .flatMap((category) =>
      category.diseases.filter((disease) =>
        disease.category.toLowerCase().includes(cat.toLowerCase())
      )
    )
    .filter((disease) =>
      disease.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [sign, setSign] = useState("");
  const [symptom, setSymptom] = useState("");
  const [precautions, setPrecautions] = useState("");
  const [medications, setMedications] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  if (isPopupOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  function setpopdata(name, medications, symptoms, signs, precautions) {
    setName(name);
    setSymptom(symptoms);
    setSign(signs);
    setPrecautions(precautions);
    setMedications(medications);
  }

  return (
    <>
      <div className="d-flex">
        <div className="p-2 w-100">
          <div>
            <button
              className="btn btn-dark btn-sm m-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              Show Categories
            </button>
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                >
                  CATEGORIES
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="list-group list-group-flush">
                  {categoriesData.map((category) => {
                    return (
                      <li
                        style={{ cursor: "pointer" }}
                        onClick={toggleClick}
                        className="list-group-item"
                      >
                        {category.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 flex-shrink-1 m-2">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className="row m-0">
        {filteredDiseases.map((item) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                togglePopup();
                setpopdata(
                  item.name,
                  item.symptoms,
                  item.signs,
                  item.prevention,
                  item.medications
                );
              }}
              className="col-6 my-2"
            >
              <Cards iN={item.name} iD={item.description} iC={item.category} />
            </div>
          );
        })}
      </div>
      {isPopupOpen ? (
        <div onClick={togglePopup} className="overlay">
          <div className="popup">
            <div className="cont">
              <h1 className="text-center font-monospace">{name}</h1>
              <hr />
              <div className="border rounded-2 m-3">
                <h4 className="bg-info-subtle">Symptom</h4>
                <div className="symptom">{symptom}</div>
              </div>
              <div className="border rounded-2 m-3">
                <h4 className="bg-info-subtle">Signs</h4>
                <div className="sign">{sign}</div>
              </div>
              <div className="border rounded-2 m-3">
                <h4 className="bg-info-subtle">Prevention</h4>
                <div className="preventions">{precautions}</div>
              </div>
              <div className="border rounded-2 m-3">
                <h4 className="bg-info-subtle">Medications</h4>
                <div className="medications">{medications}</div>
              </div>
            </div>
            <div className="text-end">
              <button
                style={{ marginTop: "2rem", backgroundColor: "#73e6ff" }}
                onClick={togglePopup}
                className="border rounded-2 p-2 m-3"
              >
                <b>Close Popup</b>
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
}
