function checkClient() {
    const clientSelect = document.getElementById('clientSelect');
    const resolutionSelect = document.getElementById('resolutionSelect');

    // Eğer Vanilla seçildiyse çözünürlük menüsünü kitleriz
    if (clientSelect.value === 'Vanilla') {
        resolutionSelect.classList.add('disabled-select');
        resolutionSelect.classList.remove('enabled-select');
        resolutionSelect.disabled = true; // Menüyü devre dışı bırak
    } else {
        resolutionSelect.classList.add('enabled-select');
        resolutionSelect.classList.remove('disabled-select');
        resolutionSelect.disabled = false; // Menüyü tekrar aktif et
    }
}

function launchClient() {
    const clientSelect = document.getElementById('clientSelect');
    const resolutionSelect = document.getElementById('resolutionSelect');

    const selectedClient = clientSelect.value;
    const selectedResolution = resolutionSelect.value;

    if (selectedClient === 'default') {
        alert("Please select a client!");
        return;
    }

    // Vanilla seçiliyse varsayılan bir çözünürlük ekleyin (örneğin, 1920x1080)
    let pageUrl;
    if (selectedClient === 'Vanilla') {
        pageUrl = `Vanilla.html`;
    } else {
        pageUrl = `${selectedClient}${selectedResolution}.html`;
    }

    // Yeni sekmede aç
    window.open(pageUrl, '_blank');
}
