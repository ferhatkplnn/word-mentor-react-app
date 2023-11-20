import LinkCard from "./components/LinkCard/LinkCard";
import Navbar from "./components/Navbar/Navbar";
import { Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Navbar />
      <Grid templateColumns="repeat(3, 1fr)" mt="14" gap={10} mr="20%" ml="20%">
        <LinkCard
          title="Add a new word"
          descreptionText="Add a new word to your word box or edit your words."
        />
        <LinkCard title="Beginner word box" />
        <LinkCard title="Intermediate word box" />
        <LinkCard title="Advanced word box" />
        <LinkCard title="Random word box" />
        <LinkCard title="Hard word box" />
      </Grid>
    </>
  );
}

export default App;
