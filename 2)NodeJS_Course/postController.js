const posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'}
]

// export const getPosts = () => posts; (First way)

const getPosts = () => posts; 

// export {getPosts}; // might wanna export as default, get rid off curly braces and add default =>

// export default getPosts; // Also you need to change import section in index file, remove the curly braces

// Also you can export things default and other ones not default 

export const getPostsLength = () => posts.length;
export default getPosts;
