var c = ()=> {
    var w = window.document.documentElement.clientWidth;
    var n = 10*(w/320)>40 ? 40 + 'px' : 10*(w/320) + 'px';
    console.log(w);
    console.log(n);
    window.document.documentElement.style.fontSize = n;
}
window.addEventListener('load', c);
window.addEventListener('resize', c);