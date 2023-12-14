import { Box, Container, Typography } from '@mui/material';
import GenericImage from "./GenericImg";
import { payments } from "../contants";

function PaymentOptions() {
  return (
    <Box sx={{ marginTop: { xs: 12, md: 20 } }} >
      <Container sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
      }}>
     <Box >
       <Typography
         sx={{ color: '#0C1C33', fontSize: 28, fontStyle: 'normal', fontWeight: 500 }}
         variant="h4">Se Aceptan Pagos en:</Typography>
     </Box>
        <Box
          maxWidth="740px"
          mt="30px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {payments.map((payment) => (
            <Box
              key={payment.title}
            >
              <GenericImage
                height={payment.height}
                width={payment.width}
                src={payment.src}
                alt={payment.label}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default PaymentOptions;