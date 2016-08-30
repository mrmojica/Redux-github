var React = require('react');
/*
When the Provider is in place, components can access parts of 
the store, including the dispatch method, using the connect method.
*/
var connect = require('react-redux').connect;
var Repository = require('../components/repository');

var RepositoryList = React.createClass({
    addRepository: function() {
        var repositoryName = this.refs.repositoryName.value;
        // TODO: Add the repository to the state:
        this.props.dispatch(actions.addRepository(repositoryName));
    },

    render: function() {
        var repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});
/*
The mapStateToProps function describes how the different 
parts of the state should be inserted into the props of the component
*/

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

/*Calling the connect function creates a factory, 
which when called returns a container component 
wrapping in this case the RepositoryList component.
*/
var Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;
module.exports = RepositoryList;