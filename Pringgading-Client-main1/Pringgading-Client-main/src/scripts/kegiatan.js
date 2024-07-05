// Import necessary components and styles
import './components/Header';
import './components/Footer';
import '../styles/main.css';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

// Function to fetch and display data
async function fetchData() {
    try {
        const response = await fetch('/data/kegiatan.json'); // Adjust the path as necessary
        const data = await response.json();
        displayData('harian', data.harian);
        displayData('mingguan', data.mingguan);
        displayData('bulanan', data.bulanan);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display data
function displayData(category, activities) {
    const container = document.getElementById(`${category}-container`);
    
    const row = document.createElement('div');
    row.classList.add('row');
    
    activities.forEach(activity => {
        const col = document.createElement('div');
        col.classList.add('col-md-4'); // Create a column with Bootstrap grid system
        
        const link = document.createElement('a');
        link.href = `detailkegiatan.html?id=${activity.id}`; // Assuming each activity has a unique ID
        link.classList.add('text-decoration-none'); // Optional: remove underline from link text

        const activityElement = document.createElement('div');
        activityElement.classList.add('activity', 'card');

        const img = document.createElement('img');
        img.src = activity.img;
        img.alt = activity.title;
        img.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h2');
        title.textContent = activity.title;
        title.classList.add('card-title');

        const date = document.createElement('p');
        date.textContent = activity.tanggal;
        date.classList.add('card-text');

        cardBody.appendChild(title);
        cardBody.appendChild(date);
        activityElement.appendChild(img);
        activityElement.appendChild(cardBody);
        link.appendChild(activityElement);
        col.appendChild(link);
        row.appendChild(col);
    });
    
    container.appendChild(row);
}

document.addEventListener('DOMContentLoaded', fetchData);
