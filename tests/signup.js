import http from "k6/http";
import { sleep, check } from "k6";
import uuid from './libs/uuid.js'


export default function () {
  const url = "http://localhost:3333/signup";
  const payload = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qacademy.io`,
    password: 'qacademy',
  });
  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }
  const res = http.post(url, payload, headers);

  console.log(res.body);
  check(res, {
    "status deve ser 201": (r) => r.status === 201
  });
  sleep(1);
}
