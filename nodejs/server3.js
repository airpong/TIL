const http = require("http");

const parseCookies = (cookie = "") => {
  const a = cookie.split(";");

  const b = a.map((v) => v.split("="));

  const c = b.map(([k, ...vs]) => {
    return [k, vs.join("=")];
  });

  const d = c.reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v);

    return acc;
  }, {});
  return d;
};

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);

    console.log(req.url, cookies);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8082, () => {
    console.log("8082서버에서 대기 중입니다!");
  });
