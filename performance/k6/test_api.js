import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,          // usuarios virtuales
  duration: '30s',  // duración de la prueba

  thresholds: {
    http_req_failed: ['rate<0.01'], // menos del 1% errores
    http_req_duration: ['p(95)<500'] // 95% < 500ms
  }
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts');

  check(res, {
    'status es 200': (r) => r.status === 200,
    'respuesta OK': (r) => r.body.length > 0,
  });

  sleep(1);
}