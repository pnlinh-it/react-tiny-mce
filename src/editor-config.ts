import { TinyMCE } from 'tinymce';

type EditorOptions = Parameters<TinyMCE['init']>[0];
const config: EditorOptions & {
  selector?: undefined;
  target?: undefined;
} = {
  lists_indent_on_tab: true,
  placeholder: 'Empty',
  branding: false,
  // toolbar: 'undo redo bold italic underline bullist code',
  // toolbar: [],
  plugins:
    'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
  toolbar:
    'undo redo | fontsizeinput hr lineheight newdocument remove selectall styles subscript superscript visualaid | paste pastetext cut | bold italic underline strikethrough blockquote | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | help',
  inline: false,
  menubar: false,
  toolbar_sticky: true,
  // toolbar_sticky_offset: 108,
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
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  resize: false,
  // width: '100px',
  // max_height: '100px',
  // Don't work with blockquote
  // newline_behavior: 'linebreak',
};

export { config };
