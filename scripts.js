let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthYear = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

prevMonthBtn.addEventListener('click', () => changeMonth(-1));
nextMonthBtn.addEventListener('click', () => changeMonth(1));

function changeMonth(change) {
    currentMonth += change;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    renderCalendar();
}

function renderCalendar() {
    const firstDay = new Date(currentYear, currentMonth).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    calendarGrid.innerHTML = '';
    monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = i;

        if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            dayCell.classList.add('today');
        }

        calendarGrid.appendChild(dayCell);
    }
}

renderCalendar();


const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const currentMonthBtn = document.getElementById('current-month');
currentMonthBtn.addEventListener('click', () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar();
});

