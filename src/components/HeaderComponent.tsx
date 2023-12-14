import { Typography, Box } from "@mui/material";
import Social from "./Social";
import WalakImg from '../../public/walak.png';

const Header = () => {

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      mt="15px"
    >
      <Box
        component="img"
        sx={{
          height: 40,
          width: 174
        }}
        alt="The house from the offer."
        src={WalakImg}
      />
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Typography className="text"> Contactar por </Typography>
        <Social/>
      </Box>
    </Box>
  );
};

export default Header;