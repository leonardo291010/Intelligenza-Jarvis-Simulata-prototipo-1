const camera = document.getElementById("camera");
const preview = document.getElementById("preview");

export function initCamera() {
  camera.addEventListener("change", () => {
    const file = camera.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    preview.src = url;
  });
}
