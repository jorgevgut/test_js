$(document).ready(function(){
	

var t=setInterval(function(){avanzar();},3000);

	$('#btnAnt').click(function()
	{
		var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index==0)
					{
						$($('.slider').find('.s_element').get(size-1)).slideDown();
						$($('.slider').find('.s_element').get(size-1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(index-1)).slideDown();
						$($('.slider').find('.s_element').get(index-1)).addClass('s_visible');	
						return false;
					}
				}
		});
	});
	$('#btnSig').click(function()
	{
		var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});
	});
	
	
	
});


function avanzar()
{
	var size = $('.slider').find('.s_element').size();
		$('.slider').find('.s_element').each(
			function(index,value){
				if($(value).hasClass('s_visible'))
				{
					$(value).slideUp();
					$(value).removeClass('s_visible');
					
					if(index+1<size)
					{
						$($('.slider').find('.s_element').get(index+1)).slideDown();
						$($('.slider').find('.s_element').get(index+1)).addClass('s_visible');
						return false;
					}
					else
					{
						$($('.slider').find('.s_element').get(0)).slideDown();
						$($('.slider').find('.s_element').get(0)).addClass('s_visible');	
						return false;
					}
				}
		});
}
