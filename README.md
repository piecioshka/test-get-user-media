# test-get-user-media

:ledger: Testing `navigator.getUserMedia`

## Demo 🎉

<https://piecioshka.github.io/test-get-user-media/>

## HTML: `index.html`

```html
<link rel="stylesheet" href="main.css">
<video></video>
<script src="main.js"></script>
```

## CSS: `main.css`

```css
html, body, video {
    background: black;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
```

## JavaScript: `main.js`

```javascript
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
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
