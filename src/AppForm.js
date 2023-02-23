import React, { Component } from "react";
import "./AppForm.css";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class AppForm extends Component {
    state = {
        name: '',
        birthDate: '',
        contact: '',
        email: '',
        about: '',
        error: {
            nameError: '',
            birthDateError: '',
            contactError: '',
            emailError: '',
            aboutError: ''

        },
        formValid: false,
        nameErrorField: false,
        birthDateErrorField: false,
        contactErrorField: false,
        emailErrorField: false,
        aboutErrorField: false

    }
    handleChange = (e) => {
        // console.log(e);
        // console.log(e.target.value);
        // console.log(e.target.id);

        // this is referring to AddInfo
        if (e.target.id == "name") {
            this.validateName(e.target.value);
        }
        if (e.target.id == "contact") {
            this.validateContact(e.target.value);
        }
        if (e.target.id == "birthDate") {
            this.validateBirthDate(e.target.value);
        }
        if (e.target.id == "email") {
            this.validateEmail(e.target.value);
        }
        if (e.target.id == "about") {
            this.validateAbout(e.target.value);
        }
    };

    validateName = (name) => {
        let formValid = this.state.formValid;
        let nameError = this.state.error.nameError;
        let nameErrorField = this.state.nameErrorField;

        let pattern = /^[a-zA-Z ]*$/;

        if (name.trim() === "") {
            formValid = false;
            nameError = "This is required";
            nameErrorField = true;
        } else if (name.trim().length < 3) {
            formValid = false;
            nameError = "Minimum of 3 characters";
            nameErrorField = true;
        } else if (!pattern.test(name)) {
            formValid = false;
            nameError = "Invalid Name";
            nameErrorField = true;
        }
        else {
            formValid = true;
            nameError = "";
            nameErrorField = false;
        }

        this.setState({
            name,
            formValid,
            error: { ...this.state.error, nameError },
            nameErrorField,
        });

        return formValid;
    };

    validateContact = (contact) => {
        let formValid = this.state.formValid;
        let contactError = this.state.error.contactError;
        let contactErrorField = this.state.contactErrorField;

        const pattern = /^[0-9]{10}$/;

        if (!pattern.test(contact)) {
            formValid = false;
            contactError = "Invalid Contact Number";
            contactErrorField = true;
        } else {
            formValid = true;
            contactError = "";
            contactErrorField = false;
        }

        this.setState({
            contact,
            formValid,
            error: { ...this.state.error, contactError },
            contactErrorField,
        });

        return formValid;
    };

    validateEmail = (email) => {
        let formValid = this.state.formValid;
        let emailError = this.state.error.emailError;
        let emailErrorField = this.state.emailErrorField;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!pattern.test(email)) {
            emailError = "Invalid Email Address";
            formValid = false;
            emailErrorField = true;
        } else {
            emailError = "";
            formValid = true;
            emailErrorField = false;
        }

        this.setState({
            email,
            formValid,
            error: { ...this.state.error, emailError },
            emailErrorField,
        });

        return formValid;
    };

    validateBirthDate = (birthDate) => {
        //console.log(birthDate);
        let formValid = this.state.formValid;
        let birthDateError = this.state.error.birthDateError;
        let birthDateErrorField = this.state.birthDateErrorField;

        let newDate = new Date();

        let birth = new Date(birthDate);

        let value = newDate >= birth;
        if (value == false) {
            birthDateError = "Invalid Birth Date";
            formValid = false;
            birthDateErrorField = true;
        } else {
            birthDateError = "";
            formValid = true;
            birthDateErrorField = false;
        }

        this.setState({
            birthDate,
            formValid,
            error: { ...this.state.error, birthDateError },
            birthDateErrorField,
        });

        return formValid;
    };

    validateAbout = (about) => {
        //console.log(about);
        this.setState({
            about,
        });

        //return formValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.validateName(this.state.name) &&
            this.validateContact(this.state.contact) &&
            this.validateEmail(this.state.email)
        ) {
            alert("Form is submitted");
            this.props.addData(this.state);

            this.setState({
                name: "",
                contact: "",
                birthDate: "",
                email: "",
                about: "",
                formValid: false,
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container" style={{ width: '60%' }}>
                    <h2>PERSONAL DETAILS</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <label className="form-label"></label>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="name"
                                    label="Name"
                                    placeholder="Please Enter Name"
                                    sx={{ width: '100%' }}
                                    onChange={this.handleChange}
                                    helperText={this.state.error.nameError}
                                    error={this.state.nameErrorField}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label"></label>
                            <div className="form-group">
                                <Stack spacing={3}>
                                    <TextField
                                        id="birthDate"
                                        label="Birthdate"
                                        type="date"
                                        sx={{ width: '100%' }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        helperText={this.state.error.birthDateError}
                                        error={this.state.birthDateErrorField}
                                        onChange={this.handleChange}
                                    />
                                </Stack>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label"></label>
                            <div className="form-group">
                                <TextField
                                    required
                                    id="contact"
                                    label="Contact Number"
                                    placeholder="Please Enter Name"
                                    sx={{ width: '100%' }}
                                    onChange={this.handleChange}
                                    helperText={this.state.error.contactError}
                                    error={this.state.contactErrorField}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <TextField
                                required
                                id="email"
                                label="Email Address"
                                placeholder="Please Enter Name"
                                sx={{ width: '100%' }}
                                onChange={this.handleChange}
                                helperText={this.state.error.emailError}
                                error={this.state.emailErrorField}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-12">
                            <TextField
                                id="about"
                                label="Tell me about your self"
                                placeholder="Tell me about your self"
                                sx={{ width: '100%' }}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <br></br>
                    <Button type="submit" variant="outlined" sx={{ float: 'right', color: 'black', borderColor: 'black' }}>Submit</Button>
                </div>
            </form>
        );
    }
}

export default AppForm;