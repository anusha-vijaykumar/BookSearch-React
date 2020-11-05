import React,{Component} from 'react'
import './style.css'

class DisplayResults extends Component{
constructor(props){
super(props);
this.state = {
		allSearchResult:[]
		}
}
	componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  
    method( search) {
		
    console.log("in url dispaly results" + search)
	var url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
	console.log(url)
		fetch(url)
		.then(response => response.json())
		.then((data) => {this.setState({allSearchResult:data.items})
		})
		.catch(console.log)	
		
  }

render(){
	return(
	<div class="box">
	{this.state.allSearchResult.map((contact) => (
	<span>
            <div class="card">
				<img src={contact.volumeInfo.imageLinks.smallThumbnail}/>
				<h1>{contact.volumeInfo.title}</h1>
				<p class="price"></p>
				<p><a href={contact.volumeInfo.infoLink}>Info</a></p>
            </div>
			</span>
          ))}
	
	</div>
	);
}
}

export default DisplayResults