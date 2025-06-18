import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string({ message: "Invalid name" })
    .min(2, { message: "First name must contain at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string({ message: "Invalid message" }),
});

const initialInputs = {
  name: "",
  email: "",
  message: "",
};

export type ContactDialogOptions = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

// temp contact form dialog box
export const ContactDialog = ({ open, setOpen }: ContactDialogOptions) => {
  // STATE

  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialInputs);

  const [isLoading, setIsLoading] = useState(false);

  // METHODS

  /**
   * Generic on change handler for all input elements.
   *
   * Extracts component name to update appropriate state.
   */
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  /**
   * Validates all inputs for the contact form.
   *
   * @returns True if there are no validation errors, otherwise false.
   */
  const validateInputs = () => {
    // Reset the error state for all input fields
    setErrors(initialInputs);

    /*
      Each 'errors' property corrosponds to an input field.
      The value of each property is an array of error message strings.
      These messages are joined together as one string when updating the error state below.
    */
    const errors = ContactFormSchema.safeParse({
      name: inputs.name,
      email: inputs.email,
      message: inputs.message,
    }).error?.flatten().fieldErrors;

    // Cast as any because I don't want to figure out these typing issues
    const unsafeErrors: any = errors;

    // Updates the error message for each input field
    setErrors((current) => ({
      name: unsafeErrors?.name?.join(", ") || current.name,
      email: unsafeErrors?.email?.join(", ") || current.email,
      message: current.message,
    }));

    // Return true if no errors
    return !errors;
  };

  const onSubmit = async () => {
    const isInputsValid = validateInputs();
    if (!isInputsValid) return;

    setIsLoading(true);

    const json = {
      access_key: "65aa9c51-7e84-4417-b1db-01f061e99de9",
      ...inputs,
    };

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(json),
      });
    } catch (error) {
      alert("Error occurred. Message was not sent.");
      console.error(error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => setOpen(false)}
      slotProps={{
        paper: {
          variant: "outlined",
        },
      }}
    >
      <DialogTitle>Contact Us</DialogTitle>
      <DialogContent dividers>
        <Stack gap={2}>
          <FormControl>
            <FormLabel htmlFor="name" required>
              Name
            </FormLabel>
            <TextField
              error={!!errors.name}
              helperText={errors.name}
              value={inputs.name}
              onChange={onInputChange}
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              fullWidth
              autoFocus
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" required>
              Email
            </FormLabel>
            <TextField
              error={!!errors.email}
              helperText={errors.email}
              value={inputs.email}
              onChange={onInputChange}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message" required>
              Message
            </FormLabel>
            <TextField
              error={!!errors.message}
              helperText={errors.message}
              value={inputs.message}
              onChange={onInputChange}
              id="message"
              type="text"
              name="message"
              placeholder="Leave us a message..."
              required
              fullWidth
              variant="outlined"
              multiline
              rows={5}
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button
          loading={isLoading}
          variant="contained"
          onClick={() => onSubmit()}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
