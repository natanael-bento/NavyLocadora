$(document).ready(function () {
    const carCarousel = $('.car-carousel');
    const prevButton = $('.prev');
    const nextButton = $('.next');

    carCarousel.slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        focusOnSelect: true,
        prevArrow: prevButton, // Define o botão anterior
        nextArrow: nextButton, // Define o botão próximo
        autoplay: true, // O carrossel funciona automaticamente
        autoplaySpeed: 1000, // Intervalo de tempo entre os slides
        pauseOnHover: true, // Pausa a reprodução automática ao passar o cursor
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Função para mostrar/ocultar descrição
    function showCarDescription(index) {
        const carDescription = $('.car-description').eq(index);
        carDescription.addClass('show-description');
    }

    function hideCarDescription(index) {
        const carDescription = $('.car-description').eq(index);
        carDescription.removeClass('show-description');
    }

    // Associar eventos de mouse aos carros
    $('.car').on('mouseover', function () {
        const index = $(this).index();
        showCarDescription(index);
    });

    $('.car').on('mouseout', function () {
        const index = $(this).index();
        hideCarDescription(index);
    });

    // Evento para atualizar o carrossel quando houver uma mudança de slide
    carCarousel.on('afterChange', function (event, slick, currentSlide) {
        updateCarousel(currentSlide);
    });

    // Função para atualizar o carrossel com base no slide atual
    function updateCarousel(centerIndex) {
        $('.car').removeClass('show-description');
        $('.car-description').removeClass('active');
        $(`.car[data-slick-index="${centerIndex}"]`).addClass('show-description');
        $(`.car-description[data-slick-index="${centerIndex}"]`).addClass('active');
    }
});
