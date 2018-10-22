import * as React from 'react';
import { connect } from 'react-redux';
import {
    setVisibilityFilter,
    addTodo
} from '../../actions/typesafeExampleActions';
import { ITodo } from '../../models/interfaces/ITodo';

interface FuelSavingsPageProps {
    todos: ITodo[];
    addTodo(value: string): Promise<void>;
    onClick(e: string): void;
}

interface FuelSavingsPageState {
    value: string;
}

export class TypeSafeActionsPage extends React.Component<
    FuelSavingsPageProps,
    FuelSavingsPageState
> {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    public render() {
        console.log(this.props);
        const { todos } = this.props;

        return (
            <div>
                <h2 className="alt-header">Type Safe Actions Example Page</h2>
                <h3 className="alt-header">Example To Do App</h3>
                <input
                    onChange={this.handleChange.bind(this)}
                    type="text"
                    value={this.state.value}
                />
                <button onClick={() => this.handleClick()}>
                    Add Todo
                </button>
                <ul>
                    {todos.map(todo => {
                        return <li key={todo.id}>{JSON.stringify(todo)}</li>;
                    })}
                </ul>
            </div>
        );
    }

    private handleChange(e: any) {
        this.setState({ value: e.target.value });
    }

    private handleClick() {
        this.props.addTodo(this.state.value)
            .then(() => {
                this.setState({ value: '' });
            });
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
        // active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: value => {
        dispatch(addTodo(value));

        return Promise.resolve();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TypeSafeActionsPage);
