// Assignment
// Define three functions with parameters that invoke each other.

// function one return a name
function one(name) {
    return("Hello, my name is " + name + " " )
}
// one("Alinda")

// function two returns an activity
function two(activity) {
    return(one("Alinda") + activity)
}
// two(" and I enjoy software development")
// function three returns a reason
function three(reason) {
    console.log(two("and I enjoy software development,") + reason + " ")
}
three(" because it is awesome!")
