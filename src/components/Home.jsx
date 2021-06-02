import React, { Component } from "react";
import { connect } from "react-redux";
import {isEmpty} from 'lodash';
import {eventsAction} from '../redux/actions/eventActions';
import {venuesActions} from '../redux/actions/venueActions';
import {getEventsList} from '../redux/selectors/events';
import {getVenuesList} from '../redux/selectors/venues';
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';
import ListBlock from './ListBlock';
import styled from 'styled-components';

const DetailsWrapper = styled.div`
    display:flex;
    background-color: #f2858538;
    width:80%;
    margin: -5px auto 0;
    flex-wrap:wrap;
    padding: 15px 10px;
    border-radius: 25px;
`;

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

class Home extends Component{
    constructor() {
        super();
        this.state = {
            searchInitiated: false,
            searchType: '',
        }
    };

    componentDidMount() {
        const {fetchInitialEventsData,fetchInitialVenueData} = this.props;
        fetchInitialEventsData();
        fetchInitialVenueData();
    };

    isSearchInitiated = (type) => {
        this.setState({searchInitiated: true, searchType: type});
    }

    render(){
        const {searchInitiated, searchType} = this.state;
        const {eventsList ={},venueList ={}} = this.props;
        const resultData  = searchType === 'event' ? eventsList : venueList;
        
        return(
            <>
            <SearchComponent isSearchInitiated={this.isSearchInitiated}/>
            <DetailsWrapper>
                {!searchInitiated ? (<ListBlock eventList={eventsList} venueList={venueList} />) 
                : !isEmpty(resultData) ? 
                (<Block><StyledTitle>Search Results:</StyledTitle> <ListComponent listData = {resultData} /></Block>)
                : null}
                </DetailsWrapper>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchInitialEventsData: () => dispatch(eventsAction.getEvents.request()),
    fetchInitialVenueData: () => dispatch(venuesActions.getVenues.request()),
});

const mapStateToProps = state => ({
    eventsList: getEventsList(state),
    venueList: getVenuesList(state),
});

export default connect(mapStateToProps, mapDispatchToProps,)(Home);