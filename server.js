const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name;

    // Handle missing name parameter

    // Get the current day of the week
    const dayOfWeek = new Date().toLocaleString('en-US', { weekday: 'long' });

    // Generate a cheerful message based on the day
    let dayMessage;
    switch (dayOfWeek) {
        case 'Monday':
            dayMessage = 'Happy Monday! Start your week with energy!';
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = 'Have a wonderful day!';
            break;
    }

    // Return the response as an array of strings
    res.send([
        `Hello, ${userName}! Welcome to our assistant app!`,
        dayMessage
    ]);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
