Package.describe({
  name: 'aramk:q',
  summary: "A tool for making and composing asynchronous promises in JavaScript",
  version: "1.0.1_1",
  git: "https://github.com/aramk/q.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0');
  api.export('Q');
  api.add_files('q.js', ['client', 'server']);
});
