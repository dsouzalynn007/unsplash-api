let list = document.querySelector('ul')
let gridData = document.querySelector('main')

list.addEventListener('click',e=>{
    let value=e.target.innerText
    console.log(value);
    getPhotos(value)
})
async function getPhotos(value){
    let accessKey='pI1B6lxdYfkHulw-4nq2mVulUiJGBTJe6kSEWRx2zl0'
    let baseUrl=`https://api.unsplash.com/search/collections?client_id=${accessKey}&&page=20&query=${value}`
    let data=await window.fetch(baseUrl)
    let response=await data.json()
    let results=response.results
    let output=''
    for(let ele of results){
    output+=
    `<div>
    <img src="${ele.preview_photos[0].urls.thumb}" alt="${ele.title}">
    <a href="${ele.links.html}" target="_blank">view more</a>
    </div>`
    }
gridData.innerHTML=output

    gridData.addEventListener('click',e=>{
        console.log(e);
        if(nodeName='IMG'){
            let individualImg=e.target
            console.log(individualImg);
            individualImg.classList.toggle('change')
        }
        else{
            
        }
    })
}