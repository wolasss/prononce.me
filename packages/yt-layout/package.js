Package.describe({
  summary: "Youtube app layout"
});

Package.on_use(function (api) {
	api.use(['iron:router', 'templating'], 'client');
	api.use(['yt', 'yt-ui', 'tap:i18n'], ['client', 'server']);

	api.add_files(['layout.html'], 'client');
	api.add_files(['router.js'], 'client');
});