import { TinyMCE } from 'tinymce';

type EditorOptions = Parameters<TinyMCE['init']>[0];
const config: EditorOptions & {
  selector?: undefined;
  target?: undefined;
} = {
  lists_indent_on_tab: true,
  placeholder: 'Empty',
  // toolbar: 'undo redo bold italic underline bullist code',
  plugins:
    'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',

  // https://www.tiny.cloud/docs/tinymce/6/toolbar-configuration-options/#link_context_toolbar
  toolbar: [],
  toolbar1:
    'undo redo | fontsizeinput hr lineheight newdocument remove selectall styles subscript superscript visualaid | paste pastetext cut | bold italic underline strikethrough blockquote | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | help',
  toolbar2: 'alignleft aligncenter alignright',
  toolbar_mode: 'wrap',
  inline: false,
  menubar: false,
  toolbar_sticky: true,
  // toolbar_sticky_offset: 108,
  link_context_toolbar: true,

  quickbars_insert_toolbar: 'quickimage quicktable | hr pagebreak',
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  quickbars_image_toolbar:
    'alignleft aligncenter alignright | rotateleft rotateright | imageoptions',

  table_toolbar:
    'tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',

  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' },
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' },
  ],
  importcss_append: true,
  file_picker_callback: (callback, value, meta) => {
    /* Provide file and text for the link dialog */
    if (meta.filetype === 'file') {
      callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
    }
    /* Provide image and alt text for the image dialog */
    if (meta.filetype === 'image') {
      callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    }
    if (meta.filetype === 'media') {
      callback('movie.mp4', {
        source2: 'alt.ogg',
        poster: 'https://www.google.com/logos/google.jpg',
      });
    }
  },
  height: 600,
  image_caption: true,
  noneditable_class: 'mceNonEditable',
  contextmenu: 'link image table',
  statusbar: false,
  resize: false,
  elementpath: false,
  branding: false,
  highlight_on_focus: true,
  // width: '100px',
  // max_height: '100px',
  // Don't work with blockquote
  // newline_behavior: 'linebreak',
};

export { config };
