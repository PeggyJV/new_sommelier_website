self.addEventListener('push', (ev) => {
    let title = 'Sommelier Cellar';
    let content = 'Sommelier Cellar Event';
    let image = '';
    let link = '';

    console.log('event data', ev);
    if (ev && 'data' in ev) {
        const data = ev.data.json();
        console.log('event content data', data);
        if (data) {
            title = data.title;
            content = data.description;
            image = data.image;
            link = data.url;
        }
    }

    self.registration.showNotification(title, {
        body: content,
        image: image,
        icon: 'https://sommelier.finance/images/etherium.png',
        data: link
    })
})

self.addEventListener("notificationclick", (ev) => {
    ev.notification.close();
    console.log(ev.notification.data);

    if (clients) {
        clients.openWindow(ev.notification.data);
    }
})