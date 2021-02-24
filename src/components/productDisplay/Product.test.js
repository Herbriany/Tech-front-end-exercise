import React from 'react'
import renderer from 'react-test-renderer'
import { products } from '../../../tools/mockData'
import { shallow } from 'enzyme'
import Product from './Product'

function render(args) {
    const defaultProps = {
        product: products[0],
        onAddProductClick: jest.fn()
    }
    const props = {...defaultProps, ...args}
    return shallow(<Product {...props}/>)
}

it("renders single product",() => {
    const tree = renderer.create(<Product product={products[0]} onAddProductClick={() =>{}} />)
    expect(tree).toMatchSnapshot()
})

it("should be a button saying Add to Basket", () => {
 const wrapper = render({})
 expect(wrapper.find("button").text()).toEqual("Add to Basket")
})
