import EmployeeCard from "../Atoms/EmployeeCard";
import employee from "../../Data/employee";

function createEmployee(employee) {
    return <EmployeeCard
                key={employee.id}
                image={employee.img}
                name={employee.name}
                position={employee.position}
            />
}

function EmployeeList() {
    return(
        <div className="flex flex-row sm:justify-items-center space-x-2 sm:space-x-2 sm:px-1 overflow-hidden ">
            {employee.map(createEmployee)}
        </div>
    )
}

export default EmployeeList;