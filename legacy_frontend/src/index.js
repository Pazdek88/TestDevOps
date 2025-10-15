document.body.innerHTML = `
  <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
    <h1>Frontend (Webpack)</h1>
    <button id="fetchBtn">Call Legacy API</button>
    <p id="response"></p>
  </div>
`;

document.getElementById('fetchBtn').addEventListener('click', async () => {
  const responseElem = document.getElementById('response');
  responseElem.textContent = 'Loading...';
  try {
    const res = await fetch('/old_api/app_dev.php/hello');
    const text = await res.text();
    responseElem.textContent = text;
  } catch (err) {
    responseElem.textContent = 'Error: ' + err.message;
  }
});