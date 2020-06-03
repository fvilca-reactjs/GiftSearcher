const apikey='ABDrJON4XeyVJm9Uk0gMBaMF6C9zb73X'

const service = (keyword='panda') =>{
    const API ='https://api.giphy.com/v1/gifs/search?api_key='+apikey+'&q='+keyword+'&limit=25&offset=0&rating=G&lang=en' 

    return  fetch(API)
    .then(res=>res.json())    
    .then(response=>{
      const {data=[]} = response
        return data
    })
}

export default service;