Package.describe({
  summary: "Meteor smart package for to-markdown."
})

Npm.depends({
  "to-markdown": "0.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('tomarkdown.js', 'server');
});
