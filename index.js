const exec = require('child_process').execSync;

module.exports = function(repo, algorithm = 'default', ...args) {
  const stdout = exec(`./idman ${repo} ${algorithm} ${args.join(' ')}`, { encoding: 'utf-8' });
  return JSON.parse(stdout);
}
