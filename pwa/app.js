if ( "serviceWorker" in navigator ){
    navigator.serviceWorker.register("/sw.js")
      .then( (reg)=>{console.log("service worker registered",reg)} )
      .catch( (err)=>{console.log("service worker not registered\n"+err)} ); 
}

if (window.location.protocol === 'http:') {
    window.location.protocol = "https:"
}
