onmessage=function(e){
    let from=parseInt(e.data.from);
    let to=parseInt(e.data.to);
       gop= from*to;
    this.postMessage(gop);
}