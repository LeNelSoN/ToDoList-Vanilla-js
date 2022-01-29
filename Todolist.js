document.getElementById('press').addEventListener("click", function () {
    let task = document.getElementById("add").value;
    let addTask = '<li><input type="checkbox" name="check" id="' + task + '">' + task + '<button> Supprimer </button> </li>'
    document.getElementById('list')
        .insertAdjacentHTML("afterbegin", addTask)   
    });
document.getElementsByTagName('button').addEventListener("click", function () {
    let ul = this.parentNode;
    ul.removeChild()
})

    