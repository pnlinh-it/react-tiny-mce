import React, { useRef } from 'react';
import './App.css';

import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { config } from './editor-config';

function App() {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  return (
    <div className="App">
      <h1>Using pre-build bundle</h1>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="Inital value"
        tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
        init={config}
        onChange={(event, editor) => {
          console.log(editor.getContent());
        }}
        onBlur={(event, editor) => {
          if (editor.isDirty()) {
            console.log('loading...');

            setTimeout(() => {
              console.log('done');
              editor.save();
            }, 1000);
          }
        }}
      />
    </div>
  );
}

export default App;
