import React from "react"
import "./EmpTable.css";
import * as ReactBootstrap from "react-bootstrap";

class EmpTable extends React.Component {

    state = {
        employees: [],
        search: ""
    };

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = async () => {
        try {
            const response = await fetch(
                "https://randomuser.me/api/?results=50&inc=id,name,email,phone,location&nat=us"
            );
            const data = await response.json();
            this.setState({ employees: data.results });
        } catch (error) {
            console.log(error);
        }
    };

    filterEmployee = (event) => {
        event.preventDefault()
        const employees = this.state.employees.filter(employee => employee.name.first.toLowerCase() === this.state.search.toLowerCase() || employee.name.last.toLowerCase() === this.state.search.toLowerCase());
        this.setState({ employees })
    }

    handleImputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2"
                            type="search"
                            placeholder="Filter by Name"
                            onChange={this.handleInputChange}
                            name="search"
                            // value={this.state.search}
                            aria-label="Search" />
                    </form>
                </nav>
                <ReactBootstrap.Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Emp #</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || employee.name.last.toLowerCase().includes(this.state.search.toLowerCase())).map(employee => {
                            return (
                                <tr key={employee.id.value}>
                                    <td>{employee.id.value}</td>
                                    <td>{employee.name.first}</td>
                                    <td>{employee.name.last}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.location.city}</td>
                                    <td>{employee.location.state}</td>
                                </tr>
                            )
                        },
                        )}
                    </tbody>
                </ReactBootstrap.Table>
            </>
        )
    };
}
export default EmpTable;