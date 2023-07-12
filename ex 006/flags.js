function getFlag(flagName) {
    const index = process.argv.indexOf(flagName) + 1
    return process.argv[index]
}
module.exports = getFlag;