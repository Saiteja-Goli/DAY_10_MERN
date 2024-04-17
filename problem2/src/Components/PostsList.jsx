import React from 'react';
import useFetch from './useFetch';

const PostsList = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error occurred</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        {/* <p>{post.body}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
