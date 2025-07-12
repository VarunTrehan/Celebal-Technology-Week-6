📦 JavaScript first() Function Demo
This project demonstrates a JavaScript function called first() that returns the first element(s) of an array. It includes a simple HTML/CSS interface to display the function's output.

📁 Project Structure
bash
Copy
Edit
project-folder/
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the page
└── script.js       # JavaScript function and test output
✅ Features
Returns the first element of an array.

If a second argument n is passed:

Returns the first n elements of the array.

Handles edge cases like empty arrays, n > array length, and negative n.

Clean, responsive UI built with plain HTML and CSS.

Outputs are displayed in the browser using <pre> formatting.

🔍 Usage
Clone or download the repository.

Open index.html in your browser.

View the results of test cases for the first() function.

📜 Example Outputs
javascript
Copy
Edit
first([7, 9, 0, -2]);        // 7
first([], 3);               // []
first([7, 9, 0, -2], 3);     // [7, 9, 0]
first([7, 9, 0, -2], 6);     // [7, 9, 0, -2]
first([7, 9, 0, -2], -3);    // []
🎨 Live Demo UI

<sub>Mockup preview – replace with actual screenshot if needed</sub>

🚀 Future Improvements
Add user input fields to dynamically test arrays and n values.

Add error handling or input validation.

Support for other array utility functions.

🧑‍💻 Author
Built with 💡 by Varun Kumar Trehan
