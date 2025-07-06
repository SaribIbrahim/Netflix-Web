

// Back to Top Button
class BackToTop {
    constructor() {
        this.button = null;
        this.scrollThreshold = 300;
        this.init();
    }

    init() {
        this.createButton();
        this.bindEvents();
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'back-to-top';
        this.button.innerHTML = '↑';
        this.button.setAttribute('aria-label', 'Back to top');
        this.button.onclick = () => this.scrollToTop();
        document.body.appendChild(this.button);
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            this.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > this.scrollThreshold) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Form Focus Management
class FormFocusManager {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceFormFields();
        this.addFocusIndicators();
    }

    enhanceFormFields() {
        const formFields = document.querySelectorAll('input, textarea, select');
        
        formFields.forEach(field => {
            // Add focus event listeners
            field.addEventListener('focus', (e) => {
                this.handleFocus(e.target);
            });
            
            field.addEventListener('blur', (e) => {
                this.handleBlur(e.target);
            });
            
            // Add keyboard navigation
            field.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && e.target.type !== 'textarea') {
                    e.preventDefault();
                    this.moveToNextField(e.target);
                }
            });
        });
    }

    handleFocus(field) {
        // Add visual feedback
        field.style.transform = 'scale(1.02)';
        
        // Scroll field into view if needed
        setTimeout(() => {
            field.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 100);
    }

    handleBlur(field) {
        field.style.transform = 'scale(1)';
    }

    moveToNextField(currentField) {
        const formFields = Array.from(document.querySelectorAll('input, textarea, select'));
        const currentIndex = formFields.indexOf(currentField);
        const nextField = formFields[currentIndex + 1];
        
        if (nextField) {
            nextField.focus();
        }
    }

    addFocusIndicators() {
        // Add focus indicators for better accessibility
        const style = document.createElement('style');
        style.textContent = `
            .form-control:focus,
            .email-input:focus {
                outline: 2px solid rgba(229, 9, 20, 0.5);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize utilities when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize back to top button
    window.backToTop = new BackToTop();
    
    // Initialize form focus manager
    window.formFocusManager = new FormFocusManager();
});

// Bootstrap Toast Functions
window.showToast = (message, type = 'info') => {
    const toastContainer = document.getElementById('toast-container');
    const toastId = 'toast-' + Date.now();
    
    const toastHTML = `
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="${toastId}">
            <div class="toast-header">
                <strong class="me-auto">${type.charAt(0).toUpperCase() + type.slice(1)}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHTML);
    
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 4000
    });
    
    toast.show();
    
    // Remove element after it's hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
};

window.showSuccess = (message) => {
    showToast(message, 'success');
};

window.showError = (message) => {
    showToast(message, 'error');
};

window.showWarning = (message) => {
    showToast(message, 'warning');
}; 