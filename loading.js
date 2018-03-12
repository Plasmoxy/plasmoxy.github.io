(function() {

  let pathway = new FontFaceObserver('Pathway Gothic One');
  let ostrich = new FontFaceObserver('Ostrich Sans', {weight: 700});

  Promise.all([pathway.load(), ostrich.load()]).then(function () {
    console.log('[loading.js] Fonts loaded, enabling visibility')
    $('#superroot').css('display', 'inline');
  });

})();
