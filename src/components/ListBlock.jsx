import React from 'react';
import ListComponent from './ListComponent';
import styled from 'styled-components';

const Block = styled.section`
    flex: 1 1 47%;
    margin: 3px;
    border-radius: 25px;
    padding: 10px;
    justify-content: center;
    background-color: #D8E0F2;
    max-width: 47%;
`;

const StyledTitle  = styled.h2`
    margin:5px 0;
`;


const ListBlock = ({eventList, venueList}) => {
    return ( <>
        <Block>
        <StyledTitle>Events:</StyledTitle>
        <ListComponent listData = {eventList} />
        </Block>
        <Block>
        <StyledTitle>Venues:</StyledTitle>
        <ListComponent listData = {venueList} />
        </Block>
        </>
     );
}
 
export default ListBlock;