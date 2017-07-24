//git status
//git add .
//git commit -m "comment"
//git push origin master


$(document).ready(function(){
	//Add new item to the list
	$('#add-list-item').click(function(){
		var item = $('#new-list-item').val();
		var activityHTML = '<div class="" contenteditable="true">';
		activityHTML += item + '</div>';
		console.log(activityHTML);
		$('.selectable').append(activityHTML);
		$('#new-list-item').val("");

		//Selected item ton mouse in 
		$('.selectable div').mouseenter(function(){
			$(this).toggleClass('activity');
			$('.activity').click(function(){
				$(this).toggleClass('selected');

				//remove selected item 
				$('.remove').click(function(){
					$('.selected').remove();
				});// end remove item

				//Edit item
				function editItem(){
					var divHtml = $(this).html();
				    var editableText = $("<textarea />");
				    editableText.val(divHtml);
				    $(this).replaceWith(editableText);
				    editableText.focus();
				    // setup the blur event for this new textarea
				    editableText.blur(editableTextBlurred);
				}

				function editableTextBlurred() {
				    var html = $(this).val();
				    var viewableText = $("<div>");
				    viewableText.html(html);
				    $(this).replaceWith(viewableText);
				    // setup the click event for this new div
				    $(viewableText).dblclick(editItem);
				}

				$('.selected').dblclick(editItem);
			});// end selected item
		}); // end mouse in 
	}); //end of add item 

	




	//move selected item
		$('#sortable').sortable();

	//hide/show list when clicked on 'Hide/Show List'  button
	$('#toggle').click(function (){
		$('.list').toggle("slow");
	}); //end hide/show list

}); //end document ready