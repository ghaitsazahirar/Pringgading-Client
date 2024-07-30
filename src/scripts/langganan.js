
import './components/HeaderLayanan'
import './components/Footer'
import '../styles/main.css'
import '../styles/responsive.css'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'

// src/scripts/langganan.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".select-button-layanan");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = button.getAttribute("data-target");
            window.location.href = target;
        });
    });
});