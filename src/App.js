import Router from "./Components/Router";
import "./App.css";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
// import Form from "./assets/Image/Form.json";
import { BrowserRouter } from "react-router-dom";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
