import React from 'react';
import FormCreator from './form_creator';
import FormComp from '../../../../src/packages/forms/regular_form';

class NewForm extends React.Component {
    state = { form: null };

    createForm = (form) => () => {
        this.setState({ form }, () => {
            window.scrollTo(0, 1);
        });
    };

    renderForm = () => {
        if (!this.state.form) return null;
        return (
            <FormComp
                fields={this.state.form.fields}
                buttonText={this.state.form.buttonText}>
            </FormComp>
        );
    };

    render() {
        return (
            <div className="form-creator-and-form">
                <FormCreator createForm={this.createForm.bind(this)}></FormCreator>
                {this.renderForm()}
            </div>
        )
    }
}

export default NewForm;