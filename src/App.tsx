import "./App.css";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <Flex>
      <Text>{text}</Text>
      <Button onClick={() => setText("I did it")}>click</Button>
    </Flex>
  );
}

export default App;
