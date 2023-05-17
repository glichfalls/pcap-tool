import { generateClasses } from '@formkit/themes';
import genesis from '@formkit/themes/tailwindcss/genesis';
import ports from "~/rules/ports";
import vlan from "~/rules/vlan";
import ips from "~/rules/ips";

export default {
    config: {
        classes: generateClasses(genesis),
    },
    rules: {
        ports,
        ips,
        vlan,
    }
}