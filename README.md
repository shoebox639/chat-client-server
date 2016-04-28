# Chat Client and Server

##Run 

```
npm install
npm run server
```

Navigate to localhost:8080 and you should see the client and server both run.

## Usage
Usernames are unique across the server. If you put in a name that's already in use, the server will reject it. Once the serve accepts your connection, your username will be saved in the cookie. This is a _very_ simplified implementation of a logged-in cookie. 

To logout, just click on the logout button at the top right. 

Once logged in, you'll see a list of chatrooms that you can join. They each display the number of unread messages. Simply click on the "Join" button to join that chatroom and a modal will popup.

The modal shows the chat history since the server started. Messages received while logged out will be show up. Messages in a chatroom are automatically "read" when you join the chatroom. Click anywhere to quit the chat room.