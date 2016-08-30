var React = require('react');
var connect = require('react-redux').connect;
var StarRater = require('./star-rater');
var actions = require('../actions/actions');

var Repository = React.createClass({
    changeRating: function(rating) {
        // TODO: Change the rating:
        this.props.dispatch(
            actions.rateRepository(this.props.repository.name, rating)
        );
    },
    render: function() {
        return (
            <div className="repository">
                {this.props.repository.name}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

/*Doing this will promote the repository component to a Container which has 
DIRECT ACCESS to the state and can therefore make use of the Store.dispatch() method */
var Container = connect()(Repository);

module.exports = Repository;
var Container = connect()(Repository);