import React, { Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const FormConfirmDetails = ({
  nextStep,
  prevStep,
  values: { firstName, lastName, email, occupation, city, bio }
}) => {
  const continueStep = e => {
    e.preventDefault();

    //process form in backend

    nextStep();
  };

  const backStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Confirm Your Details" />
        <List>
          <ListItem primaryText="FirstName" secondaryText={firstName} />
          <ListItem primaryText="LastName" secondaryText={lastName} />
          <ListItem primaryText="email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
        <br />
        <RaisedButton
          label="Confirm & Continue"
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
export default FormConfirmDetails;
