var React = require('react');

require("./Note.css");

var Note = React.createClass({
    render: function() {
        var bkColor = {backgroundColor: this.props.color};
        return (
            <div className="note" style={bkColor}>
                {this.props.children}
                <span className="del_btn" onClick={this.props.deleteNote}> x </span>
            </div>
        )
    }
});

module.exports = Note;