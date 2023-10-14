import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '30s', // for 30 seconds
};

const linuxDistros = [
    { name: "Ubuntu", description: "Una distribuzione basata su Debian con ambiente desktop GNOME", year: 2004 },
    { name: "Fedora", description: "Un progetto sponsorizzato da Red Hat", year: 2003 },
    { name: "Debian", description: "Una distribuzione di libero scambio con una vasta comunità", year: 1993 },
    { name: "Arch Linux", description: "Una distribuzione rolling release con il pacman package manager", year: 2002 },
    { name: "CentOS", description: "Una distribuzione derivata dalle sorgenti di Red Hat Enterprise Linux (RHEL)", year: 2004 },
    { name: "openSUSE", description: "Distribuzione con il potente gestore di pacchetti Zypper", year: 2005 },
    { name: "Gentoo", description: "Una distribuzione metadistribuzione orientata alla performance e alla flessibilità", year: 2002 },
    { name: "Manjaro", description: "Basato su Arch Linux, ma con una maggiore facilità d'uso", year: 2011 },
    { name: "Mint", description: "Una distribuzione user-friendly basata su Ubuntu", year: 2006 },
    { name: "Slackware", description: "La distribuzione Linux più antica ancora in sviluppo", year: 1993 },
    { name: "RHEL", description: "Red Hat Enterprise Linux, focalizzata sul mercato aziendale", year: 2000 },
    { name: "Alpine Linux", description: "Una distribuzione leggera orientata alla sicurezza", year: 2005 },
    { name: "Kali Linux", description: "Focalizzata sulla penetrazione e sulla sicurezza informatica", year: 2013 },
    { name: "Elementary OS", description: "Con un design curato e basato su Ubuntu", year: 2011 },
    { name: "Lubuntu", description: "Versione leggera di Ubuntu che utilizza l'ambiente desktop LXQt", year: 2008 },
    { name: "Xubuntu", description: "Versione di Ubuntu che utilizza l'ambiente desktop XFCE", year: 2006 },
    { name: "Zorin OS", description: "Distribuzione basata su Ubuntu progettata per essere simile a Windows", year: 2009 },
    { name: "Solus", description: "Distribuzione indipendente focalizzata sulla semplicità e l'usabilità", year: 2015 },
    { name: "Pop!_OS", description: "Distribuzione sviluppata da System76, basata su Ubuntu", year: 2017 },
    { name: "Puppy Linux", description: "Distribuzione leggera progettata per avviarsi rapidamente da vari tipi di storage", year: 2005 },
    { name: "MX Linux", description: "Distribuzione basata su Debian, conosciuta per la sua leggerezza e flessibilità", year: 2014 },
    { name: "Linux Lite", description: "Distribuzione basata su Ubuntu LTS, progettata per essere leggera", year: 2012 },
    { name: "Mageia", description: "Fork di Mandriva Linux, con una comunità attiva", year: 2011 },
    { name: "Deepin", description: "Distribuzione cinese con un proprio ambiente desktop chiamato DDE (Deepin Desktop Environment)", year: 2004 },
    { name: "Parrot OS", description: "Distribuzione focalizzata sulla sicurezza, simile a Kali ma con ulteriori strumenti e servizi", year: 2013 },
    { name: "Clear Linux", description: "Progetto Intel per ottimizzazioni specifiche per le loro CPU", year: 2015 },
    { name: "Tails", description: "Distribuzione per la privacy che indirizza tutto il traffico attraverso Tor", year: 2009 },
    { name: "Void Linux", description: "Distribuzione indipendente con il suo sistema di gestione pacchetti xbps", year: 2008 },
    { name: "Bedrock Linux", description: "Distribuzione che permette di utilizzare pacchetti da altre distribuzioni Linux contemporaneamente", year: 2012 }
];

function getRandomDistro() {
    return linuxDistros[Math.floor(Math.random() * linuxDistros.length)];
}

export default function() {
    const url = 'http://ld2023-demo/distros';
    const distro = getRandomDistro();

    const payload = JSON.stringify({
        name: distro.name,
        year: distro.year,
        description: distro.description
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);

    sleep(1);
}
