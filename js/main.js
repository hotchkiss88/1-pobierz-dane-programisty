$(document).ready(function() {

    let btn = $('.btn');
    let body = $('body')
        // let container = $('.container')
    console.log(btn);

    btn.one("click", function() {

        let daneProgramisty = $('<div class="daneProgramisty"></div>');
        let ul = $('<ul class="list"></ul>');
        ul.appendTo(daneProgramisty);
        body.append(daneProgramisty);

        $(document).on('mousemove', function(e) {
            $('.list').css({
                left: e.pageX,
                top: e.pageY
            });
        });

        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: "json",

            success(data) {
                console.log(data);
                $.each(data, function(key, value) {
                    $("<li class = list-row></li>").html(this).appendTo(ul);
                });
            },

            error(xhr, textStatus) {
                console.log("Wystąpił błąd z połączeniem:", textStatus);
            }
        });
    })
});