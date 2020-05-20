$('#datepicker1').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});


let myArray = [

    { 'name': 'Mihai', 'age': '30', 'birthdate': '11/10/1989' },
    { 'name': 'Mila', 'age': '32', 'birthdate': '10/1/1989' },
    { 'name': 'Paul', 'age': '29', 'birthdate': '10/14/1990' },
    { 'name': 'Denis', 'age': '25', 'birthdate': '11/29/1993' },
    { 'name': 'Tudor', 'age': '27', 'birthdate': '3/12/1991' },
    { 'name': 'Erik', 'age': '24', 'birthdate': '10/31/1995' },
    { 'name': 'Andrei', 'age': '33', 'birthdate': '15/22/1988' },    
]


let searchinput = document.getElementById('search-input');

$(searchinput).on('keyup', function () {
    let value = $(this).val()
    console.log('Value:', value)
    let data = searchTable(value, myArray)
    buildTable(data)
})

buildTable(myArray)

function searchTable(value, data) {
    let filteredData = []

    for (let i = 0; i < data.length; i++) {
        value = value.toLowerCase()
        var name = data[i].name.toLowerCase()

        if (name.includes(value)) {
            filteredData.push(data[i])
        }
    }

    return filteredData;
}

$('th').on('click', function () {
    let column = $(this).data('colname')
    let order = $(this).data('order')
    let text = $(this).html()
    text = text.substring(0, text.length - 1);


    if (order == 'desc') {
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order", "asc");
        text += '&#9660'
    } else {
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order", "desc");
        text += '&#9650'
    }

    $(this).html(text)
    buildTable(myArray)
})


function buildTable(data) {

    var table = document.getElementById('myTable')
    table.innerHTML = ''

    for (let i = 0; i < data.length; i++) {

        let colname = `name-${i}`
        let colage = `age-${i}`
        let colbirth = `birth-${i}`

        let row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                   </tr>`

        table.innerHTML += row
    }
}

