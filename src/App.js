import React from "react";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "800px",
        margin: "16px auto",
        backgroundColor: "#e0e3e7",        
      }}
    >
      <Tabs />
    </div>
  );
};

export default App;
