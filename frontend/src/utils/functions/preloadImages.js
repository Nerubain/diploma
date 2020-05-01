export default ({ image, user }) =>
  new Promise((res) => {
    const img = new Image();
    img.onload = () => res({ path: user ? user.image : image, status: 'ok' });
    img.onerror = () => res({ path: user ? user.image : image, status: 'error' });
    img.src = user ? user.image : image;
  });
