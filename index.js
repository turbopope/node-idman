const exec = require('child_process').execSync;
const path = require('path');

module.exports = function(repo, algorithm = 'default', ...args) {
  const stdout = exec(`${__dirname}${path.sep}idman ${repo} ${algorithm} ${args.join(' ')}`, { encoding: 'utf-8' });
  return JSON.parse(stdout);
}
