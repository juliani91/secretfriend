// shuffling the array names   it repeats on 0 so change
function shuffleArray(array){
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
}

// global variables
var ids = "email";
var ids2 = "msg";
var divClass = "divClass";
var emailArray = [];
var nameArray = [];
///////////generate inputs
$(document).ready(function(){
    $("#btn1").click(function(){
        var first_value = $("#allOptions").val();
    
        for(var i=0; i<first_value; i++){
            $("#firstForm").append('<div class="' + divClass +'"><input type="text" placeholder="Enter your Email" id="' + (ids +(1+i))  + '"><br/> <input type="text" placeholder="Enter your name" id="'+ (ids2 +(1+i))  + '"><br/><br/></div>');
            

           emailArray.push("#" +ids + (i+1)); // create ids
           nameArray.push("#" +ids2 + (i+1)); // create ids


        }// end for loop
        $("#small_form").css("display", "none");
        shuffleArray(nameArray); // testing shuffle then printing. test shuffleArray and shuffle
        // console.log(emailArray);
         //console.log(nameArray);
         $(".allBoxes").css({
               'border' : '1px solid black',
               'width' : '400px',
               'padding' : '10px'
            });
         
        display2(emailArray, nameArray); // pass both variables to another function
        });
    });


function display2(mail, name){
    var to,subject;
    $("#send_email").css("visibility", "visible");

    //Start creating variables for the field names
    $("#send_email").click(function(){
        // name array contains the variables from the user input in form msg1 msg2 etc...
        // for loop for iterating whole array
        
        for(var i=0; i<mail.length; i++){
            to = $(mail[i]).val(); // get all the emails
            subject = "Secret Friend Generator :), Your Secret Friend is: " + $(name[i]).val();// get all the names
            //console.log(to);
            //console.log(subject);
        $.get("/send",{to:to,subject:subject},function(){
            console.log("Email sent");
            $("#message").text("Emails sent, please check your inbox.");
        });  
      
    }// end of LOOP
       $("#firstForm").fadeToggle(4000);
       $("#send_email").fadeToggle(4000);
    });

}