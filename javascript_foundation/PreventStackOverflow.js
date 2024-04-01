// How to prevent stack overflow using recursion?
const list = new Array(120000).join('1.1').split('.');
function removeItemsFromList() {
   var item = list.pop();

   if (item) {
       removeItemsFromList();
   } 
};
removeItemsFromList();


// ANSWER:
// use JS Runtime instead
const list2 = new Array(120000).join('1.1').split('.');

function removeItemsFromList() {
   var item = list2.pop();

   if (item) {
       setTimeout( removeItemsFromList, 0 );
   } else {
       console.log("done");
   }
};

removeItemsFromList();

console.log("done");
