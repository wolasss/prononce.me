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
            this.next();
        }
    });
});