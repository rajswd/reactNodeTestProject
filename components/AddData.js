
import * as React from "react";
import {
  FormBuilder,
  FieldControl,
  FieldGroup
} from "react-reactive-form";
import Values from "./Values.js";
import {
  TextInput,
  Checkbox,
  GenderRadio,
  SelectBox,
  TextArea
} from "./lib";
import styles from "../commonStyle.js";
import { createData } from "../service/service.js";

class AddDataComponent extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {status: false};
  }


  myForm = FormBuilder.group({
    first_name: "",
    last_name: "",
    gender: "",
    nationality: "",
    terms: false,
    notes: ""
  });
  handleSubmit(e) {
    e.preventDefault();
    createData(this.myForm.value)
          .then(
            (result) => {
              let type="";
              if(result.status === 200 &&result.data.status === "success"){
                let msg = result.data.message;
                type = "Success : ";
                this.setState({status:true, msg});
              }
              else{
                type = "Success : ";
              }
              
            },
            (error) => {
              console.log("--ERROR---",error);
            }
          );

  }
  handleReset() {
    this.myForm.reset();
    this.setState({status:false});
  }
  render() {
    return (
      <div style={styles.main}>
        {
          this.state.status ? 
            <div>
              <button
                  className="right"
                  type="button"
                  style={styles.button}
                  onClick={() => this.handleReset()}
                >
                  + Add Data
                </button>
                <Values value={this.myForm.value} text={this.state.msg}/> 
            </div>:
            <FieldGroup
          control={this.myForm}
          render={({ pristine, value }) => (
            <form onSubmit={() => this.handleSubmit}>
              <h2>Add Data</h2>
              <FieldControl
                name="first_name"
                render={TextInput}
                meta={{
                  label: "First Name",
                  placeholder: "Enter first name"
                }}
              />

              <FieldControl
                name="last_name"
                meta={{
                  label: "Last Name",
                  placeholder: "Enter last name"
                }}
              />
              <FieldControl name="nationality" render={SelectBox} />
              <FieldControl name="gender" render={GenderRadio} />
              <FieldControl name="notes" render={TextArea} />
              <FieldControl name="terms" render={Checkbox} />

              <div>
                <button
                  disabled={pristine}
                  style={styles.button}
                  onClick={e => this.handleSubmit(e)}
                >
                  Submit
                </button>
                <button
                  type="button"
                  style={styles.button}
                  onClick={() => this.handleReset()}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />

        }
        
      </div>
    );
  }
}


export default AddDataComponent;
