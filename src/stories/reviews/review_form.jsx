import React from 'react';
import ReviewForm from '../../packages/reviews/review_form';

const fields = [
    {
        type: 'text',
        tag: 'textarea',
        required: true,
        label: 'review',
        placeholder: 'write a review'
    }
]

const Form = () => (
    <ReviewForm
        fields={fields}
        buttonText="Submit Me"
        onSubmit={(data) => console.log(data)}
    >
    </ReviewForm>
)

export default Form;