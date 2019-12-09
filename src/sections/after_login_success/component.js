import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import {
  Button, FormGroup, Label, Input, Form
} from "reactstrap"

// core components
import GridContainer from "../../components/building_blocks/Grid/GridContainer.jsx";
import GridItem from "../../components/building_blocks/Grid/GridItem.jsx";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value statements
      email: "test@unsircle.com",
      password: "test",
    };
  }

  

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.title = `Login Success`;
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
  <h1>Welcome -{this.state.email}- and this is your password -{this.state.password}-</h1>
                  
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