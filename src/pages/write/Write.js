import './write.css'
import { IoMdAdd } from "react-icons/io";

const Write = () => {
  return (
    <div className='write'>
        <img className='writeImg'
            src='https://blooloop.com/wp-content/uploads/2018/02/IMG-worlds-of-adventure.jpg'
            alt=''
        />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'><IoMdAdd className='writeIcon'/></label>
                <input type='file' id='fileInput' style={{display:'none'}}/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write