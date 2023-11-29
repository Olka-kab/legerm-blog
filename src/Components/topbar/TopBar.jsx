import './topbar.css'

export default function TopBar() {
  return (
    <div>
      <div className="top">
        <div className="topleft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-youtube"></i>
            <i className="topIcon fa-brands fa-x-twitter"></i>
        </div>
        <div className="topcenter">
            <ul  className='toplist'>

                <li className='toplistItem'>Home</li>
                <li className='toplistItem'>About</li>
                <li className='toplistItem'>Contact</li>
                <li className='toplistItem'>Whrite</li>
            </ul>
        </div>
        <div className="topright">
            <img className='topImg' src="/assets/logo.png" alt="" />
            <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>

      </div>
    </div>
  )
}
