HackBar.GUI = {

// Code from Web Developer 1.1.9  by Chris Pederick 
// It uses GPLv3 so I think I need to mention it here :)
// You can find the GPLv3 at http://www.gnu.org/licenses/gpl-3.0.html
// but it's a long an boring text so basically what it says it that
// I have to mention here that I'm using other person code and provide
// you with a link to the license. Probably it also means other things
// as how I have to share my code but, sincerilly, I don't care. I'm just
// doing this addon for fun and don't think copying these few lines will
// makes any bad to the original developer.
// BTW, thanks mate for such clear and clever code!!! :)
//                                                    -- Pedro Laguna
	openToolbarButton: function (currentToolbarButton)
	{
		// If the toolbar button is set and is not open
		if(currentToolbarButton && !currentToolbarButton.open)
		{
			var toolbarButton        = null;
			var toolbarButtons       = currentToolbarButton.parentNode.getElementsByTagName("toolbarbutton");
			var toolbarButtonsLength = toolbarButtons.length;

			// Loop through the toolbar buttons
			for(var i = 0; i < toolbarButtonsLength; i++)
			{
				toolbarButton = toolbarButtons.item(i);

				// If the toolbar button is set, is not the same toolbar button and is open
				if(toolbarButton && toolbarButton != currentToolbarButton && toolbarButton.open)
				{
					toolbarButton.open        = false;
					currentToolbarButton.open = true;
					break;
				}
			}
		}
	}
}