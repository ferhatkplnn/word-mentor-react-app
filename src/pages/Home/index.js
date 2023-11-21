import React from "react";
import { Grid } from "@chakra-ui/react";
import LinkCard from "../../components/LinkCard/LinkCard";

function Home() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10} mr="20%" ml="20%">
      <LinkCard
        title="Add a new word"
        descreptionText="Add a new word to your word box or edit your words."
        to="/addword"
      />
      <LinkCard title="Beginner word box" to="/beginner-word-box" />
      <LinkCard title="Intermediate word box" to="/intermediate-word-box" />
      <LinkCard title="Advanced word box" />
      <LinkCard title="Random word box" />
      <LinkCard title="Hard word box" />
    </Grid>
  );
}

export default Home;
