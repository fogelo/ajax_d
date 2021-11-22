let addBtn = document.querySelector(".add")
let input = document.querySelector('.inp')
console.log(input)

addBtn.addEventListener('click', () => { getImages(input.value, onDataReceived) })


function onDataReceived(data) {
    console.log('i got response')
    console.log(data)
    console.log('pageNumber: ', pageNumber);
    data.forEach(element => {
        let img = document.createElement('img')
        img.src = element.thumbnail
        document.body.append(img)
    });

}