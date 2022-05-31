import Router from "./Components/Router";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import Form from "./assets/Image/Form.json";
import { BrowserRouter } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("onsub", e.text.length);
  };

  return (
    <div style={{ padding: "10em" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputProps={{ maxLength: 5 }}
          multiline
          maxRows={4}
          style={{ width: 600 }}
          variant="outlined"
          label="text"
          fullWidth
          autoComplete="text"
          autoFocus
          {...register("text", {
            required: "Requiredfields",
            maxLength: {
              value: 5,
              message: " maxchar",
            },
          })}
          error={!!errors?.text}
          helperText={errors?.text ? errors.text.message : null}
        />
        {Form &&
          Form.map((record) => {
            if (record.maxLength == undefined) {
              return (
                <TextField
                  variant="outlined"
                  label={record.filedtype}
                  fullWidth
                  autoComplete="email"
                  autoFocus
                  {...register(record.filedtype, {
                    required: record.required,

                    pattern: {
                      value: record.pattern[0].value,
                      message: record.pattern[0].message,
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              );
            } else {
              return (
                <TextField
                  variant="outlined"
                  label={record.fieldtype}
                  fullWidth
                  autoComplete="name"
                  autoFocus
                  {...register(record.fieldtype, {
                    required: record.required,
                    maxLength: {
                      value: 4,
                      message: "hii",
                    },
                    // pattern: {
                    //   value: record.pattern[0].value,
                    //   message: record.pattern[0].message,
                    // },
                  })}
                  error={!!errors?.name}
                  helperText={errors?.name ? errors.name.message : null}
                />
              );
            }
          })}
        <Button variant="contained" color="success" type="submit">
          Success
        </Button>
        <div>
          {/* <input
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            placeholder="Basic usage"
          /> */}
        </div>
      </form>

      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
