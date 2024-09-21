# Joke App

The Joke App allows users to view a list of jokes and add new jokes to the database. It provides a simple and intuitive interface to interact with jokes.

## User Journeys

### 1. Viewing Jokes

1. **Open the App**: When the user opens the app, they are presented with a list of jokes fetched from the database.
2. **Browse Jokes**: The user can scroll through the list to read the jokes. Each joke displays the setup and the punchline.

### 2. Adding a New Joke

1. **Fill in Joke Details**: At the top of the page, there is a form with two input fields:
   - **Setup**: The user enters the setup for the joke.
   - **Punchline**: The user enters the punchline for the joke.
2. **Submit the Joke**: The user clicks the "Add Joke" button to submit the joke.
3. **Loading State**: While the joke is being added, the button displays "Adding..." to indicate that the request is in progress, and the button is disabled to prevent multiple submissions.
4. **Joke Added**: Once the joke is successfully added, it appears at the top of the joke list.
5. **Error Handling**: If there is an error adding the joke, an error message is logged to the console.

## App Features

- **Responsive Design**: The app is responsive and works well on different screen sizes.
- **User-Friendly Interface**: Clean and simple layout for easy navigation.
- **Real-Time Updates**: Newly added jokes appear immediately in the joke list without requiring a page refresh.
- **Loading Indicators**: Buttons display loading states during API requests to provide feedback to the user.
- **Form Validation**: The "Add Joke" button is disabled if the setup or punchline fields are empty.

## Steps to Use the App

1. **Open the App**: Launch the app in your web browser.
2. **View Jokes**: Browse through the list of jokes displayed on the page.
3. **Add a New Joke**:
   - Enter the joke's setup in the "Setup" input field.
   - Enter the joke's punchline in the "Punchline" input field.
   - Click the "Add Joke" button.
4. **Wait for Confirmation**: The "Add Joke" button will display "Adding..." while your joke is being submitted.
5. **See Your Joke**: Once added, your new joke will appear at the top of the joke list.
6. **Error Handling**: If there's an error during submission, check the console for error messages.

Enjoy sharing and reading jokes!