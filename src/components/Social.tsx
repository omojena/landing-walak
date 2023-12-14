import { Box } from "@mui/material";
import IconWhatsapp from "./Whatsapp";
import IconTelegram from "./Telegram";

function Social() {
  return (
    <Box ml="15px" display="flex">
      <IconWhatsapp />
      <IconTelegram style={{ marginLeft: '10px' }} />
    </Box>
  );
}

export default Social;