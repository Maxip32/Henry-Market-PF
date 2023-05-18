import {useState, useEffect} from 'react'
import {initMercadoPago, Wallet} from "@mercadopago/sdk-react";
import {useSelector} from "react-redux";

const Payment = () => {

    let total = 0

    initMercadoPago("TEST-12378ed1-b2cd-4b23-ba86-03c410c914a2");
    const shoppingCart = useSelector((state) => state.shoppingCart);

    const [preferenceId, setPreferenceId] = useState(null)

    const orderData = shoppingCart.map(p => {
        return {
            id: p.id,
            title: p.name,
            description: p.description,
            picture_url: p.image,
            quantity: p.quantity,
            unit_price: p.price
        }
    })

    const handleClick = async () => {

        try {

            console.log(`this is orderData ${JSON.stringify(orderData)}`)

            const response = await fetch("https://henrypfbackmarket.onrender.com/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({items: orderData})
            })

            const data = await response.json()
            setPreferenceId(data.body.id)

        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        handleClick()
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <h2>Checkout payment</h2>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {shoppingCart.map((p) => {
                        total += p.price * p.quantity;
                        return (
                            <div style={{display: 'flex', gap: '20px'}} key={p.id}>
                                <p style={{width: '150px'}}>{p.name} X</p>
                                <p style={{width: '100px'}}>{p.quantity}</p>
                                <p style={{width: '150px'}}>subtotal: {p.quantity * p.price}</p>
                            </div>
                        )
                    }
                )}
                <p>total: {total.toFixed(2)} </p>
            </div>

            <div id="wallet_container">
                {preferenceId && <Wallet initialization={{preferenceId: preferenceId}}/>}
            </div>

        </div>
    )
}

export default Payment