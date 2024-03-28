const title = document.querySelector('h1.headline-1');

if (title !== null) {
        // This will get the text, including converting "&nbsp;" to a regular space
        const text = title.textContent;
        const displayElement = document.querySelector('#titleDisplay');
        if (displayElement !== null) {
            displayElement.textContent = text;
        }
        // Print the text to the console
        console.log(text);
    } else {
        console.log('Element not found');
    }
