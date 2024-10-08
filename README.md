# Python-Eel-htmx-hyperscript
This project demonstrates the integration of Eel (Python), htmx, and hyperscript to create a dynamic web application. It showcases various interactive examples that highlight the capabilities of these technologies working together.
If you want to have true HTMX functionality, use a server like Flask instead of Eel, to make it work for Eel we must create a bridge.

## Examples

**Click Event to Swap Content:** <br />
Description: Clicking the button swaps the content in the htmx-area using a function called htmxSwap(), which retrieves new content from the Python backend via eel.get_new_content(). The content is dynamically replaced. <br />
Purpose: Demonstrates how to swap content dynamically based on a user event. Demonstrates how to create a bridge between frontend/backend. <br />

**Adding New Elements:** <br />
Description: Clicking the button triggers the addNewItem() function, which calls eel.add_item() to get new list items from the backend. These items are appended to the existing list (#item-list). <br />
Purpose: Showcases how to add new elements to an existing list or structure in response to user interaction. <br />

**Remove Element:** <br />
Description: Clicking the button triggers the removeItem() function, which calls eel.remove_item() to remove the specified element (#removable-item). The element disappears after the backend call. <br />
Purpose: Demonstrates the removal of elements from the DOM when interacting with the backend. <br />

**CSS Transitions on Content Swap:** <br />
Description: Clicking the button triggers the swapTransitionContent() function, which swaps the content in the #transition-box with new content fetched from eel.transition_content(). This example includes CSS transitions. <br />
Purpose: Showcases content swapping with added transitions for a smoother user experience. <br />

**Infinite Scrolling / Pagination:** <br />
Description: Clicking the "Load More" button calls loadMoreContent(), which loads additional content from the backend and appends it to the #infinite-scroll container. <br />
Purpose: Implements a basic infinite scroll feature where more content is loaded dynamically as needed. <br />

**Hyperscript Demo:** <br />
Description: Demonstrates Hyperscript, where clicking the div triggers a simple alert message using the _="on click call alert('You clicked me!')" Hyperscript command. <br />
Purpose: Provides a small interactive example of using Hyperscript for handling user events directly in the HTML without external JavaScript. <br />

## Technologies Used

- Python 3.12
- Eel 0.16
- htmx 2.0
- hyperscript 0.9.12
- HTML/CSS
- JavaScript

## Setup

1. Clone this repository
2. Install the required Python packages: pip install -r requirements.txt
3. Run the main Python script: python main.py

## Project Structure

- `main.py`: The main Python script using Eel
- `web/index.html`: The main HTML file
- `web/js/app.js`: JavaScript file for frontend logic
- `web/css/styles.css`: CSS file for styling

## Contributing

Feel free to fork this project and submit pull requests with new examples or improvements!

## License

This project is open source and available under the CC0 1.0 Universal License (LICENSE).
