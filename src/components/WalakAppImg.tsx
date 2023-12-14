import { Box } from "@mui/material";
import WalakAppIMG from '../../public/walak-app.png';

function WalakAppImg() {
  return (
    <Box
      component="img"
      sx={ { height: 500, width: 400 } }
      alt="The house from the offer."
      src={WalakAppIMG}
    />
  );
}

export default WalakAppImg;
