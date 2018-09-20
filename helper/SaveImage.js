module.exports = {
    saveImage: (base64Data, userId) => {        
        // Regular expression for image type:
        // This regular image extracts the "jpeg" from "image/jpeg"
        var imageTypeRegularExpression = /\/(.*?)$/;

       
        
        var imageBuffer = decodeBase64Image(base64Data);
        var userUploadedFeedMessagesLocation = '../logo/'+userId;

       
        // This variable is actually an array which has 5 values,
        // The [1] value is the real image extension
        var imageTypeDetected = imageBuffer
            .type
            .match(imageTypeRegularExpression);

        var userUploadedImagePath = 'views/assets/img/'+ userId +
            '.' +
            imageTypeDetected[1];

        // Save decoded binary image to disk
        try {
            require('fs').writeFile(userUploadedImagePath, imageBuffer.data,
                function () {
                    console.log('Saved to disk image attached by user:', userUploadedImagePath);
                });
        }
        catch (error) {
            console.log('ERROR:', error);
        }
    }
}

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}