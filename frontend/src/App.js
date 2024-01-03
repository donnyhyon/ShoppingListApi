import React, { Component } from 'react';
import './App.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const response = await fetch('/shoppinglist');
    const body = await response.json();
    this.setState({items: body});
  }
    async remove(id) {
        await fetch(`/shoppinglist/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedItems = [...this.state.items].filter(i => i.id !== id);
            this.setState({items: updatedItems});
        });
    }

  render() {
    const {items} = this.state;

    const itemList = items.map(item => {
        return <tr key={item.id}>
            <td style={{whiteSpace: 'nowrap'}}>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.units}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" to={"/shoppinglist/" + item.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => this.remove(item.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });
        return (
            <div>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" to="/shoppinglist/new">Add Item</Button>
                    </div>
                    <h3>Items</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="20%">Quantity</th>
                            <th width="20%">Units</th>
                            <th width="20%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
  }
}
export default App;