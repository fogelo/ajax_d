let addBtn = document.querySelector(".add")
let input = document.querySelector('.inp')
console.log(addBtn)

addBtn.addEventListener('click', addImg)


function addImg(){
    $.ajax(`https://repetitora.net/api/JS/Images?page=${input.value}&count=1`, {
        success: function (data) {
            console.log('i got response')
            console.log(data)
            data.forEach(element => {
                let img = document.createElement('img')
                img.src = element.thumbnail
                document.body.append(img)
            });
    
        }
    });
    
}
