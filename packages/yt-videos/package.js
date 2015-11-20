Package.describe({
    summary: "package"
});

Package.on_use(function (api) {
    var both = ['client', 'server'];
    api.use(['yt', 'tap:i18n', 'templating', 'reactive-var', 'session'], both);

    api.add_files('common/model/model.js', both);
    api.add_files('client/routes/router.js', 'client');

    api.add_files('client/model/model.js', 'client');
    api.add_files('client/model/events.js', 'client');

    api.add_files('server/model/model.js', 'server');
    api.add_files('server/methods/methods.js', 'server');
    api.add_files('server/publish/publish.js', 'server');

    api.add_files('client/subscriptions/subscriptions.js', 'client');

    api.add_files('client/views/video.html', 'client');
    api.add_files('client/views/video.js', 'client');

    api.add_files('client/views/video_list.html', 'client');
    api.add_files('client/views/video_list.js', 'client');


    api.add_files([
        'locales/en.i18n.json',
        'locales/fr.i18n.json'
    ], both);
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers'], ['client']);
});