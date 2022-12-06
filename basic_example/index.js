let json = await http.get('https://httpbin.org/get').then((data) => data.json());

console.log(json.headers['Host']);
