var heightDifference;
var fixedHeight;


function fixHeight()
{
    var headerHeight = $("#UbcHeaderWrapper").outerHeight();
    var cheaderHeight = $("#CourseHeader").outerHeight();
    var footerHeight = $("#UbcBottomInfoWrapper").outerHeight();
    var emergencyHeight = $("#UbcUtilNavWrapper").outerHeight();
    var timestampHeight = $("#CourseFooter").outerHeight();

    var height = window.innerHeight - headerHeight - cheaderHeight - footerHeight - emergencyHeight - timestampHeight;

    var lectureframeheight = height - $("#tlsheader").outerHeight();

    var element = document.getElementById("CourseBody");

    if (element != null)
    {
	element.style.height = height + "px";
    }

    var elements = document.getElementsByClassName("contentsiframe");
    var i;

    for (i = 0; i < elements.length; i++)
    {
	elements[i].style.height = lectureframeheight + "px";
    }

    element = document.getElementById("handouts");
    if (element != null)
    {

        var $contents = $('#handouts').contents();
        $contents.scrollTop($contents.height());
    }
}

window.onload = fixHeight;
window.onresize = fixHeight;
