import React from 'react'
import { useParams } from 'react-router'

function EditProduct() {
    const {id} = useParams()
    return (
        <div>
            edit product {id}
        </div>
    )
}

export default EditProduct
