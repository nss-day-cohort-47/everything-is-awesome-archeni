console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const dropdownDom = document.querySelector('#showMaterials')

dropdownDom.addEventListener('change', (event) => {
  if(event.target.id === 'showMaterials') {
    const material = (event.target.value);
    filterMaterial(material);
  } else if (event.target.id === 'showAll') {
    makeLegoList(useLegos());
  }
})

const filterMaterial = (whatFilter) => {
    const filterArray = useLegos().filter(singleLego => {
        if (singleLego.Material.includes(whatFilter)) {
            return singleLego;
        }
    })
    makeLegoList(filterArray);
}

const searchDom = document.querySelector('#searchButton')
const searchBarDom = document.querySelector('#searchBar')
searchDom.addEventListener('click', (event) => {
  const searchBarValue = searchBarDom.value;
  console.log(`search bar value is ${searchBarValue}`)
  filterSingleItem(searchBarValue);
})

const filterSingleItem = (whatFilter) => {
  const filterArray = useLegos().filter(singleLego => {
      if (singleLego.LegoId === whatFilter) {
          return singleLego;
      }
  })
  makeLegoList(filterArray);
}

const startEIA = () => {
	loadLegos()
	.then(legoArray => {
		makeLegoList(legoArray)
	})

}

startEIA();