import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';


export default class FormUserDetail extends Component {

    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    

    render() {
        const styles={
            button:{margin:15}
            
        }
        const{values,handleChange}=this.props;
        return (
            <MuiThemeProvider>
            <>
                <AppBar title="Enter User Details"/>
                
                <TextField hintText="Enter your First Name"
                floatingLabelText="First Name"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName  }
                />
                <br/>
                <TextField hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName  }
                />
                <br/>
                <TextField hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={handleChange('email')}
                defaultValue={values.email  }
                />
                <br/>
                <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                
            </>
              <h1>FormUserDetail</h1>  
            
            </MuiThemeProvider>
        )
    }
}
