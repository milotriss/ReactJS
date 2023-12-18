import React from "react";
import "./pharmacy.css";
import { Pharmacies } from "../../types/interface";
import { pharmacy } from "../../data/data";
import { LuLayoutGrid } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegClock } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
interface Props{
  addLocation:Function
}
const Pharmacy = (props:Props): JSX.Element => {
  return (
    <section className="pharmacy">
      <div className="pharmacyAction">
        <LuLayoutGrid className="iconPharmacy" />
        <TfiMenuAlt className="iconPharmacy" />
      </div>
      <div className="pharmacyGroup">
        {pharmacy.map((p: Pharmacies) => {
          return (
            <figure 
            onClick={() => props.addLocation(p.address)}
            key={p.id}>
              <figcaption>
                <h3>{p.name}</h3>
                <div className="pharmacyLists">
                  <div className="pharmacyList">
                    <FaRegClock className="iconPharmacyList" />
                    <span>Mon - Sat: 8am - 7pm</span>
                  </div>
                  <div className="pharmacyList">
                    <FiPhoneCall className="iconPharmacyList" />
                    <span>123-456-7890</span>
                  </div>
                  <div className="pharmacyList">
                    <IoLocationOutline className="iconPharmacyList" />
                    <span>{p.address}</span>
                  </div>
                </div>
              </figcaption>
              <img src="../../../asset/img/Mapsicle Map.png" alt="" />
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Pharmacy;
