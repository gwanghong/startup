CS260 Notes
[notes.md](https://github.com/gwanghong/startup/blob/main/notes.md)

# Michelin Guide
  ## Elevator pitch
 I'm building a website that allows food enthusiasts to easily discover and save Michelin Star restaurants they want to visit. Users can browse a curated list of top-rated dining spots, add their favorites to a personalized cart, and revisit them later to plan their next culinary adventure.
## Design
  ![Alt text](sketch_scan.JPG)

## Key features
* Secure login over HTTPS
* Listing Michelin Star Restaurants
* Storing, removing and displaying Restaurant lists that are saved in Cart
* Totals from lists saved in Cart
* Ability to leave reviews of there own experience they had at the restaurant.

## Technologies
* HTML -        Using four html files. 1st page for login, 2nd page for listing info of restaurants, 3rd page for Cart showing lists that are saved, and last page for review/comment section.
* CSS -         Color and Styling that fits with MICHELIN. Applied flex, hover, bootstrap, etc.
* React -       Implements login system, displays a list of 
restaurants, allows adding items to cart, submitting and viewing user reviews, and manages state by using React hooks. Utilizes React Router for naviating between pages.
* Service -     Haven't learned yet
* DB/Login -    Haven't learned yet
* WebSocket -   Haven't learned yet

## HTML deliverable
* HTML pages - Four html pages that has the ability to Login, List, Save, and communicate with others through review/comment page.
* Links - From Login page to List page
* Text - Short textual introduction of this application at Review page.
* Images - Image for Restaurants, review Page
* DB/Login - Input box and submit box for Login. Add to cart and remove button to add or remove lists from cart.
* WebSocket - Realtime comments

## CSS deliverable
* Header, footer, and main content body - Using consistent headers and footers across all pages.
* Navigation elements - Anchor elements with black and red colors
* Responsive to window resizing - Adapting to window resizing. It will hide footer and header when shrinked.
* Application elements - Restaurant lists and reviews would appear like a card.
* Application text content - Consistant font with highlighted colors.
* Application images - All list images are styled to look more professional.

## React deliverable
For this deliverable, I used JavaScript and React to create a functional application that allows users to interact with restaurant data.
* Bundled and traspiled - done
* Components
    Login - Handles user auth. User can login and access to list and other components.
    List - User can add items to the cart.
    Cart - Shows the restaurants added by the user. Items can be removed. Cart data is stored and retrieved from localStorage.
    Review - Displays existing reviews and allows users to submit new reviews. Reviews are rendered in real-time.
* Router - Navigation between Login, List, Cart and Review components
* Hooks - Uses useState to manage state across componets, such as auth, cart items, and reviews.

## Service deliverable

## DB/Login deliverable

## WebSocket deliverable
