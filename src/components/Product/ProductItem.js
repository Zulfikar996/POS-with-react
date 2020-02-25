import React from 'react'

const ProductItem = ({ product }) => {
    return (
            <div className="col-md-4" key={product.id} style={{backgroundColor:'#d9d9d9', padding:'25px'}}>
                <div className="card" style={{backgroundColor:'transparent', border:'0px solid black',margin:'-25px', width:'22rem'}} >
                    <div className="card-body">
                    <img src={product.image} className="card-img" height="250px" alt=""/>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h5 className="card-title" style={{marginTop:'5px'}}>{product.name}</h5>
                        </div>
                        <div className='col-md-2'>
                            <button type="button" class="edit btn btn-outline-secondary btn-md">Edit</button>
                        </div>
                        <div className='col-md-4'>
                            <button type="button" class="delete btn btn-outline-danger btn-md">Delete</button>
                        </div>
                    </div>
                        <p className="card-text" style={{marginTop:'-10px'}}>{product.price} </p>
                    </div>
                </div>
            </div>
    )
}

export default ProductItem