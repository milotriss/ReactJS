import React, { useEffect, useState } from 'react';

import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout/defaultLayout';

import Appointment from './components/appointment/appointment';
import { Bookings } from './types/interface';
import Booking from './components/booking/booking';
import ModalComponent from './components/modal/modal';



function App() {
  const [book, setBook] = useState<Bookings[]>([])
  const [modal,setModal] = useState<any>()
  console.log(modal);
  
  const location = useLocation()
  const navigate = useNavigate()
  const getBook = (data:Bookings[]):void => {
    setBook(data);
  }
  const getModal = (data:any):void => {
    setModal(data);
  }
  const lastBooking = () => {
    navigate("/appointments" , {state: "done"})
  }
  useEffect(() => {
    if (location.state === "done") {
      setModal(modal.success({title: "Success", content:"This booking has been successfully"}));

    }
  }, [location.state]);
  return (
    <div className="App">
      <ModalComponent getModal={getModal}/>
      <Routes>
        <Route path='/' element={<DefaultLayout son={<h1>This is Home ahihi</h1>}/>}/>
        <Route path='/booking' element={<DefaultLayout son={<Booking lastBooking={lastBooking} getBook={getBook}/>}/>}/>
        <Route path='/appointments' element={<DefaultLayout son={<Appointment book={book}/>}/>}/>
        <Route path='/*' element={<DefaultLayout son={<h1>Not Found hihohe!!!</h1>}/>}/>
      </Routes>
    </div>
  );
}

export default App;
