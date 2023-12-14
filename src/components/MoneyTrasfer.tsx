import { Box } from "@mui/material";
import MoneyTrasnferImg from '../../public/money-transfer.png';

function MoneyTransfer() {
  return (
    <Box
      component="img"
      className="money-transfer"
      alt="The house from the offer."
      src={MoneyTrasnferImg}
    />
  );
}

export default MoneyTransfer;
