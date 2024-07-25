import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: true, // Needed for the Docker Container port mapping
        hmr: {
            host: 'localhost', // Define the host for the Hot Module Replacement.
        },
        watch: {
            usePolling: true, // Use polling to detect changeS.
        },
    }
});
