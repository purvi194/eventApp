import {Component} from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { BiSearchAlt } from "react-icons/bi";

import {eventsAction} from '../redux/actions/eventActions';
import {venuesActions} from '../redux/actions/venueActions';

const Wrapper = styled.div`
    width:80%;
    background-color: #5463B9;
    border-radius: 25px;
    text-align: center;
    margin: 0 auto;
    position:relative;
`;

const Title = styled.h3`
    color: #F1ECF1;
`;

const ButtonWrapper = styled.section`
    display:flex;
    margin: 0 auto 10px;
    justify-content: center;
`;

const SearchWrapper = styled.section`
    display:flex;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 70%;
    justify-content: center;
`;

const StyledButton = styled.button`
    background-color: ${({searchValue}) => searchValue ? '#e69b9b' : '#F28585'};
    color: white;
    border-radius: 4px;
    padding: 10px;
`;

const InputBox = styled.input`
    font-size: 21px;
    height: 24px;
    width: 30%;
    border: none;
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    font-family: cursive;
`;

const SearchButton = styled.button`
background-color: #F28585;
border-radius: 4px;
padding: 5px;
`;

const SearchIcon = styled(BiSearchAlt)`
    height:25px;
    width: 25px;
`;


class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            searchType: 'event',
            searchString: '',
        }
    }

    const 

    handleClick = (data) => {
        this.setState({searchType: data, searchString:''});
    };

    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    };

    handleSearch = () => {
        const {searchType, searchString} = this.state;
        const {isSearchInitiated, searchEvents, searchVenues} = this.props;
        const params = {pathparams:{searchString}};
        if(searchType === 'event') {
            
            searchEvents(params);
        } else { searchVenues(params);
        }
        isSearchInitiated(searchType);

    };

    render(){
        const {searchType, searchString} = this.state;
        // const {updateSearchStatus} = this.props;
        const placeHolder = `Search ${searchType}`;
        return(
            <Wrapper>
                <Title>Choose a search type</Title>
                <ButtonWrapper>
                    <StyledButton searchValue={searchType === 'event'} disabled={searchType === 'event'} onClick={()=>this.handleClick('event')}>Event</StyledButton>
                    <StyledButton searchValue={searchType === 'venue'} disabled={searchType === 'venue'} onClick={()=>this.handleClick('venue')}>Venue</StyledButton> 
                </ButtonWrapper>
                <SearchWrapper>
                    <InputBox value={searchString} onChange={this.handleChange}  placeholder={placeHolder}/>
                    <SearchButton onClick={()=>this.handleSearch()}><SearchIcon/></SearchButton>
                </SearchWrapper>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    searchEvents: params => dispatch(eventsAction.searchEvents.request(params)),
    searchVenues: params => dispatch(venuesActions.searchVenues.request(params)),
});

export default connect(null, mapDispatchToProps,)(SearchComponent);