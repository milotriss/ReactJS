import React from "react";
import "./dentist.css";
import { Dentists, Bookings } from "../../types/interface";

interface Props {
  doctors:Dentists[]
  booking:Bookings[]
  addDoctor:Function
}
const Dentist = (props:Props): JSX.Element => {
  return (
    <section className="dentist">
      <h1 className="dentistTitle">Dentist</h1>
      <div  className="dentistGroup">
        {props.doctors.map((d: Dentists) => {
          return (
            <figure 
            onClick={() => props.addDoctor(d.name)}
            key={d.id} 
            className="dentistCard">
              <img src="../../../asset/img/Rectangle 5.png" alt="" />
              <figcaption className="dentistInfo">
                <p className="dentistName">{d.name}</p>
                <p className="dentistContent">{d.content}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Dentist;
