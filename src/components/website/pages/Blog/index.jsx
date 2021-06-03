import React, { useEffect, useState } from 'react'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import BlogApi from 'api/blogApi';
import BlogSection from 'components/website/organisms/BlogSection';

function BlogPage() {
    const [blogs, setBlogs] = useState({
        listBlogs: [],
        loading: true,
        erroring: ''
    })
    useEffect(() => {
        (async () => {
            const dataBlogs = await BlogApi.getAll();
            setBlogs({
                ...blogs,
                listBlogs: [...blogs.listBlogs, ...dataBlogs]
            })
        })();
    }, [])

    return (
        <div>
            <Breadcrumb>blog</Breadcrumb>


            <div className="grid grid-cols-7 gap-7 md:px-8 lg:px-16 xl:px-32 mt-10">
                <div className="col-span-5">
                    {
                        blogs.listBlogs.map((blog, index) => {
                            return (
                                <div key={index} className="mb-5 pb-14 border-b border-gray-200">
                                    <BlogSection blog={blog} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-span-2">
                    side bar
                </div>
            </div>
        </div>

    )
}

export default BlogPage
