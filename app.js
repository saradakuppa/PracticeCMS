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
			//Select Item
				$('.activity').click(function(){
					$(this).toggleClass('selected');

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

				    //Making the div selectable after text has been edited. 
				    viewableText.click(function(){
				    	viewableText.toggleClass('selected');
				    });
				    
				    // setup the click event for this new div
				    $(viewableText).dblclick(editItem);
				}

				$('.selected').dblclick(editItem);



				//remove selected item 
				$('.remove').click(function(){
					$('.selected').remove();
				});// end remove item

				
			});// end selected item
		}); // end mouse in 
	}); //end of add item 


	//Add Images 

	//select image 

	//resize image 

	//delete image with small 'x' at the top left hand corner of the image 


	//move selected item - content/image
		$('#sortable').sortable();

	//Login validation with ajax request to php
		//If login success then hide login div for the session 
		//else display error message login failed

	//With Ajax send info from one page to another

	//hide/show list when clicked on 'Hide/Show List'  button
	$('#toggle').click(function (){
		$('.content').toggle("slow");
	}); //end hide/show list

}); //end document ready