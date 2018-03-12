document.fonts.ready.then(function() {
  console.log('[loading.js] Fonts loaded, enabling visibility')
  $('#superroot').css('display', 'inline');
});
