import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;
