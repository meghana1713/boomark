const tabs = document.querySelectorAll(".tab");//it returns collection of class with class name  of that particular divs tab
const panels = document.querySelectorAll(".panel");//it returns collection of class with class name of that particular divs panel
const btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));//here tab is same as element as tabs returns collection of div elements 
function onTabClick(e){
    tabs.forEach((tab) => {
      
        tab.children[0].classList.remove("border-softRed", "border-b-4");
             console.log(tab.children[0]);
      });


    panels.forEach((panel) => panel.classList.add("hidden"));//for the current div element in class we are adding hidden attribute
    e.target.classList.add("border-softRed", "border-b-4");//when we click on that particular tab which is a div will generate a event object as click is an event trigger in that target oroperty will contains the element details in that add "border-softRed", "border-b-4"in class
    const classString = e.target.getAttribute("data-target"); // as it returns in collection of elements either itt can be one more more elements

    document
    .getElementById("panels")//it returns all the child elements of panel id in  that whatever we click in tabs that elemtents as they specified in array i,e collection as we trigged on tab we are using 0 to targt that one element
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden"); // as we are removing we can display that particular pannel


}
btn.addEventListener("click",navToggle);
function navToggle(){
    btn.classList.toggle("open" );
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
}