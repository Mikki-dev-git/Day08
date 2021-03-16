// Only chnage code below this
function localScope() {
  var myVariable = "I am here!";
  console.log(myVariable);
}
localScope();

// Only chnage code above this

// myVariable is not defined outside of localScope
if (typeof myVariable != "undefined") {
  console.log("outside localScope", myVariable);
} else {
  console.log("outside localScope UNDEFINED!!!");
}

module.exports = localScope;
