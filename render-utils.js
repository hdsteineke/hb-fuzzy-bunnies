export function renderBunny(someBunny) {
    const bunnyEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');

    bunnyEl.classList.add('bunny');
    nameEl.textContent = someBunny.name;
    a.href = `./bunny-detail/?id=${someBunny.id}`;

    bunnyEl.append(nameEl);

    a.append(bunnyEl);

    return a;
}

export function renderBunnyDetail(someBunny) {
    const bunnyEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const familyEl = document.createElement('select');
    


    bunnyEl.classList.add('bunny');

    nameEl.textContent = someBunny.name;
 
}
