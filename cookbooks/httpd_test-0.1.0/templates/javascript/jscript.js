/**
 Name: Daniel Diaz
 Assignment: CS 336 Assignment #4
 Created: 07/10/2018
 This first sheet goes to the meals page and lines up the two menus

 */



function wrkpshp() {
    var choice = document.getElementById("miserablecake");

    if (choice.checked == true) {
        document.getElementById("beercake").checked = false;
        document.getElementById("boston").checked = false;
        document.getElementById("brownies").checked = false;

    }

    var choice2 = document.getElementById("brownies");


    if (choice2.checked == true) {

        document.getElementById("coffeecake").checked = false;
        document.getElementById("coconutcake").checked = true;
        document.getElementById("crystalcake").checked = false;

    }


    else if (choice2.checked == false) {

        document.getElementById("coconutcake").checked = false;

    }

}


function openWin() {

    var choice = document.getElementById("miserablecake");
    var choice2 = document.getElementById("brownies");


    if (choice2.checked == true || choice.checked == true) {
        myWindow = window.open("errormessage.html", "Error", "resizable=no, toolbar=no , menubar=no, status=yes, width=500, height=400");
    }

}

// displayVoteMessage
// displays corresponding message to user depending on how they vote.
//

function displayVoteMessage() {

    var uservote = document.getElementsByName("vote");

    if (uservote[0].checked) {

        alert("Thank you for choosing Black Forest Gateau");

    }

    else if (uservote[1].checked) {

        alert("Thank you for choosing Dundee Cake");

    }
    else if (uservote[2].checked) {

        alert("Thank you for choosing Simnel Cake");

    }


}


function findValue(choices) {
    var found_it = null;
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            found_it = choices[i].value
            return found_it;
        }
    }
    return found_it;
}


//var userCookie = {};  //LAR: Let's not use a global variable.  It isn't needed.  See my next note in makeCookie.

function processRegistrationForm() {
    console.log("got to processRegistrationForm");
    var userid = document.getElementById("UserID").value;
    if (userid == "") userid = 123456;
    createCookie("userid", userid);
}



function createCookie(key, value) {  //LAR: Add two parameters: key and value, and make the function more generic so it
    //LAR: can make any cookie passed to it.  Then, both the registration pages and the poll
    //LAR: can use the same code.  You can store the key - value pairs as separate cookies or as one long string,
    //LAR: but it is easier to store as separate pairs.  You'll still have to parse the cookie
    //LAR: after it is retrieved.
    console.log(value);
    var expire = new Date(Date.now() + 360 * 1000).toString();
    document.cookie = key + "=" + value + ";" + expire + ";";

}




/* userCookie["_key"] = document.getElementById("UserID").value;
 userCookie["_title"] = document.getSelection("title").value;
 userCookie["_firstName"] = document.getElementById("firstname").value;
 userCookie["_lastName"] = document.getElementById("lastname").value;
 userCookie["_address"] = document.getElementById("address").value;
 userCookie["_address2"] = document.getElementById("address2").value;
 userCookie["_city"] = document.getElementById("city").value;
 userCookie["_state"] = document.getElementById("state").value;
 userCookie["_zipcode"] = document.getElementById("zipcode").value;
 userCookie["_telephone"] = document.getElementById("telephone").value;
 userCookie["_email"] = document.getElementById("email").value;
 userCookie["_website"] = document.getElementById("website").value;
 userCookie["_companyPosition"] = document.getElementById("position").value;
 userCookie["_companyName"] = document.getElementById("companyname").value;

 var choices = document.getElementsByName("meal");
 choices = findValue(choices);
 userCookie["_meal"] = choices;
 choices = document.getElementsByName("dinnerchoice");
 choices = findValue(choices);
 userCookie["_dinnerChoice"] = choices;
 userCookie["_billingFName"] = document.getElementById("billingfirstname").value;
 userCookie["_billingLName"] = document.getElementById("billinglastname").value;
 var choices = document.getElementsByName("Card");
 choices = findValue(choices);
 userCookie["_cardType"] = choices;
 userCookie["_cardNumber"] = document.getElementById("cardnumber").value;
 userCookie["_csv"] = document.getElementById("cardcsv").value;
 userCookie["_cardYear"] = document.getElementById("cardyear").value;
 userCookie["_cardMonth"] = document.getElementById("cardmonth ").value;

 var choices = document.getElementsByName("session1");
 choices = findValue(choices);
 userCookie["_session1"] = choices;
 var choices = document.getElementsByName("session2");
 choices = findValue(choices);
 userCookie["_session2"] = choices;
 var choices = document.getElementsByName("session3");
 choices = findValue(choices);
 userCookie["_session3"] = choices;

 document.cookie = "";
 var expire = new Date(Date.now() + 360 * 1000).toString();
 var cookieString = "";

 for (var key in userCookie) {

 cookieString = key + "=" + userCookie[key] + ";" + expire + ";";
 document.cookie = cookieString;

 } */



