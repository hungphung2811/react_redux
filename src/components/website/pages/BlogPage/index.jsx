import React, { useEffect, useState } from 'react'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import BlogApi from 'api/blogApi';
import BlogSection from 'components/website/organisms/BlogSection';
import Loading from 'components/common/molecules/Loading';
import AsideBlog from 'components/website/molecules/AsideBlog';

function BlogPage() {
    const [blogs, setBlogs] = useState({
        listBlogs: [],
        loading: true,
        erroring: ''
    })
    useEffect(() => {
        setBlogs({
            ...blogs,
            loading: true
        });

        ; (async () => {
            const dataBlogs = await BlogApi.getAll();
            setBlogs({
                ...blogs,
                listBlogs: [...blogs.listBlogs, ...dataBlogs],
                loading: false
            })
        })();
    }, [])

    return (
        <>
            <div className={`${blogs.loading ? 'block' : 'hidden '}`}>
                < Loading />
            </div>
            <div>
                <Breadcrumb>blog</Breadcrumb>

                <div className="flex justify-center md:px-8 container mx-auto lg:px-16 xl:px-32 mt-10">
                    <div className="mr-7">
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
                    <div className="min-w-[300px] h-[100px] z-10">
                        <AsideBlog/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPage
