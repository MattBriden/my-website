const urlParams = new URLSearchParams(window.location.search);
const blog = urlParams.get('blog');
$(document).ready(function() {
    $('#sidebar').load('sidebar.html');
    $(".heading").html(String(blog));
    $.ajax({
        url : "blogposts/" + blog + ".txt",
        success : function (data) {
            $(".blog").html(data);
        }
    });
});
