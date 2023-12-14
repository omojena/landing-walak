import { Box } from "@mui/material";

function WalakAppImg() {
  return (
    <Box
      component="img"
      sx={ { height: 500, width: 400 } }
      alt="The house from the offer."
      src={ `../public/walak-app.png` }
    />
  );
}

export default WalakAppImg;
