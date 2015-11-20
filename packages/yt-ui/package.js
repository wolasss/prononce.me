Package.describe({
  summary: "YouTube app ui"
});

Package.on_use(function (api) {
	api.use(['fourseven:scss', 'twbs:bootstrap'], ['client']);
	
	api.add_files(['styles/styles.scss'], 'client');
});