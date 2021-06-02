import {head, isEmpty} from 'lodash';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const StyledListItem = styled.li`
    padding: 5px 0;
`;

const Card = styled.div`
    border-radius: 25px;
    display:flex;
    flex-direction: column;
    padding: 15px;
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
`;

const StyledImage = styled.img`
    opacity: 80%;
`;

const InfoWrapper = styled.section`
    background-color: #6c87d9a8;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-top: -9px;
    z-index: 1;
    justify-content: space-between;
`;

const ExtraInfoWrapper = styled.section`
    flex-direction: column;
    display:flex;
`;

const NameSpan = styled.span`
    width: 70%;
`;

const ListComponent = (props) => {
    const {listData} = props;
    const history = useHistory();

    const cardClicked = (data) => {
        console.log('**',data);
        history.push({pathname: '/details', state: { detail: data }});
    };
    
    const StyledCard = (data) => {
        const {name, images, dates ={} , type, state= {},city={}} = data.data;
        const extraInfo = type === 'event' ? {line1: dates.start.localDate, line2: dates.start.localTime} : {line1:state.name, line2: city.name};
        const bgImage = head(images);
        return(
            <Card onClick={() => cardClicked(data.data)}>
                {bgImage && <StyledImage src={bgImage.url}  alt={name} />}
                <InfoWrapper>
                <NameSpan>{name}</NameSpan>
                <ExtraInfoWrapper>
                <span>{extraInfo.line1}</span>
                <span>{extraInfo.line2}</span>
                </ExtraInfoWrapper>
                </InfoWrapper>
            </Card>
        );    
    };

    return(
        <StyledList>
            {!isEmpty(listData) ? (listData.map((value) => (
                <StyledListItem key={value.id}>
                    <StyledCard data={value} />
                </StyledListItem>
            ))) : null}
        </StyledList>
);
}
 
export default ListComponent;