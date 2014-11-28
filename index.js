(function(){
  var css = "@font-face{font-family:'Block';src:url('http://www.raymondstock.net/cas/BLOKKNeue-Regular.ttf')  format('truetype');} body{font-size: 0.6em !important;letter-spacing: -1px; color: #000 !important;}",
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
 
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
 
  var elems = document.getElementsByTagName('*');
  for( var i = 0; i < elems.length; i++) {
    elems[i].style.setProperty('font-family', 'Block', 'important');
  }
 
  var imgs = document.getElementsByTagName('img');
  for(var i = 0; i < imgs.length; i++) {
    var w = imgs[i].width;
    var h = imgs[i].height;
    imgs[i].src = "http://placehold.it/" + w + "x" + h + "/000000/ffffff";
  }
})();
