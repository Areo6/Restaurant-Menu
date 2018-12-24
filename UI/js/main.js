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