let addBtn = document.querySelector(".addImg")
let input = document.querySelector('.inp')
let addTask = document.querySelector('.addTask')
console.log(addTask)

addBtn.addEventListener('click', () => { 
    const promise = getImages(input.value) 
    promise.then((data)=>{onImagesReceived(data)})})

addTask.addEventListener('click', ()=>{
    const promise = getTasks() 
    promise.then((tasks)=>{onTasksReceived(tasks)})})


function onIamgesReceived(data) {
    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.thumbnail
        document.body.append(img)
    });

}

function onTasksReceived(tasks) {
    tasks.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML = element;
        document.body.append(div)
    });

}

createTask('lern bliatb').then((response)=>{
    console.log(response)
})