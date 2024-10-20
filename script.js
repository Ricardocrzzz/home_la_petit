$(document).ready(function() {
    $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});

$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').slideToggle();
    });
});

$(document).ready(function() {
    $('.btn-default').on('click', function(event) {
        event.preventDefault();
        const dishTitle = $(this).closest('.dish').find('.dish-title').text();
        alert(`${dishTitle} foi adicionado ao carrinho!`);
    });
});

$(document).ready(function() {
    $('.dish-heart').on('click', function() {
        $(this).toggleClass('favorited');
        const dishTitle = $(this).siblings('.dish-title').text();
        if ($(this).hasClass('favorited')) {
            alert(`${dishTitle} adicionado aos favoritos!`);
        } else {
            alert(`${dishTitle} removido dos favoritos!`);
        }
    });
});

$(document).ready(function() {
    $('#feedbacks').data('feedbacksLoaded', 2); // Número de feedbacks carregados inicialmente

    $('.btn-default').on('click', function() {
        const loaded = $('#feedbacks').data('feedbacksLoaded');
        if (loaded < 4) { // Supondo que você tenha 4 feedbacks no total
            $('#feedbacks').append(`
                <div class="feedback">
                    <img src="src/images/avatar.png" class="feedback-avatar" alt="">
                    <div class="feedback-content">
                        <p>Fulano de Tal
                            <span>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </p>
                        <p>"Mais um comentário incrível!"</p>
                    </div>
                </div>
            `);
            $('#feedbacks').data('feedbacksLoaded', loaded + 1);
        } else {
            alert('Todos os depoimentos já foram carregados!');
        }
    });
});
