import { allProductsName } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';


export default function FilterByName() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)


const handleFilterByName = (event) => {
    dispatch(allProductsName(event.target.value))
}

return (<>   
<select  onChange={handleFilterByName}>
                <option disabled selected>Search by Names</option>
                {
                    products.map((p, index) => {
                        return <option value={p} key={index}>{p}</option>
                    })
                }
            </select>

 </>)
}