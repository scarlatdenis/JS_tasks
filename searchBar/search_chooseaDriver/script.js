
let myArray = [

    { 'name': 'Choose a Driver to Replace', '': '', '': '' },
    { 'name': 'Mila P', 'age': '32', 'birthdate': '10/1/1989' },
    { 'name': 'Paul', 'age': '29', 'birthdate': '10/14/1990' },
    { 'name': 'Denis', 'age': '25', 'birthdate': '11/29/1993' },
    { 'name': 'Tudor', 'age': '27', 'birthdate': '3/12/1991' },
    { 'name': 'Erik', 'age': '24', 'birthdate': '10/31/1995' },
    { 'name': 'Andrei', 'age': '33', 'birthdate': '15/22/1988' },  
    { 'name': 'Mihai', 'age': '30', 'birthdate': '11/10/1989' },
    { 'name': 'Mila', 'age': '32', 'birthdate': '10/1/1989' },
    { 'name': 'Paul', 'age': '29', 'birthdate': '10/14/1990' },
    { 'name': 'Denis S', 'age': '25', 'birthdate': '11/29/1993' },
    { 'name': 'Tudor', 'age': '27', 'birthdate': '3/12/1991' },
    { 'name': 'Erik', 'age': '24', 'birthdate': '10/31/1995' },
    { 'name': 'Andrei', 'age': '33', 'birthdate': '15/22/1988' },   
]

buildTable(myArray)

function buildTable(data) {

    let table = document.getElementById('driverList')
    table.innerHTML = ''

    for (let i = 0; i < data.length; i++) {

        let row = `  <option>${data[i].name}</option>                      
                   `
        table.innerHTML += row
    }
}

