
 const axios = require('axios').default;
 var semver = require('semver');

 
module.exports = async function countMajorVersionsAbove10() {

  let x =axios.post("http://ambush-api.inyourarea.co.uk/ambush/intercept",
             {url: "https://api.npms.io/v2/search/suggestions?q=react",
             method: "GET",
             return_payload: true
            }).then((response)=>{
              var num =0;
              response.data.content.forEach(element => {
                let a = element.package.version
                if(semver.gte(a,'10.0.0')){
                  num +=1
                }
              })
              return num
            }
            
            )          
  return x
};


