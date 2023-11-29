import './singlePost.css'

export default function SnglePost() {
  return (
    <div className='singlePost'>
      <div className="postwrapper">
        <img className='postImg' src='/assets/img5.jpg' alt=''/>
        <h1 className="postTitle">
          La dime et offrande
          <div className="postEdit">
            <i className="postIcon fa-solid fa-pen-to-square"></i>
            <i className="postIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className='postAuthor'>Autor:<b>Admin</b></span>
          <span className='postDate'>5 hour ago</span>
        </div>
        <p className='singlePostDescr'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
         book.</p>
      </div>
    </div>
  )
}
