import { connect } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/Actions";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";

 function Favorites( { myFavorites }){
    const dispatch = useDispatch ();

    const handleOrder = function(event){
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <div>
                <select name="order" onChange={handleOrder}>
                    <option value="A">A</option>
                    <option value="D">D</option>
                </select>
                <select name="filer" onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
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
        </div>
    )
}
export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);