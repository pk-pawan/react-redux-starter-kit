import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    {this.renderTableHeader()}
                </thead>
                <tbody>
                    {this.renderTableBody()}
                </tbody>
            </table>
        )
    }
    renderTableHeader() {
        return (
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        )
    }

    renderTableBody() {
        let tableRow;
        if (this.props.Data) {
            if (this.props.Data.length > 0) {
                tableRow = this.props.Data.map(row => {
                    return (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.address}</td>
                        </tr>
                    )
                })
            }
            return tableRow
        }
    }
}

export default Table;