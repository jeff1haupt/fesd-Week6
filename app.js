
// $.ajax({
//     url: "http://dummy.restapiexample.com/api/v1/create",
//     method: "POST",
//     data: 	{"name":"Jeff Haupt","salary":"1000000","age":"46"}
//   }).done( (res) => {console.log(res)});

// $.ajax({
//     url: "http://dummy.restapiexample.com/api/v1/update/4010",
//     method: "PUT",
//     data: {"salary": "75000"}
// }).done( (res) => {console.log(res)});

// $.get("http://dummy.restapiexample.com/api/v1/employee/4010", (data) => {
//     console.log(data);
// });

class Employee {
    constructor(name, salary, age, url) {
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.url = url;
    }

}

class EmployeeService {
    static getAll() {
        return $.get("http://dummy.restapiexample.com/api/v1/employees");
    }

    static getEmployee(id) {
        return $.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
    }

    static addEmployee(employee) {
        return $.ajax({
            url: `${employee.url}`,
            method: "POST",
            data: {"name": `${employee.name}`, "salary": `${employee.salary}`, "age": `${employee.age}`}
        });
    }
}


// const response = EmployeeService.getAll();
// const responseOneEmp = EmployeeService.getEmployee(15);

// response.done( (data) => {
//     console.log(data);
// });

// responseOneEmp.done( (data) => {
//     console.log(data);
// });

let btn = document.getElementById("createEmp");
btn.addEventListener("submit", (e) => {
    let nameValue = document.getElementById("name").value;
    let salaryValue = document.getElementById("salary").value;
    let ageValue = document.getElementById("age").value;
    const employee1 = new Employee(nameValue, salaryValue, ageValue, "http://dummy.restapiexample.com/api/v1/create");
    const resAdd = EmployeeService.addEmployee(employee1);
    console.log(resAdd);
    // $(form).submit( () => { return false});

})




// console.log(resAdd.done( (data) => {
//     console.log(data);
// }));

// EmployeeService.getEmployee(8).done( (d) => {

//     console.log(d.data);
//     let foundEmp = [d.data];
//     console.log(foundEmp);
//     let divRow = "";
//     for (let i = 0; i < foundEmp.length; i++) {
//         console.log(foundEmp[i])
//         divRow = divRow +
//         `
//         <div class="row">
//         <div class="col-md-3">${foundEmp[i].employee_name}</div>
//         <div class="col-md-3">${foundEmp[i].employee_salary}</div>
//         <div class="col-md-3">${foundEmp[i].employee_age}</div>
//         </div>
//         `;
//     }
    
//     let container = document.querySelector(".container");
//     container.innerHTML = divRow;
    
// })