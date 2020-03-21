import React, { useState } from "react";
import FormUserDetails from "../components/form-user-detials";
import FormPersonalDetails from "./form-personal-details";
import FormConfirmDetails from "./form-confirm-details";
import Success from "./success";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  //   const [firstName, setStefirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [occupation, setOccupation] = useState("");
  //   const [city, setCity] = useState("");
  //   const [bio, setBio] = useState("");

  // Proceed to next step
  const nextStep = () => setStep(step + 1);

  // Go back to previous step
  const prevStep = () => setStep(step - 1);

  // handle fields change
  const handleChange = input => e => {
    setDetails({ ...details, [input]: e.target.value });
  };

  const { firstName, lastName, email, occupation, city, bio } = details;
  const values = { firstName, lastName, email, occupation, city, bio };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <FormConfirmDetails
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 4:
      return <Success />;

    default:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
  }
};

export default UserForm;
