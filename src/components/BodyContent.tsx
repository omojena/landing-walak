import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import WalakAppImg from "./WalakAppImg";
import { useTheme } from "@mui/material/styles";
import IconWorld from "./icons-svg/IconWorld";
import PaidIcon from "./icons-svg/PaidIcon.tsx";
import WatchLaterIcon from "./icons-svg/WatchLaterIcon.tsx";
import SyncAltIcon from "./icons-svg/SyncAltIcon.tsx";
import SendMoneyIcon from "./icons-svg/SendMoneyIcon.tsx";
function BodyContent() {
  const theme = useTheme();

  return (
      <Box className="box-dark">
        <Container>
        <Grid>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h4"
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontSize: '38px',
                fontWeight: 500,
              }}
            >
              Aplicación Web Simple, Rápida y Segura
            </Typography>
          </Box>
          <Box mt="16px">
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 500,
              }}>
              “Al alcance de tu mano”
            </Typography>
          </Box>
        </Grid>

        <Grid sx={{ marginTop: { md: theme.spacing(20) } }} container spacing={2}>
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Box display="flex" justifyContent="center">
              <Typography
                sx={{
                  color: '#0EA7DA',
                  textAlign: 'center',
                  fontSize: '28px',
                  fontWeight: 500,
                }}>
                Envío de Remesas en MLC
              </Typography>
            </Box>
            <Box mt='15px' sx={{ padding: { xs: '0 25px 0 25px' } }} display="flex" justifyContent="center">
              <Card sx={{
                borderRadius: 5,
                background: 'rgba(255, 255, 255, 0.08)',
                display: 'flex',
                width: '400px',
                padding: '24px 32px',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
                <Box>
                  <CardContent className="text8">
                    <Box display="flex">
                      <PaidIcon/>
                      <Typography ml="8px">
                        Al 20%, por cada 120 USD reciben 100 MLC
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <WatchLaterIcon/>
                      <Typography ml="8px">
                        Entregas en menos de 24 hrs
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <SyncAltIcon/>
                      <Typography ml="8px">
                        Sin Intermediarios
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <SendMoneyIcon/>
                      <Typography ml="8px">
                        Envía cualquier cantidad
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <IconWorld/>
                      <Typography ml="8px">
                        Desde cualquier parte del mundo
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box mt="60px" display="flex" justifyContent="center">
              <WalakAppImg/>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 8, md: '-8rem' }}}>
          <Button variant="contained" className="btn btn2 btn-text">
            Me Interesa
          </Button>
        </Box>
        </Container>
      </Box>
  );
}

export default BodyContent;
