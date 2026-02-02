let eleHeader = document.createElement('header');
let headerLeft = document.createElement('div');
let headerRight = document.createElement('div');
let logospan = document.createElement('span');
let logodesc = document.createTextNode('Elzero');
let RightList = document.createElement("ul");






document.body.appendChild(eleHeader);
eleHeader.appendChild(headerLeft);
headerLeft.appendChild(logospan);
logospan.appendChild(logodesc);
eleHeader.appendChild(headerRight);
headerRight.appendChild(RightList);




logospan.style.color = "green";
logospan.style.fontWeight = 'bold';
logospan.style.fontSize = '20px' ;
RightList.style.listStyle = 'none';
// style header
Object.assign(eleHeader.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0"
});
 Object.assign(RightList.style, {
    display : 'flex',
    gap : '15px',
    
 })   



let navarr = ['home', 'about', 'service', 'contact'];

for (let i = 0; i < navarr.length; i++) {
  let li = document.createElement("li");
  li.textContent = navarr[i];
  RightList.appendChild(li);
};

// finised head



// start main 

// ===== MAIN =====
let main = document.createElement('div');
document.body.appendChild(main);

// style main
Object.assign(main.style, {
  backgroundColor: "#ededed",
  minHeight: "100vh",
  padding: "10px",
  display: "flex",
  flexWrap: "wrap",       // allow wrapping
  gap: "10px",            // spacing between boxes
  justifyContent: "flex-start"
});

// ===== CREATE 15 BOXES =====
for (let i = 1; i <= 15; i++) {
  let box = document.createElement('div');
  let boxcontent = document.createElement('h2');
  let boxparagraph = document.createElement('p');

  boxcontent.textContent = ` ${i}`;
  boxparagraph.textContent = "product";

  box.appendChild(boxcontent);
  box.appendChild(boxparagraph);
  main.appendChild(box);

  // style each box
   Object.assign(box.style, {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    boxSizing: "border-box",
    minHeight: "150px",
    width: "calc(33.333% - 6.666px)"  // ✅ width minus small part of gap
  });
}



