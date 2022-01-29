var add = document.getElementById("add");
const btn1 = document.getElementById("press")
// if click on the button "à faire" add an element "task" in ul
document.getElementById('press').addEventListener("click", function () {
    let task = add.value
    let hide = "this.style.display='none'"
    let addTask = 
    `<li ondblclick=${hide}>${task}</li>`

    document.getElementById('list')
        .insertAdjacentHTML("afterbegin", addTask)   
    });
// disable button "à faire" if input "text" is empty
document.getElementById("add").addEventListener("keypress", () => {
    if (add.value.length >= 1) btn1.disabled = false
    else btn1.disabled = true;
})