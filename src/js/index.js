import Alpine from 'alpinejs'
 
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = !this.open;
            document.body.classList.toggle('overflow-hidden', this.open);
        },

        close() {
            this.open = false;
            document.body.classList.remove('overflow-hidden');
        },

        init() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.close();
            });
        }
    }))
})


window.Alpine = Alpine
 
Alpine.start()