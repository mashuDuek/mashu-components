import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StarRating from './star_rating';

const Review = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
`;

const UserAndStarWrap = styled.section`
    display: flex; 
    width: 100%;
    justify-content: space-around;
    align-items: flex-end;
`;

const Username = styled.span`
    font-size: large;
    font-family: sans-serif;
`;

const Text = styled.p`
    font-family: sans-serif;
    font-size: large;
`;

const ReviewItem = (props) => (
    <Review>
        <UserAndStarWrap>
            <Username>{props.username} said:</Username>
            <StarRating rating={props.rating}></StarRating>
        </UserAndStarWrap>
        <Text>{props.body}</Text>
    </Review>
);

ReviewItem.propTypes = {
    rating: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default ReviewItem;