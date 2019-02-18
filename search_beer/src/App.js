import React, {Component} from 'react';
import SearchBar from './SearchBar';
import './App.css';
import SearchList from "./SearchList";
import axios from 'axios';



class App extends Component {
    state = {
        place: {}
    };

    getBeerData() {
        const URL = 'http://localhost:8008/';

        return axios.get(URL)
            .then(function (response) {
                return (response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    showBeerDetails(searchSring) {
    console.log(searchSring);


        if(typeof searchSring !== "undefined" && typeof searchSring !== "undefined") {

            this.getBeerData(searchSring).then(data => {

               /* this.Search(data,searchSring.name);
                const searchResult = data.data[0];*/
                let result = data.data.filter((objectss) =>{
                    const name = (objectss.name.toLowerCase().indexOf(searchSring.toLowerCase()) !== -1);
                    const brewer = (objectss.Brewery.toLowerCase().indexOf(searchSring.toLowerCase()) !== -1);
                    const brewer_first_name = (objectss.Brewer.first.toLowerCase().indexOf(searchSring.toLowerCase()) !== -1);
                    const brewer_last_name = (objectss.Brewer.last.toLowerCase().indexOf(searchSring.toLowerCase()) !== -1);
                    const style = (objectss.Style.toLowerCase().indexOf(searchSring.toLowerCase()) !== -1);

                    if(name || brewer || brewer_first_name || brewer_last_name || style){
                        return true;
                    }else return false;

                });

                this.setState({place: result,
                    error_message: ""});
            });
        } else this.setState({error_message: "Please insert city of Sweden"});


    }

    render() {
        return (
            <div className="container">
                <SearchBar onPlaceChanged={this.showBeerDetails.bind(this)}/>
                <div className="error_message"><label className="wrong">{this.state.error_message}</label></div>

                <SearchList onSearchBeer={this.state.place}/>

            </div>
        );
    }
}

export default App;