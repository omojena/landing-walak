import { Box, Link } from "@mui/material";
import WalakAppIMG from '../../public/walak-app.png';


function WalakAppImg() {
  return (
    <Link href="https://wa.me/+13057201782" target="_blank" rel="noopener noreferrer">
      <Box
        component="img"
        sx={{ height: 500, width: 400 }}
        alt="The house from the offer."
        src={WalakAppIMG}
      />
    </Link>
  );
}

export default WalakAppImg;
