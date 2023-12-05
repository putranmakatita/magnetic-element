const bc = new BroadcastChannel('BJORN');

bc.addEventListener('message', (e) => {
    console.log(e);
    let myData = { x: window.screenX, y: window.screenY, left: window.screenLeft };
    const data = e.data;

    // calculation of an angle
    const deltax = myData.x - data.x;
    let deltay = myData.y - data.y;
    let rad = Math.atan2(deltay, deltax);
    let deg = rad * (360 / Math.PI);

    const arrowE = document.querySelector('#arrow');
    arrowE.style.rotate = deg + 'deg';
});

var poster = setInterval(function () {
    let dataPost = {
        x: window.screenX,
        y: window.screenY,
        left: window.screenLeft
    };
    console.log(dataPost);
    bc.postMessage(dataPost);
}
    , 1000);



