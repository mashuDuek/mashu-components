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
    align-items: center;
    
    button {
        align-self: center;
        margin-top: 10px;
    }

    textarea {
        margin-bottom: 15px;
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
        this.props.onSubmit({ 
            review: this.state.review.trim(), 
            rating: this.state.rating 
        });
    }

    handleChange = (field) => (e) => {
        const { target: t } = e;
        const v = t.outerHTML.includes('<i ') ? t.title : t.value; 
        this.setState({ [field]: v });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.props.fields.map((field, idx) => (this.field(field,idx)))}
                <StarRating 
                    clickHandler={this.handleChange('rating').bind(this)} 
                    rating={this.state.rating}>
                </StarRating>
                <Button text={this.props.buttonText}></Button>
            </Form>
        )
    }
}


ReviewForm.propTpes = {
    buttonText: PropTypes.string.isRequired,
    fields: PropTypes.array,
    onSubmit: PropTypes.func
};

export default ReviewForm;