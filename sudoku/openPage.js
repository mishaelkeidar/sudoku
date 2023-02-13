//Input function definition:

// As soon as the function is activated, a check will be made to see if the user
// has entered the correct username (abcd) and password (1234). If the user has entered
// one of them incorrectly, a corresponding message will be displayed. On the other hand,
// if the user has entered the details correctly, a corresponding message will be displayed
// and then the user will be moved to select a difficulty level.

    document.getElementById("btnFirsteContainerId").onclick = function enterBtn () {
        let userName = document.getElementById("userNameInputId").value;
        let password = document.getElementById("passwordInputId").value;
        if(userName == "abcd" && password == 1234){
            alert("Your details have been saved successfully");
            location.href = "difficultyLevelPage.html";
        }else{
            error.textContent = "your details have been entered incorrectly"
            error.style.color = "red"
        }
    };
