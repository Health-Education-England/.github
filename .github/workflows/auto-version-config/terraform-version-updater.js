const moduleVersionRegex = /(?<prefix>\sModuleVersion = ")(?<version>\d+.\d+.\d+)(?<suffix>"\s)/

module.exports.readVersion = function (contents) {
  return contents.match(moduleVersionRegex).groups.version;
}

module.exports.writeVersion = function (contents, version) {
  return contents.replace(moduleVersionRegex, `$<prefix>${version}$<suffix>`)
}
