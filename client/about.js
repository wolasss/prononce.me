Router.map(function(){
    var self = this;

    this.route('ytAbout', function(){
        this.render();
    }, {
        path: '/apropos',
        layoutTemplate: 'ytLayout',
        template: 'ytAbout',
        yieldTemplates: {
          'ytHeader': {to: 'header'},
          'ytFooter': {to: 'footer'}
        }
    });
});