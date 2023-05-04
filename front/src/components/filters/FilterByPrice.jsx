import { allProducts } from "../../redux/actions";
import { useDispatch } from "react-redux";



export default function filterByPrice() {
    const dispatch = useDispatch()
    const handleOrder = (event) => {
        dispatch(allProducts(event.target.value))
    }

  return (<>
   <select  onChange={handleOrder}>
   <option disabled selected>Order by price</option>
   <option value="Ascendente">Maximum</option>
   <option value="Descendente">Minimum</option>
   </select>

</>)
}