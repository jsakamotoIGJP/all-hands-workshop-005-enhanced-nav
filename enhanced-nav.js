document.addEventListener('click', async (e) => {
    if (e.target instanceof HTMLAnchorElement && e.target.href) {
        e.preventDefault();
        window.history.pushState(null, '', e.target.href);

        const response = await fetch(e.target.href);
        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        document.body.innerHTML = doc.body.innerHTML;
        document.title = doc.title;
    }
});