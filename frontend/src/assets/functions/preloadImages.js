export default ({ image }) =>
  new Promise((res) => {
    const img = new Image();
    img.onload = () => res({ path: image, status: 'ok' });
    img.onerror = () => res({ path: image, status: 'error' });
    img.src = image;
  });
