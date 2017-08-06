$(document).ready(function() {
	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			region: {
				required: true
			}
		}
	});
	$('#priceForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			region: {
				required: true
			}
		}
	});

	$('.toggle_btn').click(function(){
		$('.sandwich').toggleClass('active');
		if($('.navigation').is(':visible')) {
			$('.navigation').slideUp(300);
		} else {
			$('.navigation').slideDown(300);
		};
	});


	// remove placeholder after click
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	window.onscroll = function(){
		var	scrolled = window.pageYOffset || document.documentElement.scrollTop,
			header = document.querySelector('.header');
		if (scrolled > 100 && $(window).width() > 768){
			$(header).addClass('header--scrolled');
		}
		else {
			$(header).removeClass('header--scrolled');
		}
	}
	$('.main-content-btn').click( function(){
	var scrollEl = $('.scroll').attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 400);
		}
		return false;
	});
	//////////////////////
	$('.popup').click(function(e){
		e.preventDefault();
		var popup = $(this).siblings('.popup_window');
		$(popup).addClass('opened');
		
		if($(popup).is(':visible')){
			$('.popup_bg').css({
				'opacity' : '1',
				'zIndex' : '221'
			});
		}
	});
	$('.btn_close').click(function(){
		var close = $(this).parent();
		$(close).removeClass('opened');
		$('.popup_bg').css({
			'opacity' : '0',
			'zIndex' : '-1'
		});
	});

	$('.popup_bg').click(function(){
		$(this).css({
			'opacity' : '0',
			'zIndex' : '-1'
		});
		$('.popup_window').removeClass('opened');
	});

	// colors
	$('.dot').click(function(e){
		console.log(e);
		var color = $(this).css('background-color');
		var border = '0 0 3px '+color+'';
		$('.dot').css({
			'border':'0',
			'boxShadow': 'none',
			'transform':'scale(1)'
		});
		$(this).css({
			'border':'2px solid #fff',
			'boxShadow': border,
			'transform':'scale(1.2)'
		});
		var index = $(this).index();
		var src = 'img/price_photo_'+(index + 1)+'.png';
		$('.price__content__photo img').attr('src', src);
	});

	//point section
	$('.col__footer').click(function(){
		$('.point__place').slideToggle();
		var el = $(this).closest('.point__table').siblings('.point__place');
		if ($(el).is(':visible')) {
			$(this).css('color', '#4f4f4f');
		} else {
			$(this).css('color', '#23bad5');
		}
		$(this).text(function(i,text) {
			return text === "Свернуть" ? "Подробнее" : "Свернуть";
		});
	});
	$('header .phone span').mouseover(function(){
		$(this).closest('.header__info').siblings('.all_phone').toggleClass('showed');
		$('.header__info').css('opacity', '0');
	});
	$('.all_phone').mouseleave(function(){
		$(this).removeClass('showed');
		$('.header__info').css('opacity', '1');
	});
	// scroll slider
	var widthCount = function(){
		var width = $('.slider_item img').width();
		var slides = $('.slider_item');
		return slides.length * width + slides.length * 6;
	}
	$('.slider').width(widthCount());
});