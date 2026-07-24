import { useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <Input text={text} setText={setText} />
      <Display text={text} />
    </div>
  );
}

export default App;