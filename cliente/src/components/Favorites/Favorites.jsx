import { connect } from "react-redux";
import Card from "../Card/Card";

 function Favorites( { myFavorites }){
    return (
        <div>{myFavorites.map(({ id, name, status, species, gender, origin, image, onClose }) => (<Card
                    key={id}
                    id={id}
                    name = {name}
                    status = {status}
                    species = {species}
                    gender = {gender}
                    origin = {origin.name}
                    image = {image}
                    onClose={onClose}
             />))}</div>
    )
}
export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);