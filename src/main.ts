import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

window.onorientationchange = function(event) {
    var mvp = document.getElementById('myViewport');
    var dw  = "width=" + screen.width.toString();
    if (!window.matchMedia("(orientation: landscape)").matches) {
      mvp.setAttribute('content','width=768');
    }
    else{
    mvp.setAttribute('content',dw);
    }
};

window.onload = function() {
  var mvp = document.getElementById('myViewport');
  var dw  = "width=" + screen.width.toString();
  if (window.matchMedia("(orientation: landscape)").matches) {
    mvp.setAttribute('content','width=768');
  }
  else{
  mvp.setAttribute('content',dw);
  }
};


