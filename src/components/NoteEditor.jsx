var React = require('react');

require('./NoteEditor.css');

var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        }
    },

    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },

    handleSaveNote: function() {
        var note = {
            id: Date.now(),
            color: 'yellow',
            text: this.state.text
        };
        this.props.saveNote(note);
        this.setState({text: ''})
    },

    render: function() {
        return (
            <div className="note_editor">
                <textarea className="textarea" rows="5" onChange={this.handleTextChange} value={this.state.text}></textarea><br />
                <button className="add_btn" onClick={this.handleSaveNote}>Add</button>
            </div>
        )
    }
});

module.exports = NoteEditor;