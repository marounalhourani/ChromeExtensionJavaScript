let myLeads = []
let odlLeads = []
const tabBtn = document.getElementById("tab-btn")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

tabBtn.addEventListener("click", function()
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
}
)

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

//render the leads in the ul using ulEl.textContent
function render(leads) {
  let listItems = ""
    for(let i = 0; i < leads.length; i++)
       {
        //this is called template string/ template literals
          listItems +=
          `
          <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
          </li>
          `}
          ulEl.innerHTML = listItems
        }


deleteBtn.addEventListener("dblclick", function()
  {
    console.log("hello dbl")
    localStorage.clear()
    myLeads = []
    render(myLeads)  }
)

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  console.log(myLeads)
  render(myLeads)
  inputEl.value = ""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))})


//or we can do it this way
//  ListItems += "<li>" + "<a target='_blank' href='" + myLeads[i] + "'>" + myLeads
// [i] + "</a>" +"</li>"}

// another way to do it
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)

 
    
      






