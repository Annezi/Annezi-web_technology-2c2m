$(document).ready(function () {
    $('#megaMenuRow').mouseout(function () {
        $('#item1').css({ 'display': 'none' });
        $('#item_1').css({ 'display': 'none' });
    });
    $('#key1').mouseover(function () {
        $('#item1').html("Прочитайте свежие статьи от нашей платформы");
        $('#item1').css({ 'display': 'block' });
    });
    $('#key2').mouseover(function () {
        $('#item1').html('Найдите нужный вам продукт с помощью фильтрови посмотрите его состави отзывы')
        $('#item1').css({ 'display': 'block' });
    });
    $('#key3').mouseover(function () {
        $('#item1').html('Смотрите недавно опубликованные отзывы на все возможные товары на отдельной странице')
        $('#item1').css({ 'display': 'block' });
    });
    $('#key4').mouseover(function () {
        $('#item1').html('Свежие новости из мира косметики и косметологии со всего мира')
        $('#item1').css({ 'display': 'block' });
    });
    $('#key_1').mouseover(function () {
        $('#item_1').html('Прочитайте свежие статьи от нашей платформы')
        $('#item_1').css({ 'display': 'block' });
    });
    $('#key_2').mouseover(function () {
        $('#item_1').html('Найдите нужный вам макияж используя фильтры подборок, которые помогут в поиске нужного туториала')
        $('#item_1').css({ 'display': 'block' });
    });
    $('#key_3').mouseover(function () {
        $('#item_1').html('Смотрите все недавно опубликованные туториалы на платформе')
        $('#item_1').css({ 'display': 'block' });
    });
    $('#key_4').mouseover(function () {
        $('#item_1').html('Смотрите ленту рекомендаций ваших любимых блогеров')
        $('#item_1').css({ 'display': 'block' });
    });
    $('#key_5').mouseover(function () {
        $('#item_1').html('Смотрите ленту рекомендаций, которую публикуют косметологи')
        $('#item_1').css({ 'display': 'block' });
    });

    var scbtnState = 'unsub'

    $('#sc-btn').click(function () {
        if (scbtnState == 'unsub') {
            scbtnState = 'sub'
            $('#subIMG').attr('src', 'img/profile-pic-3.svg')
            $('#subP').html('1235 подписчика')
        } else {
            scbtnState = 'unsub'
            $('#subIMG').attr('src', 'img/profile-pic-2.svg')
            $('#subP').html('1234 подписчика')
        }
    });

    var likeBTNState = 'unlike'

    $('#likeBTN').click(function () {
        if (likeBTNState == 'unlike') {
            likeBTNState = 'like'
            $('#likeIMG').attr('src', 'img/like-2.svg')
        }
        else {
            likeBTNState = 'unlike'
            $('#likeIMG').attr('src', 'img/like-1.svg')
        }
    });

    var likeButtonState = 'dislike'

    $('#likeButton').click(function () {
        if (likeButtonState == 'dislike') {
            likeButtonState = 'like-card'
            $('#likeImage').attr('src', 'img/heart-red.svg')
        }
        else {
            likeButtonState = 'dislike'
            $('#likeImage').attr('src', 'img/heart.svg')
        }
    });

    function restok() {
        $('#btnMenu1').css({ 'color': 'black', 'background-color': 'white' });
        $('#btnMenu2').css({ 'color': 'black', 'background-color': 'white' });
        $('#btnMenu3').css({ 'color': 'black', 'background-color': 'white' });
        $('#btnMenu3IMG').attr('src', 'img/icon-2.svg')
    }
    $('#btnMenu1').click(function () {
        restok()
        $('#btnMenu1').css({ 'color': 'white', 'background-color': 'black' });
    });
    $('#btnMenu2').click(function () {
        restok()
        $('#btnMenu2').css({ 'color': 'white', 'background-color': 'black' });
    });
    $('#btnMenu3').click(function () {
        restok()
        $('#btnMenu3').css({ 'color': 'white', 'background-color': 'black' });
        $('#btnMenu3IMG').attr('src', 'img/icon-2-white.svg')
    });
});
