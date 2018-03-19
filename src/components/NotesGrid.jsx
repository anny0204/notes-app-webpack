var React = require('react');

var Note = require('./Note.jsx');

require('./NotesGrid.css');

var NotesGrid = React.createClass({
    componentDidMount: function() {
        var elem = this.refs.grid;
        this.msnry = new Masonry( elem, {
            itemSelector: '.note',
            columnWidth: 200,
            fitWidth: 200,
            gutter: 8
        });
    },

    componentDidUpdate: function() {
        this.msnry.reloadItems();
        this.msnry.layout();
    },

    render: function() {
        var onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes_grid" ref="grid">
                {
                    this.props.notes.map(function(note) {
                        return <Note key={note.id}
                        color={note.color}
                        deleteNote={onNoteDelete.bind(null, note.id)}>
                        {note.text}</Note>
                    })
                }
            </div>
        )
    }
});

module.exports = NotesGrid;