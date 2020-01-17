let bandNumber = 0

const takeNumber = function (bandName) {
  bandNumber++
  return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const genius = takeNumber("I'm a Genius")
console.log(genius)

const blah = takeNumber("Blah")
console.log(blah)