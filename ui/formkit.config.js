import { generateClasses } from '@formkit/themes';
import genesis from '@formkit/themes/tailwindcss/genesis';

export default {
    config: {
        classes: generateClasses(genesis),
    }
}