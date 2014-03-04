//Note: Can get below by: build-shortlet this js-file
//
//javascript:(function(b){if(window.bookmarklet===undefined||window.bookmarklet.executeMyBookmarklet===undefined){var s=document.createElement('script');s.type='text/javascript';s.src=b;if(!document.attachEvent)s.onload=function(){window.bookmarklet.executeMyBookmarklet()};else s.onreadystatechange=function(){if(s.readyState==='complete'||s.readyState==='loaded'){window.bookmarklet.executeMyBookmarklet();s.onreadystatechange=null}};document.body.appendChild(s)}else window.bookmarklet.executeMyBookmarklet()})('http://localhost:3000/jquery1.js');
(function(b){
  if(window.bookmarklet === undefined || window.bookmarklet.executeMyBookmarklet === undefined) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = b;
    if(!document.attachEvent) {
      s.onload = function () {
        window.bookmarklet.executeMyBookmarklet();
      }
    }else{
      s.onreadystatechange = function () {
        if (s.readyState === 'complete' || s.readyState === 'loaded') {
          window.bookmarklet.executeMyBookmarklet();
          s.onreadystatechange = null;
        }
      }
    }
    document.body.appendChild(s);
  } else {
    window.bookmarklet.executeMyBookmarklet();
  }
})('http://localhost:3000/jquery1.js')
//})('a-bookmark-app-all-in-on-file-uri.js')
