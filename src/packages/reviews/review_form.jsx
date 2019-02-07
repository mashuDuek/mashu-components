import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '../forms/field';
import Button from '../forms/button';
import StarRating from './star_rating';

const Form = styled.form`
    display: flex; 
    flex-direction: column;
    padding: 20px;

    button {
        display: flex; 
        align-self: flex-end;
        justify-content: center;
        width: 80px;
    }
`;

class ReviewForm extends React.Component {
    state = {};

    field = (field, idx) => (
        <Field 
            key={idx}
            field={field} 
            onChange={this.handleChange(field.label).bind(this)}>
        </Field>
    );

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange = (field) => (e) => {
        const { target: t } = e;
        const v = t.outerHTML.includes('<i ') ? t.title : t.value; 
        this.setState({ [field]: v });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <StarRating 
                    clickHandler={this.handleChange('rating').bind(this)} 
                    rating={this.state.rating}>
                </StarRating>
                {this.props.fields.map((field, idx) => (this.field(field,idx)))}
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}

export default ReviewForm;