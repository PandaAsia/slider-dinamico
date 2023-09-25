var data = [
  {
    img: "assets/__aoi_yukie_school_girl_strikers_drawn_by_kobayashi_gen__sample-b893a62ab39a90e3f2681b151273006e.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__charlotte_weiss_school_girl_strikers_drawn_by_kobayashi_gen__sample-65bb7adf35a237ad57fb5fdfab226daf.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__fei_li_school_girl_strikers_drawn_by_kobayashi_gen__sample-0ff977198317f34fb9b1b9ddd4e9667a.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__hinomiya_niho_school_girl_strikers_drawn_by_kobayashi_gen__sample-6127b52a03fab03e8c69b88b547c4830.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__ibuki_imina_school_girl_strikers_drawn_by_kobayashi_gen__1ba7a36e6e4d84711da1f8c06a0d3ccf.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__kannagi_shiori_school_girl_strikers_drawn_by_kobayashi_gen__sample-22daf55eb0bb4752d9623ba70b7a955c.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__kurimoto_haruka_school_girl_strikers_drawn_by_kobayashi_gen__4502c16d7aae964376a1c913de45f4d3.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__kyoubashi_amane_school_girl_strikers_drawn_by_kobayashi_gen__sample-1fead081388e6647207f71d707c5f1fd.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
  {
    img: "assets/__minato_koharu_school_girl_strikers_drawn_by_kobayashi_gen__sample-d037c2881f7c7a77b63dd07cdbec32ea.jpg",
    country: "series",
    place: "Mona China",
    describe: "Acción, Aventura, Shounen, Sobrenatural",
  },
];

((d) => {
  const $introduce = d.querySelector(".introduce");
  const $ordinalNumber = d.querySelector(".ordinal-number");
  $introduce.innerHTML = "";
  $ordinalNumber.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    $introduce.innerHTML += `
          <div class="wrapper">
            <span>
              <h5 class="country" style="--idx: 0">${data[i].country}</h5>
            </span>
            <span>
              <h1 class="place" style="--idx: 1">${data[i].place}</h1>
            </span>
            <span>
              <p class="describe" style="--idx: 2">${data[i].describe}</p>
            </span>
            <span>
              <button class="discover-button" style="--idx: 3">Aceptar</button>
            </span>
          </div>`;

    $ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
  }

  $introduce.children[0].classList.add("active");
  $ordinalNumber.children[0].classList.add("active");

  const $thumbmailListWrapper = d.querySelector(".thunbnail-list .wrapper");
  $thumbmailListWrapper.innerHTML += `
    <div class="thunbnail zoom">
      <img src="${data[0].img}" alt="" />
    </div>`;
  for (let i = 1; i < data.length; i++) {
    $thumbmailListWrapper.innerHTML += `
    <div class="thunbnail" style="--idx: ${i - 1}">
      <img src="${data[i].img}" alt="" />
    </div>`;
  }
  const $nexBtn = d.querySelector(".navigation .next-button");
  var currentIndex = 0;
  $nexBtn.addEventListener("click", () => {
    $nexBtn.disabled = true;
    var clone = $thumbmailListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    $thumbmailListWrapper.appendChild(clone);
    $thumbmailListWrapper.children[1].classList.add("zoom");
    setTimeout(() => {
      $thumbmailListWrapper.children[0].remove();
    }, 1000);

    for (let i = 2; i < $thumbmailListWrapper.childElementCount; i++) {
      $thumbmailListWrapper.children[i].style = `--idx: ${i - 2}`;
    }
    if (currentIndex < data.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    for (let i = 0; i < data.length; i++) {
      $introduce.children[i].classList.remove("active");
      $ordinalNumber.children[i].classList.remove("active");
    }
    $introduce.children[currentIndex].classList.add("active");
    $ordinalNumber.children[currentIndex].classList.add("active");
    $ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
    $nexBtn.disabled = false;
  });
})(document);
