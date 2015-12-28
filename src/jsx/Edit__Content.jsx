import React from 'react';

export default class Edit__Content extends React.Component {
  constructor(props) {
    super(props);
    this.editor = undefined;
    this.tempNote = {
      id: undefined,
      body: undefined,
    };
  }

  handleMarkdownChange(md) {
    this.tempNote.body = md;
    this.canUpdateNote();
  }

  handleNoteIDChange(id) {
    this.tempNote.id = id;
    this.canUpdateNote();
  }

  canUpdateNote() {
    if (this.tempNote.id !== undefined && this.tempNote.body !== undefined) {
      this.props.handleUpdateNote(this.tempNote);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.selectedNote && nextProps.selectedNote.id === this.tempNote.id && nextProps.selectedNote.body === this.tempNote.body) {
      return false;
    }

    if ((!this.props.selectedNote && nextProps.selectedNote) || (this.props.selectedNote && this.props.selectedNote.id !== nextProps.selectedNote.id)) {
      document.getElementsByClassName('editwrapper__editor')[0].focus();
      this.editor.selectAllContents();
      this.editor.pasteHTML(nextProps.selectedNote.body);
    }
    if (nextProps.selectedNote !== undefined) {
      this.handleNoteIDChange(nextProps.selectedNote.id);
    }
    return true;
  }

  render() {
    const divStyle = {
      borderWidth: '5px',
      borderColor: '#7a0019',
    };

    return (
      <div className="edit__content editwrapper" style={divStyle}>
        <div className="editwrapper__editor">
        </div>
      </div>
    );
  }

  componentDidMount() {
    let _this = this;
    let editor = new MediumEditor('.editwrapper__editor', {
      toolbar: {
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'quote']
      },
      placeholder: {
        text: 'Untitled'
      },
      extensions: {
        markdown: new MeMarkdown((md) => {
          _this.handleMarkdownChange(md);
        })
      }
    });
    this.editor = editor;
  }
}
