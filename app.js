//git status
//git add .
//git commit -m "comment"
//git push origin master


$(document).ready(function(){
	//Add new item to the list
	$('#add-list-item').click(function(){
		var item = $('#new-list-item').val();
		var activityHTML = '<div class="">';
		activityHTML += item + '</div>';
		console.log(activityHTML);
		$('.selectable').append(activityHTML);
		$('#new-list-item').val("");

		//Selected item ton mouse in 
		$('.selectable div').mouseenter(function(){
			$(this).addClass('activity');
			$('.activity').click(function(){
				$(this).toggleClass('selected');
				//remove selected item 
				$('.remove').click(function(){
				$	('.selected').remove();
				});// end remove item
			});// end selected item
		}); // end mouse in 
	}); //end of add item 

	//deselect item on mouse out
		// $('.selectable div').mouseout(function(){
		// 	$(this).removeClass('selected');
		// });	

		//move selected item
		$('#sortable').sortable();

	//hide/show list when clicked on 'Hide/Show List'  button
	$('#toggle').click(function (){
		$('.list').toggle("slow");
	}); //end hide/show list

}); //end document ready