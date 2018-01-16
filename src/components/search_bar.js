import React from 'react';
const Component = React.Component;
//import React, {Component} from 'react'; <-- Can do the previous two lines in one step


//bellow is a functional component
/*const SearchBar = () => {
	return <input />;
};
*/



// below is a class based component
class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar col-md-12">
				<br/>
				<input 
				placeholder="Search Video Here!"
				value = {this.state.term}
				onChange={e => this.onInputChange(e.target.value)}/>
				<br/>
				<br/>
				
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	
}



export default SearchBar;