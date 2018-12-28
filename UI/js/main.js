function valid() {
    var email = document.getElementById("login_email").value;
    var pass = document.getElementById("login_password").value;
    if (email === "admin@menu.com" && pass === "admin") {
        alert("Wrong Password for Admin");
        return true;
    }
    if (email === "admin@menu.com") {
        alert("Wrong Password for Admin");
        return false;
    } else {
        window.location = "view_all_dishes.html";
        return false;
    }
}

function order() {
    alert("You successfully placed an order. Food will be served any minute");
    return true;
}
var a = "inactive";
var d = "inactive";

function accepted(el) {
    if (el.value == "Accept" && d == "inactive") {
        el.value = "Accepted";
        a = "active";
    }
    if (el.value === "Decline" && a == "inactive") {
        el.value = "Declined";
        d = "active";
    }

    if (el.value === "Complete" && d == "inactive" && a == "active") {
        el.value = "Completed";
    }
}

function add() {
    alert("Dish successfully added!");
    return true;
}