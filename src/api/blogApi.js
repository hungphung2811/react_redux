import axiosClient from "./axiosClient";

const BlogApi = {
    getAll() {
        const url = '/blogs'
        return axiosClient.get(url)
    },
    getOne(id) {
        const url = `/blogs/${id}`
        return axiosClient.get(url)
    }
}

export default BlogApi;
