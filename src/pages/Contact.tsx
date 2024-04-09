import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Stack, Typography } from "@mui/material";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  // TODO: Implement
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Implementation remains the same
  };

  return (
    <Stack
      alignItems='center'
      padding={4}
      // TODO: hack for now
      // minHeight='100vh'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingBottom={2}>
        <Typography variant='h2' component='h1' gutterBottom>
          Contact
        </Typography>
        <Typography variant='h3'>Want to hire me?</Typography>
      </Box>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: "#36393f",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          color: "white",
          "& .MuiTextField-root": {
            marginBottom: "20px",
            "& input": {
              color: "#dcddde",
            },
            "& textarea": {
              color: "#dcddde",
            },
            "& label": {
              color: "#b9bbbe",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#202225",
              },
              "&:hover fieldset": {
                borderColor: "#7289da",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#7289da",
              },
            },
          },
          "& .MuiButton-root": {
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#5865f2",
            "&:hover": {
              backgroundColor: "#4752c4",
            },
          },
        }}>
        <TextField
          label='Name'
          variant='outlined'
          error={!!errors.name}
          helperText={errors.name ? "Name is required" : ""}
          {...register("name", { required: true })}
          fullWidth
        />
        <TextField
          label='Email'
          type='email'
          variant='outlined'
          error={!!errors.email}
          helperText={errors.email ? "Email is required" : ""}
          {...register("email", { required: true })}
          fullWidth
        />
        <TextField
          label='Message'
          multiline
          rows={4}
          variant='outlined'
          error={!!errors.message}
          helperText={errors.message ? "Message is required" : ""}
          {...register("message", { required: true })}
          fullWidth
        />
        <Button type='submit' variant='contained'>
          Send
        </Button>
      </Box>
    </Stack>
  );
};

export default ContactForm;

// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// // Define the form's data structure
// interface IFormInput {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         console.log("Email sent successfully");
//         reset(); // Resets the form fields after successful submission
//       } else {
//         throw new Error("Failed to send email");
//       }
//     } catch (error: any) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Name:
//         <input
//           type='text'
//           {...register("name", { required: true })} // Register input
//         />
//       </label>
//       {errors.name && <span>Name is required</span>}

//       <label>
//         Email:
//         <input type='email' {...register("email", { required: true })} />
//       </label>
//       {errors.email && <span>Email is required</span>}

//       <label>
//         Message:
//         <textarea {...register("message", { required: true })} />
//       </label>
//       {errors.message && <span>Message is required</span>}

//       <button type='submit'>Send</button>
//     </form>
//   );
// };

// export default ContactForm;
