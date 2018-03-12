
(function() {

  let pathway = new FontFaceObserver('Pathway Gothic One');
  let ostrich = new FontFaceObserver('Ostrich Sans', {weight: 700});

  Promise.all([pathway.load(), ostrich.load()]).then(function () {
    setTimeout(function() {
      console.log('[loading.js] Fonts loaded, enabling visibility')
      $('#loading_div').css('display', 'none');
      setTimeout(function() {
        $('#superroot').css('display', 'inline');
      }, 100);
    }, 3000);
  });

})();
