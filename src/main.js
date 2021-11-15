import { createApp } from 'vue'
import App from './App.vue'


/**
 * Problem description:
 * If the. .scss file is not loaded in main.js file,
 * then css.preprocessoroptions in vite.config.js will not be preloaded.
 * 
 * if loaded .scss in main.js file,
 * then we can use the variables
 * defined in the (./src/cores/variables/index.scss) file.
 */


/** Try opening and closing comments to preview the project. */
// import './cores/variables/common.scss';  

/** Scene phenomenon:
 *  Please note that the content of the file common.scss is empty.
 * 
 *  when open this notes, will execute the config of css.preprocessoroptions
 *  the string 'Hello Vue 3 + Vite' will turns red (come from var(--sidebar_color))
 * 
 *  when close this notes, css.preprocessorOptions Invalid configuration.
*/

createApp(App).mount('#app')
