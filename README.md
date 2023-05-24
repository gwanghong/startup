CS260 Spring Notes
[notes.md](https://github.com/gwanghong/startup/blob/main/notes.md)

# Menu Voter
  ## Elevator pitch
  Somedays, it is difficult to pick what to eat for lunch/dinner. There are so many categories to choose. It could be 
  chinese, korean, japanese, western food, 
  spicy or non spicy,
  bread, rice, noodles,
  hot or cold, etc.
  We can choose by voting with friends,
  or by checking trending food ranks from other search engine or delivery apps. 

## Design
  ![Alt text](sketch.jpg)

## Key features
* Secure login over HTTPS
* Add/Remove function to add/delete options 
* Ability to select or cancel vote
* Rank displayed by total numbers of votes
* Ability to discuss with others in chat
* Showing real-time data of trending foods on search engine
## Technologies
* HTML - 4 HTML pages. Each pages is for in order: Login, Home, Vote, Trending.
* CSS -         Haven't learned yet
* JavaScript -  Haven't learned yet
* Service -     Haven't learned yet
* DB -          Haven't learned yet
* Login -       Haven't learned yet
* WebSocket -   Haven't learned yet
* React -       Haven't learned yet
## HTML deliverable
* HTML pages - Total of 4 pages: login, welcome page (Home), vote, trending
* Links - After logging in (page1), this will automatically lead to Welcome Page (page2). Home/Vote/Trending button leading to that html page.
* Images - It would be a good idea to add images of each menus and display right next to it.
* Add/Remove - Input box and add/remove button
* Login - Input box and sign-in button
* Database - menus that are listed
* WebSocket - The total count of votes, and chat.