import CategoryApi from 'api/categoryApi';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function AsideFilter() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const dataCategories = await CategoryApi.getAll();
                setCategories(dataCategories);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
    return (

        <>
            <div className="col-span-3 bg-gray-50 py-3 px-5">
                <div className=''>
                    <p className="text-lg font-medium mb-1.5">Categories</p>
                    <ul className="ml-3">
                        {categories.map((category,index) => {
                            return <NavLink
                            key={index}
                                className='text-[15px] block hover:text-yellow-700'
                                activeClassName='text-yellow-600'
                                to={`/category/${category._id}`}>
                                {category.cateName}
                            </NavLink>

                        })}
                    </ul>
                </div>
                <div className=" mt-5 pt-5 border-t border-gray-300">
                    <p className="text-lg font-medium mb-1.5">Price</p>
                    <div className="text-sm">
                        <div className="mb-0.5">
                            <input className="focus:outline-none focus:ring-0" type="radio" id="init" name="price" defaultValue="0-50" />
                            <label htmlFor="init">$00.00 - $50.00</label>
                        </div>
                        <div className="mb-0.5">
                            <input className="focus:outline-none focus:ring-0" type="radio" id="next" name="price" defaultValue="50-70" />
                            <label htmlFor="next">$50.00 - $70.00</label>
                        </div>
                        <div className="mb-0.5">
                            <input className="focus:outline-none focus:ring-0" type="radio" id="last" name="price" defaultValue={70} />
                            <label htmlFor="last">&gt; $70.00</label>
                        </div>
                    </div>
                </div>
                <div className="-ml-5 mt-5 pt-5 border-t border-gray-300">
                    <div className="font-medium text-lg font-momo pl-5">
                        Product
    </div>
                    <div>
                        list 3 product
    </div>

                </div>
            </div>

        </>
    
    )
}

export default AsideFilter
