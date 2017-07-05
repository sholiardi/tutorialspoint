import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Bruno',
                    'age': '26'
                },
                {
                    'id': 2,
                    'name': 'Thomas',
                    'age': '25'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }

}

class TableRow extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
