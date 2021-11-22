let addBtn = document.querySelector(".addImg")
let input = document.querySelector('.inp')
let addTask = document.querySelector('.addTask')
console.log(addTask)

createTask('hello').then((response)=>{
    console.log(response)
})

addBtn.addEventListener('click', () => { 
    const promise = getImages(input.value) 
    promise.then((data)=>{onImagesReceived(data)})})

addTask.addEventListener('click', ()=>{
    const promise = getTasks() 
    promise.then((tasks)=>{onTasksReceived(tasks)})})


function onImagesReceived(data) {
    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.thumbnail
        document.body.append(img)
    });

}

function onTasksReceived(tasks) {
    tasks.forEach(element => {
        let div = document.createElement('div')
        div.innerHTML = element.title;
        document.body.append(div)
    });

}

