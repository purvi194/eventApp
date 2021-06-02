import React, {Component} from 'react';
import { connect } from "react-redux";
import {getFavouritesData} from '../redux/selectors/favorites'
import ListBlock from './ListBlock';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
    text-align:center;    
    background-color: #f2858538;
    width:80%;
    margin: 10px auto;    
    padding: 15px 10px;
    border-radius: 25px;
`;

const ListBox = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

class FavoritesPage extends Component {
    render() { 
        const {favoritesData} = this.props;
        return (            
            <DetailsWrapper>
                <h2>Your favorites...</h2>
                <ListBox>
                    <ListBlock eventList={favoritesData.favEventsList} venueList={favoritesData.favVenuesList} />
                </ListBox>
            </DetailsWrapper>
         );
    }
}

const mapStateToProps = state => ({
    favoritesData: getFavouritesData(state),
});

export default connect(mapStateToProps, null)(FavoritesPage);