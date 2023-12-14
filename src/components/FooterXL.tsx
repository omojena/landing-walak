import { Box, Container, Typography } from "@mui/material";
import Social from "./Social";
import FooterSvg from '../../public/footer.svg';
import FooterImg from '../../public/fotter2.png';
const FooterXL = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
         mt="100px" display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          background: { xs: `url(${FooterImg}), lightgray 50% / cover no-repeat` },
          backgroundSize: { xs: 'cover' },
          display: 'flex',
          width: { xs : '50%'},
          height: { xs: '260px'},
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          flexShrink: 0,
        }}
        >
        <Container>
          <Box display="flex" justifyContent="flex-end" alignItems="center">
            <Box display="flex" alignItems="flex-end" flexDirection="column">
              <Typography className="text6">
                Crea tu cuenta AHORA
              </Typography>
              <Typography className="text7">
                contáctanos por
              </Typography>
            </Box>
            <Social />
          </Box>
        </Container>

      </Box>
      <Box
        sx={{
          background: { xs: `url(${FooterImg}), lightgray 50% / cover no-repeat` },
          backgroundSize: { xs: 'cover' },
          display: 'flex',
          width: { xs : '50%'},
          height: { xs: '260px'},
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          flexShrink: 0,
        }}
      >
        <Box display="flex" justifyContent="flex-start"
          component="img"
        src={FooterSvg}
        ></Box>
      </Box>
    </Box>
  );
}
export default FooterXL;