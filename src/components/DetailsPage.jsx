import React, {Component} from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { BiHeart } from 'react-icons/bi';
import {favoriteActions as actions} from '../redux/actions/favoriteActions';
import {take} from 'lodash';

import { withRouter } from 'react-router-dom';

const DetailsWrapper = styled.div`
    display:flex;
    background-color: #f2858538;
    width:80%;
    margin: 10px auto;
    flex-wrap:wrap;
    padding: 15px 10px;
    border-radius: 25px;
`;

const HeaderSection = styled.section`
    width:80%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background-color: #acc1ef;
    border-radius: 25px;
`;

const DetailsSection = styled.section`
    width: 80%;
    margin: 0 auto;
`;

const ImageSection = styled.section`
    display: flex;
`;

const FavIcon = styled(BiHeart)`
    color: ${({fav})=> fav ? 'red': 'white'};
    height: 40px;
    width: 40px;
    margin-bottom: -10px;
`;

const StyledImage = styled.img`
    width: 32%;
    margin: 5px;
`;

const Detail = styled.p`
    font-size:24px;
    margin-left: ${({info}) => info ? '20px': '0'}
`;

const StyledButton = styled.button`
    background-color: #F28585;
    color: white;
    border-radius: 4px;
    padding: 10px;
    height: 50%;
    margin: auto 0;
`;

class DetailsPage extends Component { 
    constructor(props){
        super(props);
        this.state={
            isFav: false
        }
    }

    toggleFav = () => {
        const { isFav } =this.state;
        const {markFavEvent, unmarkFavEvent, markFavVenue, unmarkFavVenue} = this.props;
        const {detail} = this.props.location.state;
        if(!isFav) {
            detail.type === 'event' ? markFavEvent(detail) : markFavVenue(detail);
        } else {
            detail.type === 'event' ? unmarkFavEvent(detail.id) : unmarkFavVenue(detail.id);
        }
        this.setState({isFav:!isFav});
    };

    gotoFavs = () => {
        const {history} = this.props;
        history.push('/favorites');
    };

    
    render() { 
        const{isFav} = this.state;
        const {detail} = this.props.location.state;
        console.log('**detail', detail);
        const imgArray = take(detail.images,3);
        return ( detail && <DetailsWrapper>
            <HeaderSection>
                <h2>{detail.name} <FavIcon fav={isFav} onClick={()=> this.toggleFav()} /></h2>
                <StyledButton onClick={()=> this.gotoFavs()}>Go to Favourites</StyledButton>
            </HeaderSection>
            <DetailsSection>
                <ImageSection>
                    {imgArray.map((img)=> (
                        <StyledImage key={img.url} src={img.url} />
                    ))}
                </ImageSection>
                {detail.type === 'event' ? 
                (<>
                {detail.date && <Detail>Date:{detail.dates.start.localDate}</Detail>}
                {detail.priceRanges && (
                    <>
                        <Detail>Price Range:</Detail>
                        {detail.priceRanges.map((prices)=>(
                            <Detail info key={prices.type}>Type:{prices.type} Minimum: {prices.min}{prices.currency} Maximum: {prices.max}{prices.currency}</Detail>
                        ))}
                    </>
                )}
                {(detail.info || detail.ticketLimit) &&(
                    <>
                        <Detail>Information:</Detail>
                        {detail.info && <Detail info> {detail.info}</Detail>}
                        {detail.ticketLimit.info && <Detail info> {detail.ticketLimit.info}</Detail>}
                    </>
                )}
                    </>
                ):(
                <>
                    {(detail.city && detail.state && detail.country && detail.postalCode) ? 
                        <Detail>Location:{detail.city.name}, {detail.state.name}, {detail.country.name}-{detail.postalCode}</Detail> :
                        <Detail> No location info available </Detail>}
                    {(detail.generalInfo || detail.parkingDetail) && <Detail>Information:</Detail>}
                    {detail.generalInfo && (<><Detail info>{detail.generalInfo.generalRule}</Detail>
                    <Detail info>{detail.generalInfo.childRule}</Detail></>)}
                    {detail.parkingDetail && <Detail info>{detail.parkingDetail}</Detail>}
                </>
                )}
            </DetailsSection>       
        </DetailsWrapper> );
    }
}

const mapDispatchToProps = dispatch => ({
    markFavEvent: (data) => dispatch(actions.markFavoriteEvent(data)),
    unmarkFavEvent: (data) => dispatch(actions.markNotFavoriteEvent(data)),
    markFavVenue: (data) => dispatch(actions.markFavoriteVenue(data)),
    unmarkFavVenue: (data) => dispatch(actions.markNotFavoriteVenue(data)),
});

 
export default connect(null, mapDispatchToProps,)(withRouter(DetailsPage));