import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/shoppinglist')
            .then(response => response.json())
            .then(data => this.setState({items: data}));
    }
}
export default ShoppingList;