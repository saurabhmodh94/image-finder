import React, { Component } from 'react';
import Results from './../results/Results';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from "axios";
class Search extends Component {
    state = {
        'searchKey': '',
        'results': 5,
        'apiUrl': 'https://pixabay.com/api/',
        'apiKey': '8780326-6d5a3ef3dd62d01cf4e009e6e',
        'imgList': []
    }
    apiCall = () => {
        if (this.state.searchKey != '') {
            axios.get(`${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchKey}&image_type=photo&safesearch=true&per_page=${this.state.results}`)
                .then((res) => this.setState({ 'imgList': res.data.hits }))
                .catch((e) => console.log(e))
        } else {
            this.setState({ imgList: [] })
        }
    }

    handleSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.apiCall())

    }
    handleResultsChange = (e, index, value) => {
        this.setState({ results: value }, () => this.apiCall())
    }
    render() {
        return (
            <div>
                <TextField
                    name="searchKey"
                    value={this.state.searchKey}
                    onChange={this.handleSearch}
                    floatingLabelText="Search For"
                    fullWidth={true}
                />
                <SelectField
                    name="results"
                    floatingLabelText="Results"
                    value={this.state.results}
                    onChange={this.handleResultsChange}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={25} primaryText="25" />
                </SelectField>
                <Results imgList={this.state.imgList} />

            </div>
        )
    }
}

export default Search;