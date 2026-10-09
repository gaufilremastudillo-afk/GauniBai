// PUT YOUR REAL CONTACT INFO HERE
const myProfile = {
  name: "Gaufilrem Astudillo",
  title: "Developer & Creator",
  bio: "Tap any button below to connect with me directly.",
  phone: "09912310196",
  email: "gaufilrem00@gmail.com",
  whatsapp: "https://wa.me/639000000000",
  instagram: "https://www.instagram.com/trdr_gflrm?exln=NWVmcjBpMHBpYXF1",
  facebook: "https://www.facebook.com/share/19ah7XFJKZ/"
};

// Generates and downloads the .vcf contact card
function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${myProfile.name}`,
    `TITLE:${myProfile.title}`,
    `TEL;TYPE=CELL,VOICE:${myProfile.phone}`,
    `EMAIL;TYPE=INTERNET,PREF:${myProfile.email}`,
    `NOTE:${myProfile.bio}`,
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${myProfile.name.replace(/\s+/g, "_")}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

document.addEventListener("DOMContentLoaded", () => {
  // Update links
  document.getElementById("emailLink").href = `mailto:${myProfile.email}`;
  document.getElementById("linkWhatsapp").href = myProfile.whatsapp;
  document.getElementById("linkInstagram").href = myProfile.instagram;
  document.getElementById("linkFacebook").href = myProfile.facebook;

  // Contact download button
  const saveBtn = document.getElementById("saveContactBtn");
  saveBtn.addEventListener("click", downloadVCard);

  // QR Modal
  const qrBtn = document.getElementById("qrBtn");
  const qrModal = document.getElementById("qrModal");
  const closeQrBtn = document.getElementById("closeQrBtn");
  const qrImage = document.getElementById("qrImage");

  qrBtn.addEventListener("click", () => {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(window.location.href)}`;
    qrModal.classList.remove("hidden");
  });

  closeQrBtn.addEventListener("click", () => qrModal.classList.add("hidden"));
  qrModal.addEventListener("click", (e) => {
    if (e.target === qrModal) qrModal.classList.add("hidden");
  });
});