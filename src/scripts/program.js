// Import necessary components and styles
import './components/Header';
import './components/Footer';
import '../styles/main.css';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

// Fungsi untuk mengunduh file PDF
function downloadPDF(filename) {
    const link = document.createElement('a');
    link.href = 'assets/pdf/' + filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Fungsi untuk memuat data JSON dan menampilkan konten
async function loadContent() {
    const response = await fetch('/data/program.json');
    const data = await response.json();

    const integratedFarmingContent = document.getElementById('integrated-farming-content');
    data["Integrated Farming"].forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.content}</p>
            </div>
        `;
        integratedFarmingContent.appendChild(card);
    });

    const wasteManagementContent = document.getElementById('waste-management-content');
    data["Pengolahan Sampah"].forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.content}</p>
            </div>
        `;
        wasteManagementContent.appendChild(card);
    });
}

// Memuat konten setelah halaman siap
document.addEventListener('DOMContentLoaded', loadContent);
