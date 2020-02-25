import React, {Component} from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'

class Product extends Component {
    state = {
        Products: []
    }
    //Display product
    displayProduct() {
        axios
            .get('http://localhost:4500/product')
            .then(response => {
                this.setState({ Products: response.data.result })
            })
            .catch(console.log)
    }

    inputProduct() {
        axios
            .post('localhost:4500/product')
            .then(response => {
                
        })
    }


    componentDidMount() {
        this.displayProduct()
    }

    render() {
        const showProduct = this.state.Products.map((item, index) => {
            return (
                <ProductItem product={item} key={index} />
            )
        })

        return (
                <div className="row">
                    {showProduct}
                </div>
        )
    }
}

export default Product
