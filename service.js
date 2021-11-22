function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response)=>{
        return response.data
    })

}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=220391`);
    return promise.then((response)=>{
        return response.data
    })

}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=220391&title=${title}`);
    return promise.then((response)=>{
        return response.data
    })

}
