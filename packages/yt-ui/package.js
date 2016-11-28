Package.describe({
	summary: "YouTube app ui"
});

Package.on_use(function(api) {
	api.use(['fourseven:scss', 'twbs:bootstrap'], ['client']);

	api.addFiles(['styles/font-awesome/_variables.scss',
		'styles/font-awesome/_animated.scss',
		'styles/font-awesome/_bordered-pulled.scss',
		'styles/font-awesome/_core.scss',
		'styles/font-awesome/_fixed-width.scss',
		'styles/font-awesome/_icons.scss',
		'styles/font-awesome/_larger.scss',
		'styles/font-awesome/_list.scss',
		'styles/font-awesome/_mixins.scss',
		'styles/font-awesome/_path.scss',
		'styles/font-awesome/_rotated-flipped.scss',
		'styles/font-awesome/_stacked.scss',
		'styles/font-awesome/_variables.scss'
	], 'client', {
		isImport: true
	});
	api.addFiles(['styles/font-awesome/font-awesome.scss'], 'client', {
		isImport: true
	});
	api.addFiles(['styles/_variables.scss', 'styles/_mixins.scss', 'styles/_forms.scss', 'styles/_buttons.scss'], 'client', {
		isImport: true
	});
	api.add_files(['styles/styles.scss'], 'client');
});