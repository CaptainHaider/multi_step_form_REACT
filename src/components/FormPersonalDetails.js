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
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    

    render() {
        const styles={
            button:{margin:15}
            
        }
        const{values,handleChange}=this.props;
        return (
            <MuiThemeProvider>
            <>
                <AppBar title="Enter Personal Details"/>
                
                <TextField hintText="Enter your Occupation"
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation  }
                />
                <br/>
                <TextField hintText="Enter your City"
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={values.city  }
                />
                <br/>
                <TextField hintText="Enter your Bio"
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio  }
                />
                <br/>
                <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                 <br/>
                <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
                
            </>
              <h1>FormUserDetail</h1>  
            
            </MuiThemeProvider>
        )
    }
}
