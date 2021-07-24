(function () {
    var app = Sammy.apps.body;

    app.get('/admin', function (context) {
        this.partial("src/myAdmin/myAdmin.html", function () {
            $.getScriptCached('src/myAdmin/myAdmin.js', function (data, textStatus, jqxhr) {
            });
        })
    })

})();
