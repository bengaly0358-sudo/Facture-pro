// js/darkmode.js

// ============================
// 🌙 DARK MODE MANAGER
// ============================

const DarkMode = {

    // Initialiser
    init() {
        // Récupérer la préférence sauvegardée
        const saved = localStorage.getItem('darkMode');

        if (saved === 'true') {
            this.enable();
        } else if (saved === 'false') {
            this.disable();
        } else {
            // Détecter la préférence système
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.enable();
            } else {
                this.disable();
            }
        }

        // Écouter les changements système
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => {
                if (localStorage.getItem('darkMode') === null) {
                    e.matches ? this.enable() : this.disable();
                }
            });
    },

    // Activer
    enable() {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
        this.updateToggleButtons();
    },

    // Désactiver
    disable() {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', 'false');
        this.updateToggleButtons();
    },

    // Toggle
    toggle() {
        const current = localStorage.getItem('darkMode');
        if (current === 'true') {
            this.disable();
        } else {
            this.enable();
        }
    },

    // Mettre à jour tous les boutons toggle
    updateToggleButtons() {
        const isDark = localStorage.getItem('darkMode') === 'true';
        const buttons = document.querySelectorAll('.dark-mode-toggle');

        buttons.forEach(btn => {
            btn.textContent = isDark ? '☀️' : '🌙';
            btn.title = isDark
                ? 'Passer en mode clair'
                : 'Passer en mode sombre';
        });
    },

    // Vérifier si dark mode actif
    isDark() {
        return localStorage.getItem('darkMode') === 'true';
    }
};

// Initialiser immédiatement
DarkMode.init();

// Rendre global
window.DarkMode = DarkMode;