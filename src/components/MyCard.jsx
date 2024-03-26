// MyCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import Tags from "./Tags";

const MyCard = ({ cardImg, cardTitle, cardText, badgeColor, badgeText }) => {
    return (
        <Card className='cardStyle' style={{ width: '20rem' }}>
            <Card.Img className='imgStyle' variant="top" src={cardImg} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
                <Tags badgeColor={badgeColor} badgeText={badgeText} />
            </Card.Body>
        </Card>
    )
}

export default MyCard;



