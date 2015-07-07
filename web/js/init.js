(function() {
  $(document).on('submit', '.addcommentform', function(e) {
    var form;
    e.preventDefault();
    form = $(this).closest('form');
    return form.ajaxSubmit({
      url: form.attr('action')
    });
  });

  $(document).on('change', '.addcommentform :checkbox', function(e) {
    var form;
    e.preventDefault();
    form = $(this).closest('form');
    return form.ajaxSubmit({
      url: form.attr('action'),
      success: function() {
        return $('.progres').load(window.location.href + ' #progres');
      }
    });
  });

  $(document).formStyle();

  $(document).on('click', '.showtab', function(e) {
    var href;
    e.preventDefault();
    e.stopPropagation();
    href = $(this).attr('href');
    $('html,body').animate({
      'scrollTop': $(href).offset().top
    }, 100);
    $(".navbar-nav a[href=" + href + "]").parent().siblings().removeClass('active');
    $(".navbar-nav a[href=" + href + "]").parent().addClass('active');
  });

  $(document).ready(function() {
    projekktor('video', {
      controls: true,
      playerFlashMP4: "/assets/js/projekktor/swf/Jarisplayer/jarisplayer.swf",
      useYTIframeAPI: true,
    });
    $('.lessonlist').bxSlider({
      mode: 'fade',
      pager: false,
      nextSelector: $('.controls .right'),
      nextText: 'Следующее занятие <span>></span>',
      prevSelector: $('.controls .left'),
      prevText: '<span><</span> Предыдущее занятие'
    });
    return $('.modal').on('shown.bs.modal', function() {
      return $(window).resize();
    });
  });

  
jQuery(document).ready(function($) {
	$('.date').datepicker({
		format: 'dd.mm.yyyy',
                language: "ru",
		autoclose: true
	});

	$('.multiselect').multiselect({
		numberDisplayed: 0,
		buttonClass: 'form-control',
		nonSelectedText: 'Выбрать',
		nSelectedText: 'Выбрано',
	});

	$(document).on('submit', '.modal .loginform form,.modal .dealform', function(e) {
		e.preventDefault();var $form = $(this);
		if (fieldnotempty($form)) {
			$.ajax({
				url: $form.attr('action'),data: $form.serialize(),type: 'POST', dataType: "json",
				success: function(data) {
					if (data.success == "1") {
						location.href = data.redirect;
					} else {
                                           $form.closest(".modal-body").html(data.form);
					}
				}
			});
		}
	});


	//account
	var tabtoggler = function(){
		var tabwrapper = $('.wmtabs');
		var activelink = tabwrapper.find(':checked').data('link');
		tabwrapper.find('.wmtab').hide();
		tabwrapper.find('.wmtab:not(.'+activelink+') input:text').val('');
		tabwrapper.find('.wmtab:not(.'+activelink+') input:checkbox').prop('checked',false);
		tabwrapper.find('.wmtab:not(.'+activelink+') select').prop('selected',false);
		tabwrapper.find('.'+activelink).show();
	};tabtoggler();
	$(document).on('change','input',tabtoggler);
	//end account

	//subscribe
	$(document).on('submit','.subscriptblock form',function(e){
		e.preventDefault();
		$modal.find('.modal-body').html('<div class="thankyou">Спасибо!<br>Ваша заявка оформлена!</div>');
		$modal.modal();
	});
	//end subscribe


	$('input.image').on('change',function(){
		$ff = $(this);
		input = this;
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				$ff.parent().find('img').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	});






	//profile
	$('.form').find(':checkbox,:radio').each(function(){
		if ( $(this).is(':checked') ) {
			$( $(this).data('show') ).css('visibility','visible');
		}
		$(this).on('change',function(){
			if ( $(this).is(':checked') ) {
				$( $(this).data('show') ).css('visibility','visible');
			} else {
				$( $(this).data('show') ).css('visibility','hidden').find(':input').val('');
				$(this).closest('label').siblings('.newfield').remove();
			}
		});
	});
	$('.mama .qnt').on('keyup',addchild);
	function addchild(){
		var num = $('.mama .qnt').val();
		var $line;
		$('.newfield').remove();
		for (var i = num; i > 0; i--) {
			$line = $('<div class="newfield">'+i+') Имя: <input type="text" name="children['+i+'][name]"> Дата рождения: <input type="text" class="date" name="children['+i+'][birthday]"> Пол: ж.<input type="radio" name="children['+i+'][sex]" value="F"> м.<input type="radio" name="children['+i+'][sex]" value="M">');
			$line.insertAfter('.mama');
		};
		$('.newfield').formStyle();
                $('.date').datepicker({
                        format: 'dd.mm.yyyy',
                        language: "ru",
                        autoclose: true
                });
	};
	$('select[class!=spec]').multiselect({
		numberDisplayed: 1,
		//buttonClass: 'form-control',
		nonSelectedText: 'Выбрать',
		nSelectedText: 'Выбрано',
                templates: {
                    button: '<button type="button" class="multiselect"></button><button type="button"  data-toggle="dropdown" class="btn dropdown-toggle"><span class="caret"></span></button>'
                },
                buttonText: function(options, select) {
                    if (options.length === 0) {
                        return this.nonSelectedText;
                    }
                    else {
                        if (options.length > this.numberDisplayed) {
                            return options.length + ' ' + this.nSelectedText;
                        }
                        else {
                            var selected = '';
                            options.each(function() {
                                var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                                selected += label + ', ';
                            });
                            return selected.substr(0, selected.length - 2);
                        }
                    }
                }
	});
		
        $('select[class=spec]').multiselect({
		numberDisplayed: 1,
		//buttonClass: 'form-control',
		nonSelectedText: 'Выбрать',
		nSelectedText: 'Выбрано',
                buttonWidth: '175px',
                templates: {
                    button: '<button type="button" class="multiselect"></button><button type="button"  data-toggle="dropdown" class="btn dropdown-toggle"><span class="caret"></span></button>'
                },
                buttonText: function(options, select) {
                    if (options.length === 0) {
                        return this.nonSelectedText;
                    }
                    else {
                        if (options.length > this.numberDisplayed) {
                            return options.length + ' ' + this.nSelectedText;
                        }
                        else {
                            var selected = '';
                            options.each(function() {
                                var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                                selected += label + ', ';
                            });
                            return selected.substr(0, selected.length - 2);
                        }
                    }
                }
	});         



});
;

}).call(this);
