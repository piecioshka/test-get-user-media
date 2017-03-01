const OPTIONS = {
    video: {
        width: 1920,
        height: 1080
    }
};

function successCallback(stream) {
    let $video = document.querySelector('video');
    $video.srcObject = stream;
    $video.onloadedmetadata = () => {
        $video.play();
    };
}

function errorCallback(err) {
    console.log('The following error occurred: ' + err.name);
}

navigator.getUserMedia(OPTIONS, successCallback, errorCallback);
