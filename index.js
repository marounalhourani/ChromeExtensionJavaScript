let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderLeads()
}


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  console.log(myLeads)
  renderLeads()
  inputEl.value = ""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))



     
})

//render the leads in the ul using ulEl.textContent
function renderLeads() {
    let listItems = ""
      for(let i = 0; i < myLeads.length; i++)
         {
          //this is called template string/ template literals
            listItems +=
            `
            <li>
              <a target='_blank' href='${myLeads[i]}'>
                  ${myLeads[i]}
              </a>
            </li>
            `
            ulEl.innerHTML = listItems
//or we can do it this way
//  ListItems += "<li>" + "<a target='_blank' href='" + myLeads[i] + "'>" + myLeads
// [i] + "</a>" +"</li>"}

// another way to do it
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)

          }}
    
      






