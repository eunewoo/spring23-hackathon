import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Lottie from "react-lottie";
import animationData from "../login3D.json";
const LoginPage = () => {
  // const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        margin={0}
        m="0 auto"
        borderRadius="1.5rem"
        height="100vh"
      >
        <Box width="100%" /* p="1rem 6%" */ textAlign="center"></Box>
        <div
          style={{ width: "300px", alignContent: "center", margin: "0 auto" }}
        >
          <Lottie options={defaultOptions} />
        </div>

        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          A new way to improve your learning creativity!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
