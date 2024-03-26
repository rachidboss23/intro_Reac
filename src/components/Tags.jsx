import React from 'react';
import { Badge } from 'react-bootstrap';

const Tags = ({ badgeColor, badgeText }) => {
    return (
        <Badge bg={badgeColor}>{badgeText}</Badge>
    );
}

export default Tags;

