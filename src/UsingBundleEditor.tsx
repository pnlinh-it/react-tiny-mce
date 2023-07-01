import React, { useRef } from 'react';
import { BundledEditor } from './BundledEditor';
import { Editor as TinyMCEEditor } from 'tinymce';
import { config } from './editor-config';

export function UsingBundleEditor() {
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <>
      <BundledEditor
        onInit={(evt, editor: TinyMCEEditor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={config}
      />
    </>
  );
}
