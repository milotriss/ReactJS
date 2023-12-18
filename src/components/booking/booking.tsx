import React, { useState } from "react";
import "./booking.css";
import CalendarsComponent from "../calendars/calendar";
import Dentist from "../dentist/dentist";
import Pharmacy from "../pharmacies/pharmacy";
import { Bookings, Dentists } from "../../types/interface";
import { dentist, dateNow } from "../../data/data";
import ModalComponent from "../modal/modal";

interface Props {
  getBook: Function;
  lastBooking: Function;
}

const Booking = (props: Props): JSX.Element => {
  const [taps, setTaps] = useState<string>("Date");
  const [dateValue, setDateValue] = useState<string>("");
  const [booking, setBooking] = useState<Bookings[]>([]);
  const [doctor, setDoctor] = useState<Dentists[]>([]);
  const [needDoctor, setNeedDoctor] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [modal, setModal] = useState<any>();

  const getModal = (data: any): void => {
    setModal(data);
  };
  const getDateValue = (dateValue: string): void => {
    setDateValue(dateValue);
  };
  let dateClick = new Date(dateValue).getTime();

  const handleNewBooking = () => {
    if (taps === "Date") {
      if (booking.length === 0) {
        let result = [...booking];
        result.push({
          id: 1,
          date: dateValue,
          doctor: "",
          location: "",
          status: true,
        });
        setBooking(result);
        setDoctor(dentist);
      } else {
        let result = [...booking];
        let needBooking: any = booking.find(
          (item: Bookings) => item.date === dateValue
        );
        if (!needBooking) {
          result.push({
            id: 1,
            date: dateValue,
            doctor: "",
            location: "",
            status: true,
          });
          setBooking(result);
          setDoctor(dentist);
        } else {
          result.push({
            id: booking[booking.length - 1].id + 1,
            date: dateValue,
            doctor: "",
            location: "",
            status: true,
          });
          setBooking(result);
          let doctors: Dentists[] = dentist.filter(
            (item: Dentists) => item.name !== needBooking.doctor
          );
          setDoctor(doctors);
        }
      }
      if (dateNow <= dateClick) {
        setTaps("Dentist");
        setModal(modal.success({ "title": "Selected date is Successful", "content": "Please select doctor"}));
      } else {
        setBooking([]);
        setModal(modal.warning({ "title": "Warning", "content":"The date clicked is older" }));
      }
    }
    if (taps === "Dentist") {
      let result = [...booking];
      let needBooking: any = result.find(
        (item: Bookings) => item.date === dateValue
      );
      needBooking.doctor = needDoctor;
      if (needBooking.doctor === "") {
        setModal(modal.warning({ "title": "Warning", "content": "Please select" }));
      } else {
        setBooking(result);
        setModal(
          modal.success({
            title: "Selected doctor is Successful",
            content: "Please select Pharmacy",
          })
        );
        setTaps("Pharmacy");
      }
    }
    if (taps === "Pharmacy") {
      let result = [...booking];
      let needBooking: any = result.find(
        (item: Bookings) => item.date === dateValue
      );
      needBooking.location = location;
      if (needBooking.location === "") {
        setModal(modal.warning({ "title": "Warning", "content": "Please select" }));
      } else {
        setBooking(result);
        props.lastBooking();
      }
    }
  };
  const addDoctor = (name: string) => {
    setNeedDoctor(name);
  };

  const addLocation = (address: string) => {
    setLocation(address);
  };

  props.getBook(booking);
  return (
    <section className="booking">
      <header className="bookingTaps">
        <ul className="listTaps">
          <li className={taps === "Date" ? "listTap active" : "listTap"}>
            Date
          </li>
          <li className={taps === "Dentist" ? "listTap active" : "listTap"}>
            Dentist
          </li>
          <li className={taps === "Pharmacy" ? "listTap active" : "listTap"}>
            Pharmacy
          </li>
        </ul>
      </header>
      <div className="bookingContent">
        {taps === "Date" ? (
          <CalendarsComponent getDateValue={getDateValue} />
        ) : null}
        {taps === "Dentist" ? (
          <Dentist doctors={doctor} booking={booking} addDoctor={addDoctor} />
        ) : null}
        {taps === "Pharmacy" ? <Pharmacy addLocation={addLocation} /> : null}
      </div>
      <button onClick={() => handleNewBooking()} className="btnBooking">
        Booking
      </button>
      <ModalComponent getModal={getModal} />
    </section>
  );
};

export default Booking;
