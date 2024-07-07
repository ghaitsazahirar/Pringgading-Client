// Import necessary components and styles
import './components/Header';
import './components/Footer';
import '../styles/main.css';
import '../styles/responsive.css'
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const activityId = params.get('id');

    if (activityId) {
        const response = await fetch('/data/kegiatan.json');
        const data = await response.json();
        const allActivities = [...data.harian, ...data.mingguan, ...data.bulanan];
        const activity = allActivities.find(act => act.id == activityId);

        if (activity) {
            const detailContainer = document.getElementById('activity-detail');
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

            const description = document.createElement('p');
            description.textContent = activity.description;
            description.classList.add('card-text');

            const content = document.createElement('p');
            content.textContent = activity.content;
            content.classList.add('card-text');

            cardBody.appendChild(title);
            cardBody.appendChild(date);
            cardBody.appendChild(description);
            cardBody.appendChild(content);
            activityElement.appendChild(img);
            activityElement.appendChild(cardBody);
            detailContainer.appendChild(activityElement);
        }
    }
});