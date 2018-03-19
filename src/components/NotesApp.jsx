var React = require('react');

var NoteEditor = require('./NoteEditor.jsx');
var NotesGrid = require('./NotesGrid.jsx');

require('./NotesApp.css');

var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: []
        }
    },

    handleSaveNote: function(newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },

    handleNoteDelete: function(id) {
        var newNotes = this.state.notes.filter(function(note) {
            return note.id != id
        });
        this.setState({notes: newNotes});
    },

    componentDidMount: function() {
        var notes = JSON.parse(localStorage.getItem('notes'));
        this.setState({notes: notes});
    },

    _updateLocalStorage: function() {
        localStorage.setItem('notes', JSON.stringify(this.state.notes));
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    render: function() {
        return (
            <div className="notes_app">
                <h1>My notes</h1>
                <NoteEditor saveNote={this.handleSaveNote}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        )
    }
});

module.exports = NotesApp;