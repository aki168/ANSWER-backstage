import { mdiDotsVertical, mdiPaperclip, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import {useState} from 'react'
import Editor from './Editor'

const ListCard = ({imgPath}) => {

  const [ editor , setEditor ] = useState(false)

  return (
    <div>
      <p className="text-secondary text-end mb-2">2 comments</p>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center py-3">
          <div>
            <p className='mb-1'>Chapter Assignment 2 / HTML&CSS</p>
            <p className='mb-0 fw-bold'>Please check this file for me, thanks!</p>
          </div>
          <Icon path={mdiDotsVertical} size={1} />
        </div>

        <ul className="list-group list-group-flush">

          <li className="list-group-item border-0 ps-4 pe-8">
            <div className="row">
              <div className="col-1 py-4">
                <img className="rounded-circle " width="40" height="40" src={`${imgPath}emilywang.jpeg`} alt="user" />
              </div>
              <article className='col-11 border-bottom py-4'>
                <h5 className="fw-bold">Emily Wang</h5>
                <p className="text-secondary text-3">10:38 AM (4 hours ago)</p>
                <p>
                  Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                  question: Why in the following code the height of the <code>div</code> is bigger than the
                  height of the <code>img</code> ? There is a gap below the image,
                  but it doesn’t seems to be a padding/margin.<br />
                  What is the gap or extra space below image?
                </p>
                <div className='btn btn-lg btn-light border-secondary' type="button" value="HW-2-David.zip" >
                  <Icon path={mdiPaperclip} size={1} />
                  <span className="fw-bold ms-1">HW-2-David.zip</span>
                </div>
              </article>
            </div>
          </li>

{ !editor? 
          <li className="list-group-item border-0 ps-4 pe-8">
            <div className="row">
              <div className="col-1 py-4">
                <img className="rounded-circle " width="40" height="40" src={`${imgPath}andychen.jpeg`} alt="user" />
              </div>
              <article className='col-11 py-4'>
                <h5 className="fw-bold">Andy Chen (You)</h5>
                <p className="text-secondary text-3">13:24 AM (1 hours ago)</p>
                <p>
                  Hi David, by default, an image is rendered inline, like a letter so it sits on the
                  same line that a, b, c and d sit on. There is space below that line for the
                  descenders you find on letters like g, j, p and q.
                </p>
                <p>You can: </p>
                <ul>
                  <li>adjust the <code>vertical-align</code> of the image to position it elsewhere (e.g. the <code>middle</code> ) or </li>
                  <li>change the <code>display</code> so it isn’t inline.</li>
                </ul>
              </article>
            </div>
          </li>
:
<Editor editor={editor} setEditor={setEditor}/>
}
</ul>

      </div>

      { editor || 
      <footer className='d-flex mt-5 justify-content-between'>
        <div>
          <Icon path={mdiChevronLeft} size={1} className="text-dark me-5" />
          <Icon path={mdiChevronRight} size={1} className="text-dark" />
        </div>
        <div>
          <input type="button" value="Mark as read" className='btn px-8 btn-outline-success me-4' />
          <input 
          type="button" value="Reply" onClick={()=> setEditor(prev => !prev)}
          className='btn px-8 btn-success'
          />
        </div>
      </footer>
      }
      
    </div>
  )
}

export default ListCard