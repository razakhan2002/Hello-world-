import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      <h1>MY RESUM</h1>
      <b>MUHAMMAD RAZA KHAN </b>
      <p>
        <b>Father Name: Muhammad Shamshad Ahmed </b>
      </p>
      <p>
        <b>Date of birth: 25 05 2002</b>{" "}
      </p>
      <p>
        <b>Contact No: 03172512630</b>
      </p>
      <p>
        <b>Email: rk6783938@gmail.com</b>
      </p>
      <p>
        <b>CNIC NO: 4210154579877</b>
      </p>
      <p>
        <b>Gender: Male</b>
      </p>
      <p>
        <b>Religion: ISLAM</b>
      </p>
      <p>
        <b>Nationality: Pakistan</b>
      </p>
      <p>
        <b>ADDRESS: House No 73/5 Sec 5/D New Karachi.Karachi</b>
      </p>
      <h1>
        <hr />
        EDUCATION
      </h1>
      <p>
        <b>SCHOOL:</b>
      </p>
      <li> Al Mustafa Educational world</li>
      <p>
        <b>COLLEGE: </b>
      </p>
      <li>Govt Degree Boys college Sec 5/L</li>
      <h1>
        <hr />
        OBJECTIVE
      </h1>
      <p>
        <b>
          To make use of my interpersnal achieve goal of a company the focuses
          an satisfcation and custmer exprience{" "}
        </b>
      </p>
      <h1>
        <hr />
        INTREST
      </h1>
      <p>
        <b>
          <li>Photography</li>
        </b>
      </p>
      <p>
        <b>
          <li>Digital Markeeting</li>
        </b>
      </p>
      <p>
        <b>
          <li>Travel</li>
        </b>
      </p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
