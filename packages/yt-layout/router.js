Router.map(function(){
    this.route('home', function(){
        this.render();
    }, {
        path: '/',
        layoutTemplate: 'ytLayout',
        template: 'ytHome',
        yieldTemplates: {
          'ytHeader': {to: 'header'},
          'ytFooter': {to: 'footer'}
        },
        onBeforeAction: function() {
            Session.set("currentQuery", "");
            GAnalytics.pageview();
            this.next();
        }
    });
});