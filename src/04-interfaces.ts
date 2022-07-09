


interface PluginConfig {
    readonly selector: string;
    perPage?: number;
    starIndex?: number;
    draggable: boolean
}


const config:  PluginConfig = {
    selector: "#plugin-1",
    perPage: 2,
    // starIndex: 0,
    draggable: false,
}

// config.newProp = "qweqw"
// config.selector = "qw212eq";

// config.perpage = "w1e1";

interface Employes {
    [key: string]: number;
}

const employees: Employes = {
    mango: 2,
    poly: 15,
    ajax: 26,
    wiki: 20
}

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;
for (const [name , value] of entries) {
    if (bestEmployeeProIndex <= value) {
        bestEmployeeName = name;
    }
}

console.log(config, bestEmployeeName)
export {}