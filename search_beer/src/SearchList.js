import React from "react";


const onClickF = (event) => {
    console.log(event);
   /* const [data, setData] = useState(event);
    console.log(data);

        return (
            <div>
                <p>{event.name}</p>
                <p>{event.Brewery}</p>
                <p>{event.Brewer.first}</p>
                <p>{event.style}</p>
                <p>{event.IBU}</p>
                <p>{event.EBC}</p>
                <p>{event.ABV}</p>
            </div>
        );*/





}
const RenderCity = (props) => {

        if(Object.keys(props.SearchBeer).length){

            return props.SearchBeer.map((objectss,ind) =>{
                    const name = objectss.name;
                    const brewer = objectss.Brewery;
                    const brewer_name = `${objectss.Brewer.first} ${objectss.Brewer.last}`;
                    const style = objectss.Style;
                    const ibu = objectss.IBU;
                    const ebc = objectss.EBC;
                    const abv = objectss.ABV;

                    return (
                        <tr key={ind} onClick={ e => onClickF(objectss) }>
                            <td>{name}</td>
                            <td>{brewer}</td>
                            <td>{brewer_name}</td>
                            <td>{style}</td>
                            <td>{ibu}</td>
                            <td>{ebc}</td>
                            <td>{abv}</td>
                        </tr>
                    );
                }
            );
        }else{
            return null;
        }

    };

    class SearchList extends React.Component {

    render() {


        if(Object.keys(this.props.onSearchBeer).length){
            return (
                <div className = "header-top">
                    <h2>Beer List</h2>

                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brewer</th>
                            <th>Brewer Name</th>
                            <th>Style</th>
                            <th>IBU</th>
                            <th>EBC</th>
                            <th>ABV</th>
                        </tr>
                        </thead>
                        <tbody>
                        <RenderCity SearchBeer={this.props.onSearchBeer}></RenderCity>
                        </tbody>
                    </table>

                </div>

            );
        }else{
            return null;
        }
    }


}

export default SearchList;

