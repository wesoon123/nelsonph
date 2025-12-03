import Alpine from 'alpinejs'
 
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,
        catUrl:'' ,

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
        },

        //  async coffeAPi() {
        //     try {
        //         const response = await fetch('https://api.thecatapi.com/v1/images/search');
        //         const data = await response.json();
        //         this.catUrl = data[0].url; // update reactive variable
        //         console.log(data);
        //     } catch (error) {
        //         this.catUrl = "Error loading cat 😿";
        //     }
        // }
    }))
})


window.Alpine = Alpine
 
Alpine.start()