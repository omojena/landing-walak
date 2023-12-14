import { Box, Grid, Typography } from "@mui/material";
import Social from "./Social";
// import FooterImg from '../../public/footer.png';
import FooterSVG from '../../public/footer.svg';
const Footer = () => {
  return (
    <Box
      sx={{ display: { xs: 'flex' , sm: 'none', md: 'none' } }}
    >
      <Grid
        mt="100px"
        container
        sx={{
          background: { xs: `url(${FooterSVG}), lightgray 50% / cover no-repeat` },
          backgroundSize: { xs: 'cover' },
          display: 'flex',
          width: { xs : '100%'},
          height: { xs: '260px'},
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          flexShrink: 0,
        }}
      >
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
            <Typography className="text6">
              Crea tu cuenta AHORA
            </Typography>
            <Typography className="text7">
              contáctanos por
            </Typography>
            <Social />
          </Box>
      </Grid>
    </Box>
  );
}
export default Footer;