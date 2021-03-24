// HANDLE THE LOAD EVENT OF THE WINDOW
//window.addEventListener('load', init);
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let popwidth = 800;
let popheight = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo( popwidth, popheight);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(
    window.screen.availWidth / 2,
    window.screen.availHeight / 2
  );
//Use window.moveTo() to center the popup window within the web page.
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => {
    return document.getElementById(id);
};
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
const form = document.getElementById('empForm');
    form.addEventListener('submit', (e) => {

        e.preventDefault();
    
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
let idU;
let nameU;
let emailU;
let extU;
let deptU;
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    //function init() {
   
        // let idU     = $('Fid');
        // let nameU   = $('Fname');
        // let emailU  = $('Femail');
        // let extU    = $('Fextension');
        // let deptU   = $('Fdepartment');
        // console.log(`ID:`, idU);
        // console.log(`Name:`, nameU);
        // console.log(`Extension:`, extU);
        // console.log(`Email:`, emailU);
        // console.log(`Department:`, deptU);
    //}});
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
//const out = $('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
//output.innerHTML = (`Name:` + Ename<br> `Eid` + Eid<br> `Eextension` + Eextension<br>);
// CLOSE THE POPUP
window.close();
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
//Use window.opener to select the <output> tag from the main page in order to set the data with the values of the form elements entered into the ‘Add Employee’ form.


    })
