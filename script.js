// ONLINE CHATROOM
//   //Create the button
//   const submitButton = document.createElement('button');
//   //Click event for submit button
//   submitButton.addEventListener('click', handleSubmitButton);
//   submitButton.innerText = "Submit";

//   const getMessages = async () => {
//     const response = await fetch(API_ENDPOINT)
//     const json = await response.json();
//     json.forEach(({ message, created_by, created_at }) => {
//       // Create a new div for each message
//       const chatMessage = document.createElement('p');
//       chatMessage.setAttribute('class', 'message')
//       chatMessage.innerText = message;
      
//       // create a new div for each user 
//       const chatUser = document.createElement('h4');
//       chatUser.setAttribute('class', 'username')
//       chatUser.innerText = created_by; 
      
//       // appending chatbubble to chatwindow, and also appending chatUser and chatMessage to the chat Bubble
//       messageWrapper.appendChild(chatBubble);
//       chatBubble.appendChild(chatUser);
//       chatBubble.appendChild(chatMessage);
//     });
//   }
//   document.body.appendChild(chatWindow);
//   document.body.appendChild(textInput);
//   document.body.appendChild(submitButton);
//   getMessages();

//   function handleSubmitButton() {
//     const messageText = textInput.value;
//     textInput.value = '';
//     const messageObject = {};
//     messageObject["created_by"] = "Cindy and Brian";
//     messageObject["message"] = messageText;
//     postMessages(messageObject)
//       .then(() => {
//         messageWrapper.innerHTML = '';
//         getMessages();
//       })
//   }
// });

