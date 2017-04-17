var Execa = require("execa");
var FindRoot = require("find-root");
var Fs = require("fs");
var Path = require("path");

var cwd = process.cwd();
var rootDir = FindRoot(cwd);
var srcPacksDir = Path.resolve(__dirname, "packages");

/**
 * Creates a symlink for each native package.
 * @param dstPacksDir - Synlinks' output dir. Defaults to 'packages' dir.
 */
function linkPackages(dstPacksDir) {
  if (!dstPacksDir) {
    dstPacksDir = Path.resolve(rootDir, "packages");
  }
  else {
    dstPacksDir = Path.resolve(cwd, dstPacksDir);
  }

  // Ensure destination dir
  try {
    Fs.mkdirSync(dstPacksDir);
  }
  catch (_) {}

  var packNames = Fs.readdirSync(srcPacksDir);

  // Ensure symlinks
  packNames.forEach(function (packName) {
    var dstPackDir = Path.resolve(dstPacksDir, packName);
    var linkPath = Path.relative(dstPacksDir, Path.resolve(srcPacksDir, packName));

    try {
      Fs.symlinkSync(linkPath, dstPackDir);
    }
    catch (_) {}
  });

  console.log();
  console.log("Packages have been successfully linked at:")
  console.log();
  console.log("    " + dstPacksDir);
  console.log();
}

module.exports = {
  link: linkPackages
};
