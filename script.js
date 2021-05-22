let countKubiks = 2*2;
let arryKubiks = [];

for (let i = 0, i< countKubiks / 2, i++) {
    let kubik = { 
        red: Math.round( Math.rundom() * 255),
        green: Math.round( Math.rundom() * 255),
        blue: Math.round( Math.rundom() * 255),
    }

    arryKubiks.push(kubik);
}
arryKubiks