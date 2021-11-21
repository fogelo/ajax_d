let a = 5
$.ajax('https://repetitora.net/api/JS/Images', {
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
a = 8
console.log(a);
