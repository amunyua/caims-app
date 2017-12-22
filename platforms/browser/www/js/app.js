// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
    material: true,
    animatePages:true,
    // preroute: function (view, options) {
    //     if (!this.userLoggedIn()) {
    //         // this.helloWorld();
    //         // view.router.loadPage('/login-screen-page/'); //load another page with auth form
    //         return false; //required to prevent default router action
    //     }
    // },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },

  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
      userLoggedIn:function(){
        return false;
      }
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

// app.loginScreen();
var $$ = Dom7;

// Add view
var mainView = pp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});
