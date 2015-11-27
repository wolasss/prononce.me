Router.map(function(){
    var self = this;

    this.route('ytCaptions', function(){
        this.render();
    }, {
        waitOn: function(){
            return Meteor.subscribe("captions", this.params.q);
        },
        onBeforeAction: function() {
            Session.set("currentCaption", 0);
            Session.set("currentQuery", this.params.q);
            this.render();
        },
        data: function() {
            var _self = this;

            var highlightKeyword = function(doc) {
                var query = _self.params.q;
                var text = doc.text;
                query = query.replace(/[\'\"]/gi, ""); //support phrases
                
                doc.text = doc.text.replace(new RegExp(query, "ig"), "<strong>"+query+"</strong>");

                return doc;
            };

            return {
                query: _self.params.q,
                captions: YT_APP.Captions.find({}, {transform: highlightKeyword})
            };
        },
        path: '/pronounce/:q',
        layoutTemplate: 'ytLayout',
        template: 'ytVideoList',
        yieldTemplates: {
          'ytHeader': {to: 'header'},
          'ytFooter': {to: 'footer'}
        }
    });
});