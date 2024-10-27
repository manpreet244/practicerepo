function getData(){
    return new Promise(resolve , reject)=>{
        const url ="";
        fetch(url)
        .then((res)=>{
            return res.json
        }).then((res)=>{
        resolve(res)
        })
    }
}

p3.then(()=>{
    const p2 = getData(2 , 2000)
})