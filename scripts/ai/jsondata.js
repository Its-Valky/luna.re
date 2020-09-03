
if (Cookies.get('admin') == "1") {


    // luna
    $.getJSON("/json/luna.json", function (jsonFromFile) {

        $(function () {
            $('#table-luna').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // welcome
    $.getJSON("/json/welcome.json", function (jsonFromFile) {

        $(function () {
            $('#table-welcome').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // runic
    $.getJSON("/json/runic.json", function (jsonFromFile) {

        $(function () {
            $('#table-runic').bootstrapTable({
                data: jsonFromFile
            });
        });

    });



}

else {
    window.open("/404","_self");
}