import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 500,         // virtual users
    duration: '300s',
};

export default function() {
    const url = 'http://ld2023-demo/distros';

    const response = http.get(url);

    // Check if the response returned a status code of 200
    check(response, {
        'is status 200': (r) => r.status === 200,
    });

    sleep(1); // Add a delay between requests
}
