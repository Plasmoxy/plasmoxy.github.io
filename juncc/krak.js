var window_onload_before = window.onload;
window.onload = function() {
  window_onload_before(); // call old version so earlier code doesn't get removed
  var el = document.getElementsByTagName('div');
  var size = el.length;
  el[size-1].style.display = 'none';
}
