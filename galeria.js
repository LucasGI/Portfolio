
    const imgFull = document.getElementById('imgFull');
    const imgFullImg = document.getElementById('imgFull-img');
    const closeBtn = document.getElementById('close');
    const images = document.querySelectorAll('.galeria img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        imgFullImg.src = img.src;
        imgFull.classList.add('show');
      });
    });

    closeBtn.addEventListener('click', () => {
      imgFull.classList.remove('show');
    });

   