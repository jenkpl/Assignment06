let Ename;
let Eid;
let Eextension;
let Eemail;
let Edepartment;
let btn;

// HANDLE THE LOAD EVENT OF THE WINDOW
const $ = (id) => {
    return document.getElementById(id);
}
    window.addEventListener('load', init);

    function init() {
        btn             = $('btnAddEmployee');

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
// const btn = $('btnAddEmployee');
btn.addEventListener('click', addE );

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function addE() {
window.open("add-employee.html", "popup", "width=100, height=100");



}
}
