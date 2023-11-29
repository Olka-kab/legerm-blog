import './home.css'
import Header from '../../Components/header/Header'
import Post from '../../Components/post/Post'
import Sidebar from '../../Components/sidebar/Sidebar'

const posts = [ 
  {
    id: 1,
    url: "/assets/img1.jpg",
    title: "Coup D'etat dans l'eglise du Christ",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "3d ago"
  },
  {
    id: 2,
    url: "/assets/img1.jpg",
    title: "Coup D'etat dans l'eglise du Christ",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "3d ago"
  }
]

export default function home() {
  return (
    <div>
      <Header/>
      <div className="home">
        <div className="left">
          {posts.map((el) => <Post key={el.id} post={el}/>)}
        </div>
        
      </div>
    </div>
  )
}
