function empAdd() {
    let popwidth = 800;
    let popheight = 700;  // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    window.resizeTo( popwidth, popheight);  // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.moveTo((window.screen.width - popwidth) / 2, (window.screen.height - popheight) / 2);
}  // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.addEventListener('load', empAdd);  // HANDLE THE LOAD EVENT OF THE WINDOW

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => {
    return document.getElementById(id);
};
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// let btn = window.document.getElementById('Xcancel');
// btn.addEventListener('click', closeIt);

// function closeIt() {
//     window.close();
// };



// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
const form = document.getElementById('eForm');
    form.addEventListener('submit', (e) => {

        e.preventDefault();
    
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        let idU     = $('Fid').value;
        let nameU   = $('Fname').value;
        let emailU  = $('Femail').value;
        let extU    = $('Fextension').value;
        let deptU   = $('Fdepartment').value;

        console.log(`ID:`, idU);
        console.log(`Name:`, nameU);
        console.log(`Extension:`, extU);
        console.log(`Email:`, emailU);
        console.log(`Department:`, deptU);
        window.close();
   
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
var out = window.opener.document.getElementById('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
out.innerHTML = "<br><br>Name:" + Ename<br>  + "Id:" + Eid<br> + "Extension:" + Eextension<br>  + "Email:"+ Eemail;
// CLOSE THE POPUP
window.close();
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
});




    
