import React from 'react'
import { useParams } from 'react-router'

function Category() {
    const { id } = useParams();
    return (
        <div>
            category page website {id}
        </div>
    )
}

export default Category
