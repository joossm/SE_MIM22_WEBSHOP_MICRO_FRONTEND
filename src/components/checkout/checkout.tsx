import {observer} from 'mobx-react'

import {CheckoutStyled, LinkStyled} from './checkout.styles'

export const Checkout = observer(() => {
    return (
        <>
            <h2>Finished Checkout</h2>
            <CheckoutStyled>
                <h3>Thanks for your purchase!</h3>
                Your products will be sent to you immediately. By magic. Because we
                never asked for your address. Well isn't this like Hogwarts.
                <p>
                    Click <LinkStyled href="/">here</LinkStyled> to find other products.
                </p>
            </CheckoutStyled>
        </>
    )
})
