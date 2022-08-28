import {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorConfiguration = {
    toolbar: [ 'bold', 'italic' ]
};

// { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
// { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
// { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
// { name: 'forms', groups: [ 'forms' ] },
// { name: 'styles', groups: [ 'styles' ] },
// { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
// { name: 'paragraph', groups: [ 'indent', 'list', 'blocks', 'align', 'bidi', 'paragraph' ] },
// { name: 'insert', groups: [ 'insert' ] },
// { name: 'links', groups: [ 'links' ] },
// '/',
// { name: 'colors', groups: [ 'colors' ] },
// { name: 'tools', groups: [ 'tools' ] },
// { name: 'others', groups: [ 'others' ] },
// { name: 'about', groups: [ 'about' ] }

const Editor = ({editor,setEditor}) => {

    // const [ editor , setEditor ] = useState(false)

    return (
        <div className="Editor">
            <CKEditor
                editor={ClassicEditor}
                // config={ editorConfiguration }
                data="<p>Reply an answer…</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <div className="d-flex justify-content-end py-5 pe-4">
                <input type="button" value="Cancel" className='btn px-8 btn-outline-success me-4' onClick={()=>setEditor(prev=>!prev)} />
                <input
                    type="button" value="Reply" className='btn px-8 btn-success'/>
            </div>
        </div>
    ); 
}

export default Editor;
