import { Box } from '@mui/material';

function GenericImage(props) {
  const { height, width, src, alt } = props;

  return (
    <Box
      component="img"
      sx={{ height: height, width: width }}
      alt={alt}
      src={src}
    />
  );
}

export default GenericImage;