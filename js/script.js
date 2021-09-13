// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const icons = [

	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
];


const colors = {
    food: "pink",
    animal: "green",
    beverage: "yellow"
};

/**
 * funzioni
 */

const printIcons = (arr, container) => {
    container.innerHTML = " ";

    arr.forEach(
        (elm) => {
            const {family, name, prefix, color} = elm;
        
            container.innerHTML += `
                <div class="box">
                    <div><i class="${family} ${prefix}${name} fa-2x" style="color: ${color}" ></i></div>
                    <div class="name">${name}</div>
                </div>`
        }
    );
}







/**
 * programnma principale
 */

const containerIcons = document.getElementById("icons");

const iconsColored = icons.map(
    (elm) => {
        return {
            ...elm,
            color: colors[elm.category]
        }
        
    }
);



printIcons(iconsColored, containerIcons);



//creiamo una select con i tipi di icone e usiamola per filtrare le icone
// creo una option per ogni categoria

const iconCategory = [];
icons.forEach(
    (elm) => {
        if ( iconCategory.includes(elm.category) == false )
        iconCategory.push(elm.category)
    }
);

const selectCategories = document.getElementById("category");

iconCategory.forEach(
    (elm) => {
        selectCategories.innerHTML += `<option value="${elm}">${elm}</option>`
    }
);

// creo evento sulla select
selectCategories.addEventListener("change",
    function() {
        const iconsFiltered = iconsColored.filter(
            (elm) => {
                if (elm.category == selectCategories.value || selectCategories.value == " ") {
                    return true;
                }
                return false;
            }
        )

        printIcons(iconsFiltered, containerIcons);
    }
);