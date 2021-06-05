import BlogApi from 'api/blogApi'
import Loading from 'components/common/molecules/Loading'
import ImageItem from 'components/common/atoms/ImageItem'
import Text from 'components/common/atoms/Text'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import SubInfoBlog from 'components/website/molecules/SubInfoBlog'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function BlogDetailPage() {
    const { id } = useParams()
    const [blog, setBlog] = useState({
        listBlog: {},
        loading: true,
        erroring: ''
    })
    useEffect(() => {
        setBlog({
            listBlog: { ...blog.listBlog },
            loading: true,
        });

        ; (async () => {
            try {
                const blog = await BlogApi.getOne(id)
                console.log(blog);
                setBlog({
                    ...blog,
                    listBlog: { ...blog.listBlog, ...blog },
                    loading: false
                })
            } catch (error) {
                setBlog({
                    ...blog,
                    listBlog: { ...blog.listBlog },
                    erroring: error
                })
            }
        })();
    }, [id])
    return (
        <>
            <div className={`${blog.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>

            <div>
                <Breadcrumb>blog</Breadcrumb>

                <div className="grid grid-cols-7 gap-7 md:px-8 lg:px-16 xl:px-32 mt-10">
                    <div className="col-span-5">
                        <div className="mb-5 pb-14 border-b border-gray-200">
                            <div>
                                {console.log(blog)}
                                <ImageItem
                                    url={blog.listBlog.image}
                                    alt={blog.listBlog.title}
                                />
                            </div>
                            <div>
                                <div className="my-3">
                                    <SubInfoBlog />
                                </div>
                                <div>
                                    <Text variant='h2' className="text-xl font-semibold mb-2" title={blog.listBlog.title}>
                                        {blog.listBlog.title}
                                    </Text>
                                    <Text className="text-gray-400 text-xs">
                                        {blog.listBlog.full_desc}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        side bar
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetailPage
