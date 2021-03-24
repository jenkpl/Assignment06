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
        Ename           = $('name');
        Eid             = $('id');
        Eextension      = $('extension');
        Eemail          = $('email');
        Edepartment     = $('departmentt');

   

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
// const btn = $('btnAddEmployee');
btn.addEventListener('click', addE );

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
function addE() {
window.open("/add-employee.html");

window.resizeTo(800, 700);
window.moveTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
}
}
