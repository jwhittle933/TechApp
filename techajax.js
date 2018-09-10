//INNER HTML
function htmlChange(element, content){
    let domObject = document.querySelector(element);
    domObject.innerHTML = content;
  }

function showRooms(choice1, choice2, choice3) {
    if (choice1 == "") {
        htmlChange('#roomop', "")
        return;
    } else { 
        if (window.XMLHttpRequest) {
            //IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            //IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("roomop").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getuser.php?q="+param,true);
        xmlhttp.send();
    }
}
$(function(){
    $.ajax({
        url: 'api.php',  //CALL TO PHP SCRIPT FOR DATA
        data: "",        //INSERT URL ARGUMENTS TO PASS TO API
        dataType: 'json',
        success: function(data) {
            let id = data[0];   //GET ID
            let vname = data[1];//GET NAME
            $('#output').html("<b>id: </b>" + id + "<b> name: </b>"+vname); //SET OUTPUT ELEMENT HTML
        }
    });
});