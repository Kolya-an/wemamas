jQuery(document).ready(function($) {
	var $modal = $('#modal');
	$(document).on('click','.gomodal',function(e){
	    e.preventDefault();
	    var link = $(this).data('link');
	    $modal.modal();
	    $modal.find('.modal-body').load(link,function(){
	        $modal.modal();
	    });
	});

	/*$(document).on('submit', '.modal form', function(e) {
	    e.preventDefault();
	    var $form = $(this);
	    $.ajax({
	        url: $form.attr('action'),
	        data: $form.serialize(),
	        type: 'POST',
	        success: function(data) {
	            $form.closest('.modal-body').html(data);
	        }
	    });
	});*/

	

});

function setSortBy(name,value) {
	$.cookie(name,value,{path:'/'});
	location.reload();
}

(function( $ ) {
	$.fn.formStyle = function() {
		this.find(':radio,:checkbox').each(function(){
			$(this).hide();
			$(this).wrap('<label><span class="newcheckbox"></span></label>');
			if ( $(this).is(':checked') ) {
				$(this).parent().addClass('on');
			}
		});
		$(document).on('change',':radio,:checkbox',function(){
			$('.newcheckbox input').each(function(){
				if ( $(this).is(':checked') ) {
					$(this).parent().addClass('on');
				} else {
					$(this).parent().removeClass('on');
				}
			})
		})
	};
})(jQuery);

var fieldnotempty = function($form) {
    var haserrors = false;
    $form
        .find('.req')
        .each(
        function(){
            var $field = $(this);
            $field.removeClass('error');
            if ($field.val().length === 0) {
                $field.addClass('error');
                haserrors = true;
            }
        });
    if (haserrors) return false;
    return true;
};

function update_cart_count() {
    $("#cart-link .number").load("/cart/count");
}