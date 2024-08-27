import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
// import Test from "./components/Test";
import BookingScreen from "./Screens/BookingScreen";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import { Toaster } from 'react-hot-toast';
import Error from "./components/Error";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:roomid/:checkin/:checkout" element={<BookingScreen/>}  />
          <Route path="/about" element={<About/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/register" element={<Register/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </>
  );
}

export default App;
