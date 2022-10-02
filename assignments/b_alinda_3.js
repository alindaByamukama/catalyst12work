// Assignment 3
// Define seven classes using the <this> keyword with atleast
// five parameters and three instances using the <new> keyword

// 1
function Bird(name, habitat, origins, numLegs, capableOfFlight){
    this.name = name
    this.habitat = habitat
    this.origins = origins
    this.numLegs = numLegs
    this.capableOfFlight = capableOfFlight
}
let cockerel = new Bird("Cockerel", "domestic", "Europe", 2, true)
let shoebillStork = new Bird("Shoebill Stork", "wild swamps", "South Sudan to Zambia", 2, true)
let kingfisher = new Bird("Kingfisher", "deep forests", "Africa, Asia and sometimes Europe", 2, true)
console.log(`Name: ${cockerel.name}, Habitat: ${cockerel.habitat}, Origins: ${cockerel.origins}, NumberOfLegs:${cockerel.numLegs}, CapableOfFlight:${cockerel.capableOfFlight}`)

// 2
function Aircraft(name, engine, company, carryWhat, waterFriendly){
    this.name = name
    this.engine = engine
    this.company = company
    this.carryWhat = carryWhat
    this.waterFriendly = waterFriendly
}
let amphibiousAircraft = new Aircraft("CL-215T", "engine and propeller system", "Canadair", "passengers &/or cargo", true)
let jetAircraft = new Aircraft("F-22A Raptor", "air-breathing jet engines", "Lockheed Martin", "passengers &/or cargo, false")
let rotorcraftAircraft = new Aircraft("AS332 Super Puma H215", "four bladed - twin engine", "Aerospatiale", "passengers", false)
console.log(`Name: ${jetAircraft.name}, Habitat: ${jetAircraft.engine}, Origins: ${jetAircraft.company}, carryWhat: ${jetAircraft.carryWhat}, waterFriendly: ${jetAircraft.waterFriendly}`)

// 3
function Rotorcraft(name, howItFlies, origins, year, inventor){
    this.name = name
    this.howItFlies = howItFlies
    this.origins = origins
    this.year = year
    this.inventor =inventor
}
let autogyro = new Bird("Autogyro", "uses an unpowered rotor, and an engine powered propeller", "Madrid, Spain", 1920, "Juan de la Cierva")
let gyrodyne = new Bird("Gyrodyne", "the rotor is driven by its engine for takeoff and landing, hovers like a helicopter", "United Kingdom", 1936, "Dr. James Allan Jamieson Bennet")
let rotorkite = new Bird("Rotorkite", "relies on lift created by sets of rotors", "Glasgow, Scotland", 1891, "Thomas Ansboro")
console.log(`Name: ${autogyro.name}, HowItFlies: ${autogyro.howItFlies}, Origins: ${autogyro.origins}, Year: ${autogyro.year}, Inventor: ${autogyro.inventor}`)

// 4
function Jet(name, types, howItFlies, benefits, year){
    this.name = name
    this.types = types
    this.howItFlies = howItFlies
    this.benefits = benefits
    this.year = year
}
let jetAirliner = new Jet("de Havilland Comet", "Jet Airliner", "powered by jet engines", "early jet airliners had much lower interior levels of noise and vibration", 1950)
let jumboJet = new Jet("Boeing or Airbus", "Jumbo Jet", "powered by four jet engines - twinjet design", "efficiency, passenger and cargo space", 1980)
let veryLightJet = new Jet("Cirrus Vision SF50", "powered by a single engine", "lower operating costs - acting as an \'air taxi\'", 2008)
console.log(`Type: names: ${veryLightJet.names}${veryLightJet.types}, HowItFlies: ${veryLightJet.howItFlies}, benefits: ${veryLightJet.benefits}, year: ${veryLightJet.year}`)

// 5
function Amphibious(name, howItFlies, origins, year, inventor){
    this.name = name
    this.howItFlies = howItFlies
    this.origins = origins
    this.year = year
    this.inventor =inventor
}
let seaplane = new Amphibious("Seaplane", "a powered fixed-wing aircraft, that can takeoff and land on water", "Marseilles, France", "Alphonse Penaud", 1876)
let amphibiousHelicopter = new Amphibious("Amphibious Helicopter", "designed with a water-proof hull or floats", "U.S.A", "Sikorsky" , 1960)
let floatPlane = new Amphibious("Floatplane", "floats mounted under the fuselage to provide buoyancy, takesoff and lands on water only", "U.S.A", "Glenn H. Curtis", "21st century")
console.log(`Name: ${seaplane.name}, HowItFlies: ${seaplane.howItFlies}, Origins: ${seaplane.origins}, Inventor: ${seaplane.inventor}, Year: ${seaplane.year}`)

// 6
function Aerostats(type, origins, howItFlies, year,inventor){
    this.type = type
    this.origins = origins
    this.howItFlies = howItFlies
    this.year = year
    this.inventor = inventor
}
let balloon = new Aerostats("Hot Air Ballon", "Invented in 1783 by Joseph and Stephen Montgolfier", "heating the air inside the ballon, causes the ballon to float upwards", "Joseph and Stephen Montgolfier", 1783)
let dirigible = new Aerostats("Blimp", "Built in 1852 by Henri Giffard", "a gas filled bag with a propeller, powered with a steam engine", "Henri Giffard", 1852)
let airship = new Aerostats("Zeppelin", "Developed by Count Ferdinand von Zeppelin in the 20th century", "propelled by several engines, mounted in gondolas or engine cars, which were attached to the outside of a structural framework", "Count Ferdinand von Zeppelin", 1893)
console.log(`Type: ${balloon.type}, Origins: ${balloon.origins}, HowItFlies: ${balloon.howItFlies}, Inventor: ${balloon.inventor}, Year: ${balloon.year}`)

// 7
function Military(name, type, usage, firstUsed, year){
    this.name = name
    this.type = type
    this.usage = usage
    this.firstUsed = firstUsed
    this.year = year
}
let attackDrones = new Military("Unmanned Combat Aerial Vehicles", "combat", "targeted attacks and aerial interventions", "Operation Aphrodite 1944 - U.S.A", 1940)
let militaryTransport = new Military("C-17 Globemaster III", "logistics", "transport troops and war supplies", "Used by several military organizations world wide", 1995)
let earlyWarning = new Military("Saab 340 AEW&C", "tactical", "direct fighters to their target locations", "Used by mostly Swedish and Thai Air Forces", 1994)
console.log(`Name: ${attackDrones.name}, Type: ${attackDrones.type}, Usage: ${attackDrones.usage}, firstUsed: ${attackDrones.firstUsed}, Year: ${attackDrones.year}`)