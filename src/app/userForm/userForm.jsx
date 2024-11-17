import { useState } from "react";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "react-aria-components";
import { classes } from "../classes";

const UserForm = ({addUser}) => {
  let [submitted, setSubmitted] = useState(null);

  let onSubmit = (e) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("data is ", data);
    addUser(data);

    // Submit to your backend API...
    setSubmitted(data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <TextField name="name" isRequired>
                <Label className={classes.label}>Name</Label>
                <Input className={classes.input} />
                <FieldError />
              </TextField>
            </div>

            <div className="sm:col-span-3">
              <TextField name="email" isRequired>
                <Label className={classes.label}>Email</Label>
                <Input className={classes.input} />
                <FieldError />
              </TextField>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default UserForm;
