var add = document.getElementById("add");
const btn1 = document.getElementById("press")
// if click on the button "à faire" add an element "task" in ul
document.getElementById('press').addEventListener("click", function () {
    let task = add.value
    let addTask = '<li><input type="checkbox" name="check" id="' + task + '">' + task + '<button> Supprimer </button> </li>'
    document.getElementById('list')
        .insertAdjacentHTML("afterbegin", addTask)   
    });
// disable button "à faire" if input "text" is empty
document.getElementById("add").addEventListener("keypress", () => {
    if (add.value.length >= 1) btn1.disabled = false
    else btn1.disabled = true;
})

// document.getElementsByTagName('button').addEventListener("click", function () {
//     let ul = this.parentNode;
//     ul.removeChild()
// })

    