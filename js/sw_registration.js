if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./sw.js')
    .then(function() {
    console.log('Registration worked!');
  })
      .catch(function() {
          console.log('Error during registration!');
      });
  }