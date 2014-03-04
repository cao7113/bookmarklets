//Note: Can get below by: build-shortlet this js-file
//
//javascript:(function(b,f){if(window.bookmarklet===undefined||window.bookmarklet.launch===undefined){var s=document.createElement('script');s.type='text/javascript';s.src=b;if(!document.attachEvent)s.onload=function(){window.bookmarklet.launch(f)};else s.onreadystatechange=function(){if(s.readyState==='complete'||s.readyState==='loaded'){window.bookmarklet.launch(f);s.onreadystatechange=null}};document.body.appendChild(s)}else window.bookmarklet.launch(f)})('../bookmarklet.js','try-font.js')


(function (b, f) {
  if (window.bookmarklet === undefined || window.bookmarklet.launch === undefined) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = b;

    if (!document.attachEvent) {
      s.onload = function () {
        window.bookmarklet.launch(f);
      }
    } else {
      s.onreadystatechange = function () {
        if (s.readyState === 'complete' || s.readyState === 'loaded') {
          window.bookmarklet.launch(f);
          s.onreadystatechange = null;
        }
      }
    }
    document.body.appendChild(s);
  } else {
    window.bookmarklet.launch(f);
  }
})('bookmark-framework-js-file-uri','your-bookmarklet-app-option-js-file-uri')
