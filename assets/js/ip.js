async function fetchip() {
    try {
        const response = await fetch('https://api.sanweb.info/myip/');
        const data = await response.json();
        console.log(data.ip);
        if (document.getElementById('iptest') != null) {
            document.getElementById('iptest').innerHTML = 'Fetching the USER IP 📦';
            setTimeout(() => {
                document.getElementById('iptest').innerHTML = 'Your IP: \t' + data.ip;
            }, 1000);
        }
    } catch (exception) {
        console.log('Failed to retrieve your IP informations');
        if (document.getElementById('iptest') != null) {
            document.getElementById('iptest').innerHTML = 'Fetching the USER IP 📦';
            setTimeout(() => {
                document.getElementById('iptest').innerHTML = 'Connection Lost';
            }, 1000);
        }
    }
}
fetchip();