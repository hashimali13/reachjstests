
const axios = require('axios').default;

  

module.exports = async function organiseMaintainers() {
  // TODO
  let maintainers= axios.post("http://ambush-api.inyourarea.co.uk/ambush/intercept",
  {url: "https://api.npms.io/v2/search/suggestions?q=react",
  method: "GET",
  return_payload: true
 }).then((response)=>{
   var maintainers = new Map();
   response.data.content.forEach(element => {
     element.package.maintainers.forEach(main=>{
       
       maintainers.set(main.username,main.username)
     })
   })
   let arr = Array.from(maintainers.keys())
   arr.sort
   arr.sort((a, b) => a.localeCompare(b))

   let finallist = []
   arr.forEach(contributer=>{
     let packs =[]
     response.data.content.forEach(element => {
       element.package.maintainers.forEach(main=>{
         if (main.username ===contributer){
           packs.push(element.package.name)
         } 
       })
     })
     packs.sort((a, b) => a.localeCompare(b))

     finallist.push({username:contributer, packageNames:packs})
   })
   return finallist
 }
 )        
  return maintainers
};
