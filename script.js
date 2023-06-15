 // JavaScript code for generating the calendar grid and ticking the boxes
 document.addEventListener('DOMContentLoaded', function() {
    // Get the reference to the calendar container
    const calendarContainer = document.getElementById('calendarContainer');

    // Create the calendar grid
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';

    // Generate the cells for the calendar grid
    const numberOfCells = 52 * 90; // Adjust the number of cells based on the desired number of weeks and years
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell';
      calendarGrid.appendChild(cell);
    }

    // Append the calendar grid to the container
    calendarContainer.appendChild(calendarGrid);

    // Get the reference to the birthdate input and generate button
    const birthdateInput = document.getElementById('birthdate');
    const generateBtn = document.getElementById('generateBtn');

    // Function to calculate the number of ticked boxes
    function calculateTickedBoxes(birthdate) {
      const currentDate = new Date();
      const diffInWeeks = Math.floor((currentDate - birthdate) / (1000 * 60 * 60 * 24 * 7));
      const cells = document.getElementsByClassName('calendar-cell');

      for (let i = 0; i < diffInWeeks; i++) {
        cells[i].classList.add('ticked');
      }
    }

    // Event listener for the generate button
    generateBtn.addEventListener('click', function() {
      const birthdate = new Date(birthdateInput.value);
      calculateTickedBoxes(birthdate);
    });
  });