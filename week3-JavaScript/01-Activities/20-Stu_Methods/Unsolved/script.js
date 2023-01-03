var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = ["polaris", "facts"]

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
console.log(constellations);

//remove items from planet array
planets.pop()
console.log(planets)

//join constellations and planets to make 
var galaxy = constellations.concat(planets)
console.log(galaxy)

var starUpperCased = star.toUpperCase("facts")
console.log(starUpperCased)