import React from 'react';
import axios from 'axios';
import Searchinput from './Searchinput';
import ImageList from './ImageList'; 


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {images : [] };
    }

     onSearchSubmit = async (entry) => {
     const response = await axios.get(`https://pixabay.com/api/?key=22153724-b3abc2b7e5e0037c57d01f5f9&q=${entry}&image_type=photo`)

        this.setState({images : response.data.hits});

    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                   <Searchinput onSearchSubmit={this.onSearchSubmit}/>

                    <ImageList images={this.state.images}/>

                  We have { this.state.images.length } image.
            </div>
        )
        
    }
}


export default App
