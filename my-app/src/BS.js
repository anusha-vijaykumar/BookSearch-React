import React,{Component} from 'react';
import DisplayResults from './DisplayResults'
import './style.css'

class BS extends Component{

constructor(props){
	super(props);
	this.state = {
		searchText:""
	}
	this.handleChange = this.handleChange.bind(this);
}


handleChange(event){
		 this.setState({searchText: event.target.value});
	}
	
callChild = (event) => {
		event.preventDefault()
		this.child.method(this.state.searchText)
	}

render(){
return(
<React.Fragment>
<html>
  <head>
    <title>Awesome Search Box</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
  </head>
  <body>
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
<input class="search_input" type="text" name="" placeholder="Search..." onChange={this.handleChange} />
          <a href="#" class="search_icon" onClick={this.callChild}><i class="fas fa-search"></i></a>
		    </div>
      </div>
    </div>
	<DisplayResults onRef={ref => (this.child = ref)} />
  </body>
</html>
</React.Fragment>
)
}

}

export default BS