import React, { useRef } from 'react';
import './App.css';

import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';

function App() {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  return (
    <div className="App">
      <h1>Using pre-build bundle</h1>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="Inital value"
        tinymceScriptSrc={`${process.env.PUBLIC_URL}/tinymce/tinymce.min.js`}
        init={{
          lists_indent_on_tab: true,
          placeholder: 'Empty',
          branding: false,
          // toolbar: 'undo redo bold italic underline bullist code',
          // toolbar: [],
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | code help',
          inline: false,
          menubar: false,
          newline_behavior: 'linebreak',
        }}
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
