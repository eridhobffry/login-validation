import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import {
  Button, FormGroup, Label, Input, Form
} from "reactstrap"

// core components
import GridContainer from "../../components/building_blocks/Grid/GridContainer.jsx";
import GridItem from "../../components/building_blocks/Grid/GridItem.jsx";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value statements
      email: "",
      password: "",
      // error statements
      hasErrorOnEmail: true,
      hasErrorOnPassword: true,
      errors: {
        checked: "",
        checkedNL: "",
        chekedAGB: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    };
    // this.handleToggle = this.handleToggle.bind(this);

    // text data binding
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    // this.handleChange = this.handleChange.bind(this);
  }

  contactSubmit(e){
    e.preventDefault();
    var x = this.state.countForm
    if(this.handleValidation()){
      console.info('Valid Form' + x)
      return true
    }else{
      console.error('Invalid Form' + x);
      return true
    }
  }

  handleValidation(){
    let formIsValid = true;
    if (
      this.state.hasErrorOnEmail  &&
      this.state.hasErrorOnPassword )
       {
        return formIsValid;
        } else {
          formIsValid = false
          return formIsValid
        }
  }

  handleClick(e) {

    // check error data Details
    this.setState({ hasErrorOnEmail: false });
    this.setState({ hasErrorOnPassword: false });
    // check form all is good
    
    
    if (this.state.email !== "" &&
    this.state.email.length > 3 &&
    typeof this.state.email !== "undefined" &&
    this.state.email.match(validEmailRegex) &&
    this.state.email === "test@unsircle.com") {
      this.setState({ hasErrorOnEmail: true });
      
    }

    if (this.state.password !== "" &&
    this.state.password.length > 7 &&
    this.state.password === "test"
    ) {
      this.setState({ hasErrorOnPassword: true });
      
    }

  }


  handleChangeEmail(event) {
    this.setState({ email: event.target.value });

    this.setState({ hasErrorOnEmail: true });
    if (!validEmailRegex.test(this.state.email) || this.state.email.length < 4) {
      this.setState({ hasErrorOnEmail: false });
    }

  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });

    this.setState({ hasErrorOnPassword: true });
    if (this.state.password.length < 7) {
      this.setState({ hasErrorOnPassword: false });
    }

  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form');
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.title = `Unsircle Test Login`;
  }

  render() {

    const { classes, ...rest } = this.props;

    return (
      <div>
        
        <div>
          <div >
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div className="shell section-110">
                  <h1>Unsircle Login</h1>
                  <div className="section-50">
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={8} md={8}>
                        <Form
                        onSubmit={this.contactSubmit.bind(this)}
                        noValidate
                        >
                           <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="email" placeholder="" onChange={(e) => this.handleChangeEmail()}/>
        {this.state.hasErrorOnEmail === false ? <span className="text-danger">
                            <span>
                            Email doesn't match
                            </span>
                          </span> : ""}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="password" placeholder="" onChange={(e) => this.handleChangePassword()}/>
        {this.state.hasErrorOnPassword === false ? <span className="text-danger">
                            <span>
                            Password doesn't match
                            </span>
                          </span> : ""}
      </FormGroup>
                          <div className="section-top-20">
                          <div className="text.center">
                            <Button round onClick={() => this.handleClick()} type="submit">
                              Login
                            </Button>
                          </div>
                          </div>
                        </Form>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

export default LoginPage;