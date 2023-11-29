import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headertitleSm'>A L'HEURE DU GERME</span><br/><br/><br/>
        <span >Voici, un homme, dont le nom est germe, germera dans son lieu, et bâtira le temple de l'Éternel. 
        Zach 6:12</span>
      </div>
      <img className='headerImg' src='/assets/img3.jpg' alt=''/>
    </div>
  )
}
