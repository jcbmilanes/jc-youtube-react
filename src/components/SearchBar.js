import React from 'react';

import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{

    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchTerm:event.target.value});
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state; // destructuring the state
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault(); // this will prevent the default behaviour of the browser refresh
    }

    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;