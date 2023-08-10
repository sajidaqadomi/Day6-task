const ListContainer = document.getElementById("characterList");

async function fetchCharechters() {
  try {
    const Charecters = await fetch("https://rickandmortyapi.com/api/character/?status=alive");
    const response = await Charecters.json();

    renderUI(response.results);

  } catch (error) {
    ListContainer.innerHTML = `<li class="error-message"> Something Went Wrong ❌ </li>`;
  }
}

function renderUI(items) {
  let charecterItems = "";
  const itemsLength = items.length;

  itemsLength > 50
    ? items.slice(0, 51)
    : itemsLength > 0
    ? items.forEach((item) => {
        charecterItems += `<li class="charecter-item">
    <img src="${item.image}" alt=${item.name} />
     <div class="charecter-info">
       <div class="charecter-info-item">
       <span class="label">Name:
       </span><span>${item.name}</span>
       </div>
       <div class="charecter-info-item">
       <span class="label">Gender:</span>
       <span>${item.gender}</span>
       </div>
       <div class="charecter-info-item">
       <span class="label">Species: </span>
       <span>${item.species}</span>
       </div>
       <div class="charecter-info-item">
       <span class="label">Location: </span>
       <span><a href="${item.location.url}">${item.location.url}</a></span>
       </div>
     </div>
     </li>`;
      })
    : `<li class="empty-characters">There is no any  characters 🥹🥹🥹</li>`;

  ListContainer.innerHTML = charecterItems;
}

fetchCharechters();
