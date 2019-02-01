import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '../forms/field';
import Button from '../forms/button';
import Rating from './rating';

const Form = styled.form``;

const fields = (fields) => (
    fields.map(field => <Field field={field}></Field>)
); 

class ReviewForm extends React.Component {
    state = {};

    field = (field) => (
        <Field 
            field={field} 
            onChange={this.handleChange(field.label).bind(this)}
        >
        </Field>
    );

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    handleChange = (field) => {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleRatingClick = (e) => {
        this.setState({ rating: e.target.value });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.props.fields.map((field, idx) => (this.field(field,idx)))}
                <Rating 
                    clickHandler={this.handleRatingClick} 
                    rating={this.state.rating}
                ></Rating>
                <Button text='submit'></Button>
            </Form>
        )
    }
}

export default ReviewForm;