import './components/Header'
import './components/Footer'
import '../styles/main.css'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        // You can add form validation here if needed

        // If the form is valid, redirect to layanan.html
        if (email && password) {
            window.location.href = 'langganan.html';
        } else {
            // Show some error message if needed
            alert('Please fill in both fields');
        }
    });
});
