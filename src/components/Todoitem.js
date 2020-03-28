import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <li className = "list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className = "todo-icon" onClick = {handleEdit}>
                <span className = "mx-2 text-success">
                    <i className = "fas fa-pen">Edit</i>
                </span>
                <span className = "mx-2 text-danger" onClick={handleDelete}>
                    <i className = "fas" >delete</i>
                </span>
            </div>
            </li>
        )
    }
}