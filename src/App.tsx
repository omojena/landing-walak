import './App.css'
import Header from "./components/HeaderComponent";
import Banner from "./components/Banner";
import BodyContent from "./components/BodyContent";
import PaymentOptions from "./components/Payments";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import FooterXL from "./components/FooterXL";

function App() {

  return (
    <>
      <Box className="body">
        <Header></Header>
        <Banner></Banner>
        <BodyContent></BodyContent>
        <PaymentOptions></PaymentOptions>
        <Footer></Footer>
        <FooterXL></FooterXL>
      </Box>

    </>

  )
}

export default App
