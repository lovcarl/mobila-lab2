document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'startpage') {
    page.querySelector('#push-button1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page1.html', {data: {title: 'Page 1'}});
    };
    page.querySelector('#push-button2').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
    page.querySelector('#push-button3').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'Page 3'}});
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
