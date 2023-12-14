import { Typography, Box } from "@mui/material";
import Social from "./Social";

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
        src={`../public/walak.png`}
      />
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Typography className="text"> Contactar por </Typography>
        <Social/>
      </Box>
    </Box>
  );
};

export default Header;