function recoverCookie(userID) {

    userCookie = {};
    var Kv = document.cookie.split(";");


    for (var key in Kv) {
        var cookie = Kv[key].split("=");
        userCookie[cookie[0]] = cookie[1];
    }


    if (userID.value == userCookie[0]) {
        document.getElementById("UserID").value = userCookie["_key"];
        document.getElementsByName("title").value = userCookie["_title"];
        document.getElementById("firstname").value = userCookie["_firstName"];
        document.getElementById("lastname").value = userCookie["_lastName"];
        document.getElementById("address").value = userCookie["_address"];
        document.getElementById("address2").value = userCookie["_address2"];
        document.getElementById("city").value = userCookie["_city"];
        document.getElementById("state").value = userCookie["_state"];
        document.getElementById("zipcode").value = userCookie["_zipcode"];
        document.getElementById("telephone").value = userCookie["_telephone"];
        document.getElementById("email").value = userCookie["_email"];
        document.getElementById("website").value = userCookie["_website"];
        document.getElementById("position").value = userCookie["_companyPosition"];
        document.getElementById("companyname").value = userCookie["_companyName"];
        document.getElementsByName("meal").value = userCookie["_meal"];
        document.getElementsByName("dinnerchoice").value = userCookie["_dinnerChoice"];
        document.getElementById("billingfirstname").value = userCookie["_billingFName"];
        document.getElementById("billinglastname").value = userCookie["_billingLName"];
        document.getElementsByName().value = userCookie["_cardType"];
        document.getElementById("cardnumber").value = userCookie["_cardNumber"];
        document.getElementById("cardcsv").value = userCookie["_csv"];
        document.getElementById("cardyear").value = userCookie["_cardYear"];
        document.getElementById("cardmonth ").value = userCookie["_cardMonth"];
        document.getElementsByName("session1").value = userCookie["_session1"];
        document.getElementsByName("session2").value = userCookie["_session2"];
        document.getElementsByName("session3").value = userCookie["_session3"];

    }
}

function pollCookie(array) {
    userCookie["_blackforest"] = array[0];  //LAR: userCookie is an array here.  Did you mean to be calling the function?
    userCookie("_blackforest", array[0]);   //LAR: pass in a key-value pair
    //userCookie["_dundee"] = array[1];
    // userCookie["_simnel"] = array[2];

    document.cookie = cookieString;
}


//LAR: All functions need headers
// pollVoteLoad
// Tests to see if votes have been stored for the poll and
// if so, retrieves them and loads them on the page
//
function pollVoteLoad() {
    var blackforest = 0;
    var dundee = 0;
    var simnel = 0;
    var text1 = "";
    var text2 = "";
    var text3 = "";
    var Kv = document.cookie.split(";");
    console.log("The cookie retrieved is " + Kv); //LAR: let's see what was retrieved.
    if (Kv != null) {  //LAR: We need to check to see if the cookie actually exists and remember that
        //LAR: the poll vote cookies aren't going to be the only ones for the site. So
        //LAR: we cannot assume that the array positions of 0, 1, and 2 will hold the data from the poll.
        //LAR: Instead, after splitting the cookies into pairs, search through the array for the key(s) you need to check.


        var displayChanges1 = "Total Votes:";  //LAR: Why three variables with the same value?  Just use one.
        //var displayChanges2 = "Total Votes:";
        //var displayChanges3 = "Total Votes:";
        var PolluserCookie = {};
        for (var key in Kv) {
            var cookie = Kv[key].split("=");
            PolluserCookie[cookie[0]] = cookie[1];
            console.log("PolluserCookie[" + cookie[0] + "] =" + cookie[1]);
            PolluserCookie[cookie[1]] = cookie[3];
            console.log("PolluserCookie[" + cookie[1] + "] =" + cookie[3]);
            PolluserCookie[cookie[2]] = cookie[5];
            console.log("PolluserCookie[" + cookie[2] + "] =" + cookie[5]);
        }

        if (PolluserCookie[0] > 1) {
            blackforest = PolluserCookie[0];
        }

        text1 = document.getElementById('blackForrestTotal');
        text1.innerHTML = displayChanges1 + blackforest;
        if (PolluserCookie[1] > 1) {
            dundee = PolluserCookie[1];
        }
        text2 = document.getElementById('dundeeCakeTotal');
        text2.innerHTML = displayChanges2 + dundee;


        if (PolluserCookie[2] > 1) {
            simnel = PolluserCookie[2];

        }

        text3 = document.getElementById('simnelCakeTotals');
        text3.innerHTML = displayChanges3 + simnel;
    }
}

//LAR: All functions need headers
// votetotals
// Pulls values from form and stores them as a cookie.
//
function votetotals() {
    var blackforest = 0;
    var dundee = 0;
    var simnel = 0;
    var forest = document.getElementById("BlackForestGateau");
    var dundeeCake = document.getElementById("DunndeeCake");
    var simnelCake = document.getElementById("SimnelCake");

    var Kv = document.cookie.split(";");
    console.log("The cookie retrieved in votetotals is " + Kv); //LAR: let's see what was retrieved.
    var values = {};

    var PolluserCookie = {};
    //LAR: Again, we need to check if the cookie actually exists.  I'll leave that for you to implement.
    for (var key in Kv) {
        var cookie = Kv[key].split("=");
        PolluserCookie[cookie[0]] = cookie[1];
        var displayChanges = "";

    }


    if (forest.checked == true) {
        if (PolluserCookie[0] > 1) {
            blackforest = PolluserCookie[0];

        }
        blackforest = ++blackforest;
        document.getElementById('blackForestTotal').innerHTML = blackforest;
    }
    else if (dundeeCake.checked == true) {
        if (PolluserCookie[2] > 1) {
            simnel = PolluserCookie[0];
        }
        dundee = ++dundee;
        document.getElementById('dundeeCakeTotal').innerHTML = dundee;

    }

    else if (simnelCake.checked == true) {
        if (PolluserCookie[0] > 1) {
            simnel = PolluserCookie[0];

            simnelCake = ++simnelCake;
            document.getElementById('simnelCakeTotal').innerHTML = simnel;
        }

        pollCookie(values);
    }
}
