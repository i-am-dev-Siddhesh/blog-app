import { get } from "../serverConfig";
import Services from "../serviceUrls";

function getBlogs() {
  return get(Services.getBlogs);
}

function getSingleBlog(id) {
  return get(`${Services.getBlogs}/${id}`);
}

const BlogService = {
  getBlogs,
  getSingleBlog
};

export default BlogService;
