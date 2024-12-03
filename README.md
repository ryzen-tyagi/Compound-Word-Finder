
# Compound Word Finder

This project identifies the longest compound words from an input file containing a list of words. It works by checking if a word can be formed by combining two smaller words from the list. The program efficiently determines the longest and second longest compound words.

## Features

- Reads a list of words from an input file (`Input_02.txt`).
- Identifies compound words where a word is formed by concatenating two other words from the list.
- Outputs the longest and second longest compound words.
- Measures and displays the execution time in milliseconds.

## Technologies Used

- **Node.js**: A JavaScript runtime for building the application.
- **File System (fs)**: For reading the input file.
- **Readline**: For reading lines from the file.
- **JavaScript**: The language used for implementing the algorithm.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- **Node.js**: You need to have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/compound-word-finder.git
   cd compound-word-finder
   ```

2. Create a text file named `Input_02.txt` in the project directory and add your list of words (one word per line).

### Running the Program

1. Open a terminal and navigate to the project directory.
2. Run the program using Node.js:
   ```bash
   node main.js
   ```

### Example Output

```bash
Time taken: 123.45 milliseconds
Longest Compound Word: compoundword
Second Longest Compound Word: anothercompound
```

## How It Works

- The program reads the list of words from `Input_02.txt`.
- It sorts the words by length, then iterates through the sorted list to find compound words.
- A compound word is defined as a word that can be broken down into two smaller words from the list.
- The longest and second longest compound words are displayed in the console.
- The time taken for processing the list is printed in milliseconds, with the output displayed in **bold blue**.

## Code Structure

- `main.js`: Contains the main logic for reading the file, checking for compound words, and displaying the output.
- `Input_02.txt`: A sample input file with words (one per line).

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. If you encounter any issues, open an issue on GitHub.
