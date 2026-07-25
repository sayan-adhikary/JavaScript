import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  // function change() {
  //   setTitle((prev) =>
  //     prev === title ? title : "Original Title",
  //   );
  // }

  return (
    <>
      <form>
        <input type="text" value={title} placeholder="sayan" onChange={(e)=>{setTitle(e.target.value)}}/>
      </form>
    </>
  );
}

export default App;
