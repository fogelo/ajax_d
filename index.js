let addBtn = document.querySelector(".addImg")
let input = document.querySelector('.inp')
let addTask = document.querySelector('.addTask')
console.log(addTask)

addBtn.addEventListener('click', () => {
    const promise = getImages(input.value)
    promise.then((data) => { onImagesReceived(data) })
})

addTask.addEventListener('click', () => {
    const promise = getTasks()
    promise.then((tasks) => { onTasksReceived(tasks) })
})


function onImagesReceived(data) {
    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.thumbnail
        document.body.append(img)
    });

}

function onTasksReceived(tasks) {
    document.querySelector('.tasks').innerHTML = ''
    tasks.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.title;
        document.querySelector('.tasks').appendChild(li)
    });
}

deleteTask('2d3ab72f-443d-42ca-b8c5-58818abeea72')
// createTask('hello3').then((response) => {
//     console.log(response)
// })