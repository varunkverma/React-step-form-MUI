import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = e => {
    e.preventDefault();
    nextStep();
  };

  const backStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter your occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter your city"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter your bio"
          floatingLabelText="bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueStep}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={backStep}
        />
      </Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};
export default FormPersonalDetails;
