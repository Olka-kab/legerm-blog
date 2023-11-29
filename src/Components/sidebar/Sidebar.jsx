import './sidebar.css'

export default function sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebarImg' src='/assets/img8.jpg' alt=''/>
      <div className="sidebarItem">
        <span className="sidebartitle">Nos differentes themes</span>
        <p>Lorem Ipsum is simply d standard dummy text ever siscrambled it to make a type specimen book .</p>
      </div>
      <div className="sidebarItem">
        <span className='sidebartitle'>Themes</span>
        <ul className="sidebarlist">
          <li className="sidebarlistItem">Theme1</li>
          <li className="sidebarlistItem">Theme1</li>
          <li className="sidebarlistItem">Theme1</li>
          <li className="sidebarlistItem">Theme1</li>
          <li className="sidebarlistItem">Theme1</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-youtube"></i>
          <i className="sidebarIcon fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  )
}
