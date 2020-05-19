let driver = ['Ion Marcus', 'Tudor Dumbrava', 'Jora Cardan', 'Valera Sifon', 'Maria Doba', 'Toader Mihai'];




function searchFunction() {

    let input, filter, ul, li, a, i, txtValue;


    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "";
        } else {

            li[i].style.display = "none";
        }
    }
}