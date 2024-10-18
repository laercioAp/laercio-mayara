function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Gerar e atribuir um QR code aleatório ao atributo src da imagem do QR code
    const qrcode = document.getElementById('qrcode');
    const randomString = Math.random().toString(36).substring(7);
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${randomString}`;
    qrcode.src = qrCodeUrl;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
