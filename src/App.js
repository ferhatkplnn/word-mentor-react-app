import Navbar from "./components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import RouterElement from "./router";

function App() {
  return (
    <>
      <Navbar />
      <Box p="10">
        <RouterElement />
      </Box>
    </>
  );
}

export default App;
