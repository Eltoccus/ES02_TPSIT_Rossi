let parser = new DOMParser();

let xmlDoc = parser.parseFromString(xmlString, "text/xml");

let root = xmlDoc.documentElement;

console.log("Elmento radice: ", root.nodeName);

let dipartimenti = root.childNodes;
console.log(dipartimenti);

dipartimenti.forEach(dipartimenti =>{

})