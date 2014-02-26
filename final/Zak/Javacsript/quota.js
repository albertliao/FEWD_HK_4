random = require("random");

options = {
    secure: true,       // Make the request secure
    ip: "1.36.52.163" // Get the quota for random.org's server
}

function quotaCallback(quota){
    // Prints the remaining quota bits
    console.log(quota);
}

random.checkQuota(quotaCallback,options)