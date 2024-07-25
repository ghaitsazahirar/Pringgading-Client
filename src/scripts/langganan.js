
import './components/HeaderLayanan'
import './components/Footer'
import '../styles/main.css'
import '../styles/responsive.css'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'

// src/scripts/langganan.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.select-button-layanan').forEach(button => {
        button.addEventListener('click', (event) => {
            const targetUrl = event.currentTarget.getAttribute('data-target');
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });
    });
});
