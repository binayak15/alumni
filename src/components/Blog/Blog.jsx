import React, { useState } from 'react';

const AlumniBlogPage = () => {
  const [blogContent, setBlogContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [commentContent, setCommentContent] = useState('');
  const [replyContent, setReplyContent] = useState('');

  const currentUser = {
    username: 'John Doe',
    avatar: '/assets/user-avatar.png', // Replace with actual image URL
  };

  // Handle Blog Upload
  const handleBlogUpload = () => {
    if (blogContent.trim()) {
      setBlogs([
        {
          content: blogContent,
          author: currentUser,
          comments: [],
        },
        ...blogs, // Prepend new blog to the list
      ]);
      setBlogContent('');
    }
  };

  // Handle Adding a Comment
  const handleAddComment = (blogIndex) => {
    if (commentContent.trim()) {
      const updatedBlogs = [...blogs];
      updatedBlogs[blogIndex].comments.push({
        content: commentContent,
        author: currentUser,
        replies: [],
      });
      setBlogs(updatedBlogs);
      setCommentContent('');
    }
  };

  // Handle Adding a Reply
  const handleAddReply = (blogIndex, commentIndex) => {
    if (replyContent.trim()) {
      const updatedBlogs = [...blogs];
      updatedBlogs[blogIndex].comments[commentIndex].replies.push({
        content: replyContent,
        author: currentUser,
      });
      setBlogs(updatedBlogs);
      setReplyContent('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Alumni Blog</h1>
          <p>Share your experiences and connect with the community</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Blog Upload Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Upload Your Blog</h2>
          <textarea
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            placeholder="Write your blog here..."
            className="w-full h-40 p-4 border border-gray-300 rounded-md"
          ></textarea>
          <button
            onClick={handleBlogUpload}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Post Blog
          </button>
        </section>

        {/* Blog Cards Section */}
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog, blogIndex) => (
            <div key={blogIndex} className="bg-white p-6 rounded shadow">
              {/* Blog Author */}
              <div className="flex items-center mb-4">
                <img
                  src={blog.author.avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">{blog.author.username}</p>
                  <p className="text-sm text-gray-500">Blog #{blogs.length - blogIndex}</p>
                </div>
              </div>
              <p className="mb-4 text-gray-700">{blog.content}</p>

              {/* Comments Section */}
              <div>
                <h4 className="text-md font-bold mb-2">Comments</h4>
                {blog.comments.map((comment, commentIndex) => (
                  <div
                    key={commentIndex}
                    className="mb-4 p-4 bg-gray-100 rounded shadow-sm"
                  >
                    {/* Comment Author */}
                    <div className="flex items-center mb-2">
                      <img
                        src={comment.author.avatar}
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <p className="font-bold">{comment.author.username}</p>
                    </div>
                    <p className="text-gray-800">{comment.content}</p>

                    {/* Replies Section */}
                    <div className="mt-2 pl-4 border-l-2 border-gray-300">
                      <h5 className="text-sm font-bold">Replies</h5>
                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="mt-2 flex items-start">
                          <img
                            src={reply.author.avatar}
                            alt="User Avatar"
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <div>
                            <p className="font-bold">{reply.author.username}</p>
                            <p className="text-gray-600">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                      <input
                        type="text"
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder="Write a reply..."
                        className="mt-2 p-2 border border-gray-300 rounded w-full"
                      />
                      <button
                        onClick={() => handleAddReply(blogIndex, commentIndex)}
                        className="mt-2 bg-gray-800 text-white py-1 px-2 rounded"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add Comment */}
                <input
                  type="text"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                <button
                  onClick={() => handleAddComment(blogIndex)}
                  className="mt-2 bg-blue-600 text-white py-1 px-2 rounded"
                >
                  Comment
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>© 2024 Alumni Blog Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AlumniBlogPage;