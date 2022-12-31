// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
AWS.config.update({region: process.env.AWSRegion});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2022-12-10'});

// Create the parameters for calling listObjects
var bucketParams = {
    Bucket : process.env.S3Bucket
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});