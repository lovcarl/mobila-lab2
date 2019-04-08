document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'startpage') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
    page.querySelector('#about').onclick = function() {
      document.querySelector('#myNavigator').pushPage('about.html', {data: {title: 'About'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  else if (page.id == 'about') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});
