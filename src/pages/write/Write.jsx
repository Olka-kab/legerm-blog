import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src='/assets/img4.jpg' alt=''/>
      <form className='writeForm'>
        <div className="formGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="formGroup">
            <textarea placeholder='Resumer du jour...' type="text" className='writeInput writeText'>
            </textarea>
        </div>
        <button className='writeSubmit'>Publier</button>
      </form>
    </div>
  )
}
