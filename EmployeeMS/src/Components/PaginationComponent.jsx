import React, { useEffect, useState } from "react";
import employeeService from "../../services/employeeService";

function Employee() {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(10);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetchEmployees();
	}, [currentPage, searchQuery]);

	const fetchEmployees = async () => {
		try {
			const params = {
				page: currentPage,
				limit: recordsPerPage,
				search: searchQuery,
			};
			const response = await employeeService.getAllEmployees(params);
			setEmployees(response.data);
			setLoading(false);
		} catch (error) {
			setError("Error fetching employee data");
			setLoading(false);
		}
	};

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
	};

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	// Calculate pagination values
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = employees.slice(indexOfFirstRecord, indexOfLastRecord);
	const totalPages = Math.ceil(employees.length / recordsPerPage);

	return (
		<div className="employee-container">
			<h2>Employees</h2>
			<div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchQuery}
					onChange={handleSearch}
					className="search-input"
				/>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Department</th>
						<th>Position</th>
					</tr>
				</thead>
				<tbody>
					{currentRecords.map((employee) => (
						<tr key={employee.employee_id}>
							<td>{employee.employee_id}</td>
							<td>{employee.first_name}</td>
							<td>{employee.last_name}</td>
							<td>{employee.email}</td>
							<td>{employee.department_id}</td>
							<td>{employee.position_id}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination">
				{Array.from({ length: totalPages }, (_, index) => {
					const pageNumber = index + 1;
					if (pageNumber !== currentPage) {
						return (
							<button
								key={index}
								onClick={() => handlePageChange(pageNumber)}
								className="pagination-button"
							>
								{pageNumber}
							</button>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
}

export default Employee;