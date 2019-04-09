document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'startpage') {
    page.querySelector('#push-button1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page1.html', {data: {title: 'Netflix'}});
    };
    page.querySelector('#push-button2').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'SvtPlay'}});
    };
    page.querySelector('#push-button3').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page3.html', {data: {title: 'HBO'}});
    };
    page.querySelector('#about').onclick = function() {
      document.querySelector('#myNavigator').pushPage('about.html', {data: {title: 'About'}});
    };
  } else if (page.id === 'page1') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
  
  else if (page.id === 'page3') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  else if (page.id == 'about') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

//testar!
