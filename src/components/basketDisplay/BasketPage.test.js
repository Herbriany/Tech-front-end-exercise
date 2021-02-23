import React from 'react'
import BasketPage from './BasketPage'
import renderer from 'react-test-renderer'
import { products } from '../../../tools/mockData'
import { shallow } from 'enzyme'

function render(args) {
    const defaultProps = {
        basketProducts: [],
        totalPrice: 0,
        productAmount: 0,
        onDecrementClick: () => {},
        onIncrementClick: () => {},
        onEmptyBasketClick: () => {},
        onRemoveProductClick: () => {}
    }
    const props = {...defaultProps, ...args}
    return shallow(<BasketPage {...props}/>)
}

it("Should read 'Your basket is empty' when no products in basket", () => {
    const wrapper = render()
    expect(wrapper.find("h2").text()).toBe("Your Basket")
    
})

describe("snapshot tests", () => {

    it("Should show 8 products and an order summary", () => {
        const tree = renderer.create(<BasketPage 
            basketProducts={products}
            totalPrice={products[0].price}
            productAmount={products.length}
            onDecrementClick={jest.fn()}
            onIncrementClick={jest.fn()}
            onEmptyBasketClick={jest.fn()}
            onRemoveProductClick={jest.fn()}
        />)
        expect(tree).toMatchSnapshot()
    })

    it("Should show empty basket and no order summary", () => {
        const tree = renderer.create(<BasketPage 
            basketProducts={[]}
            totalPrice={0}
            productAmount={0}
            onDecrementClick={jest.fn()}
            onIncrementClick={jest.fn()}
            onEmptyBasketClick={jest.fn()}
            onRemoveProductClick={jest.fn()}
        />)

        expect(tree).toMatchSnapshot()
    })
})


