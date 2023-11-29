import './post.css'



const Post = ({post}) => {

  console.log(post)
  return (
    <div className='post'>
      <img className='postImg' src={post?.url} alt=''/>
      <div className="postInfo">
        <span className="posttitle">{post?.title}</span>
        <hr/>
        <span className="postDesc">{post?.description}</span>
        <hr/>
        <span className="postDate">{post?.date}</span>
      </div>
    </div>
  )
}

export default Post
