import { useState } from 'react';

const Post = () => {

    const [blogs, setBlogPost] = useState ([
        {title: 'My new website', body: 'This is  description of my blog post', author: 'John', id: 1},
        {title: 'Welcome to the part', body: 'This is  description of my blog post', author: 'Kevin', id: 2},
        {title: 'Web Dev tops tips', body: 'This is  description of my blog post', author: 'Victor', id: 3},
    ]);

    //function for setting a new blog post
    const blogPost = () => {
        setBlogPost(blogPost)
    }


    return ( 
      <div className="posts">
        {blogs.map(blog => (
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
                </div>))}
      </div>
     );
}
 
export default Post;