import ImageItem from 'components/common/atoms/ImageItem'
import Text from 'components/common/atoms/Text'
import SubInfoBlog from 'components/website/molecules/SubInfoBlog'
import React from 'react'
import { Link } from 'react-router-dom'

function BlogSection({ blog }) {
    return (
        <>
            <div>
                <Link to={`/blog/${blog._id}`}>
                    <ImageItem
                        url={blog.image}
                        alt={blog.title}
                        title={blog.title}
                    />
                </Link>
            </div>
            <div>
                <div className="my-3">
                    <SubInfoBlog />
                </div>
                <div>
                    <Text variant='h2' className="text-xl font-semibold mb-2">
                        <Link title={blog.title} to={`/blog/${blog._id}`}>
                            {blog.title}
                        </Link>
                    </Text>
                    <Text className="text-gray-400 text-xs">
                        {blog.short_desc}
                    </Text>
                </div>
            </div>
            <div className="mt-5">
                <Link to={`/blog/${blog._id}`}
                    className="bg-black py-2 px-5 text-white text-sm font-semibold uppercase">
                    read more
                </Link>
            </div>
        </>
    )
}

export default BlogSection
