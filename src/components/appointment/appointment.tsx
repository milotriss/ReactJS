import React, { useState } from "react";
import "./appointment.css";
import { FaRegClock } from "react-icons/fa6";
import { Bookings } from "../../types/interface";

interface Props {
  book: Bookings[];
}

const Appointment = (props: Props): JSX.Element => {

  return (
    <section className="appointment">
      <header className="appointmentHeader">
        <ul>
          <li>Upcoming</li>
          <li>History</li>
        </ul>
      </header>
      <div className="appointmentGroup">
        <ul>
          {props.book.map((item: Bookings) => {
            return (
              <li key={item.id}>
                <div className="left">
                  <img src="../../../asset/img/Ellipse 1.png" alt="" />
                  <div className="leftInfo">
                    <h4>{item.doctor}</h4>
                    <p>{item.location}</p>
                    <div className="pharmacyList">
                      <FaRegClock className="iconPharmacyList" />
                      <span>Mon - Sat: 8am - 7pm {item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button>Cancel Appointment</button>
                  <button>Reschedule</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Appointment;
