let addBtn = document.querySelector(".add")
let input = document.querySelector('.inp')
console.log(input)

addBtn.addEventListener('click', () => { 
    const promise = getImages(input.value) 
    promise.then((data)=>{onDataReceived(data)})})



function onDataReceived(data) {
    console.log('i got response')
    console.log(data)
    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.thumbnail
        document.body.append(img)
    });

}