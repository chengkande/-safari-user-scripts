
function my_dark_mode_init() {
  new Darkmode().showWidget();
}

window.addEventListener('load', addDarkmodeWidget);

fetch('https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        const script = document.createElement('script');
        script.textContent = data;
        document.head.appendChild(script);
        const script2 = document.createElement('script');
        script2.textContent = "my_dark_mode_init()";
        document.head.appendChild(script2);
    })
    .catch(error => console.error('Failed to load script:', error));
