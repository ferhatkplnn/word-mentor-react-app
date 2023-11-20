import React from "react";
import {
  Card,
  Heading,
  Flex,
  FormControl,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";

function WordCardInput({
  handleSubmit,
  header = "",
  wordText = "",
  meaningText = "",
  type = "add",
}) {
  return (
    <div>
      <Card mx="auto" maxW="90%" p="5">
        <Heading textAlign="center" fontSize="xl" mb="2">
          {header}
        </Heading>
        <form onSubmit={handleSubmit}>
          <Flex>
            <FormControl mb="2">
              <Input type="text" name="word" required />
              <FormHelperText>{wordText}</FormHelperText>
            </FormControl>
            <FormControl>
              <Input type="text" name="meaning" required />
              <FormHelperText>{meaningText}</FormHelperText>
            </FormControl>

            <Button type="submit">
              {type === "add" ? (
                <AddIcon boxSize="5" />
              ) : (
                <EditIcon boxSize="5" />
              )}
            </Button>
          </Flex>
        </form>
      </Card>
    </div>
  );
}

export default WordCardInput;
