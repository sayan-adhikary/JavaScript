import React, { useEffect, useState } from "react";

function App() {
  const [name, steName] = useState("");
  useEffect(async () => {}, [name]);

  return (
    <>
      <div>profile</div>
      <input type="text" />
      <div>{name}</div>
    </>
  );
}

export default App;
