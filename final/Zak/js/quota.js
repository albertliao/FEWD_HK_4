random = require("random");

options = {
    secure: true,       // Make the request secure
    ip: "222.167.158.235" // Get the quota for random.org's server
}

function quotaCallback(quota){
    // Prints the remaining quota bits
    console.log(quota);
}

random.checkQuota(quotaCallback,options)