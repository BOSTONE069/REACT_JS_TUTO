import { useState } from 'react';
import BlogList from './BlogList';

const Post = () => {

    /* This code is using the `useState` hook from React to create a state variable called `blogs` and
    a function called `setBlogPost` to update the state variable. The initial value of `blogs` is an
    array of three objects, each representing a blog post with properties such as `title`, `body`,
    `author`, and `id`. This state variable is used to render the `BlogList` component with the
    `blogs` prop set to the `blogs` state variable. */
    const [blogs, setBlogPost] = useState ([
        {title: 'My new website', body: 'This is  description of my blog post', author: 'John', id: 1},
        {title: 'Welcome to the part', body: 'This is  description of my blog post', author: 'Kevin', id: 2},
        {title: 'Web Dev tops tips', body: 'This is  description of my blog post', author: 'Victor', id: 3},
    ]);

    //function for setting a new blog post
    // const blogPost = () => {
    //     setBlogPost(blogPost)
    // }


    return ( 
      <div className="posts">
        <BlogList blogs={blogs} title="All the Blogs in Tech"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'Victor')} title="All the Blogs By Victor"/>
      </div>
     );
}
 
export default Post;