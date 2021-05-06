
 const axios = require('axios').default;

module.exports = async function oldestPackageName() {
  // TODO
  let name = axios.post("http://ambush-api.inyourarea.co.uk/ambush/intercept",
  {url: "https://api.npms.io/v2/search/suggestions?q=react",
  method: "GET",
  return_payload: true
  }).then((response)=>{
    var oldestdate;
    var oldest;
    response.data.content.forEach(element => {
      if(oldestdate === undefined){
        oldestdate = element.package.date
        oldest = element.package.name
      }
      if(element.package.date<oldestdate){
        oldestdate =element.package.date 
        oldest = element.package.name

      }
    })
    return oldest
  }

)                  
  return name
};
