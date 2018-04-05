import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { activateSearch, deactivateSearch } from '../../state/searchBar'
import { deactivateFilter } from '../../state/filtering'



class SearchBar extends Component {
    handleChange = event => {
        const searchValue = event.target.value.toLowerCase().substr(0, 20);
        const filterName = this.props.deactivateFilter('');
        searchValue === '' ? this.props.deactivateSearch(searchValue) : this.props.activateSearch(searchValue);
    }
    render() {
        return (
        <div>
            <input placeholder="search" value={this.props.searchBar} onChange={this.handleChange}/>
        </div>
        )
    }
}
export default connect(
    state => ({
    }),
    { activateSearch, deactivateSearch, deactivateFilter }
)(SearchBar)

