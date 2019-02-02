import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '../forms/field';
import Button from '../forms/button';
import StarRating from './star_rating';

const Form = styled.form`
    display: flex; 
    flex-direction: column;
    padding: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
`;

class ReviewForm extends React.Component {
    state = {};

    field = (field, idx) => (
        <Field 
            key={idx}
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
                <StarRating 
                    clickHandler={this.handleRatingClick} 
                    rating={this.state.rating}>
                </StarRating>
                {this.props.fields.map((field, idx) => (this.field(field,idx)))}
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}

export default ReviewForm;