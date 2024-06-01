const IMGS = [
	"https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1111317/pexels-photo-1111317.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/7997395/pexels-photo-7997395.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/3608294/pexels-photo-3608294.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/165844/noodles-tagliatelle-raw-colorful-165844.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/2479238/pexels-photo-2479238.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/957040/night-photograph-starry-sky-night-sky-star-957040.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1173576/pexels-photo-1173576.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/946255/pexels-photo-946255.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/947407/pexels-photo-947407.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/3766257/pexels-photo-3766257.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/209549/pexels-photo-209549.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1078565/pexels-photo-1078565.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1310181/pexels-photo-1310181.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/7354507/pexels-photo-7354507.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/6805695/pexels-photo-6805695.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1145977/pexels-photo-1145977.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/2673876/pexels-photo-2673876.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/633437/pexels-photo-633437.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1961778/pexels-photo-1961778.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/2269667/pexels-photo-2269667.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1"
];
/*

	"https://images.pexels.com/photos/2082617/pexels-photo-2082617.jpeg?auto=compress&cs=tinysrgb&w=680&h=375&dpr=1",
	"https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/250288/pexels-photo-250288.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/8473534/pexels-photo-8473534.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/144234/bull-landscape-nature-mammal-144234.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/1432039/pexels-photo-1432039.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/350626/pexels-photo-350626.jpeg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=680x375&dpr=1",
	"https://images.pexels.com/photos/19678/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=680x375&dpr=1"
*/

const FILTER_COLORS = [
	{ code: "255,0,0", name: "Red" },
	{ code: "0,128,0", name: "Green" },
	{ code: "69, 130, 199", name: "Blue" },
	{ code: "255,0,255", name: "Magenta" },
	{ code: "255,165,0", name: "Orange" },
	{ code: "0,0,0", name: "Black" },
	{ code: "255,255,255", name: "White" }
];
//{ code: "255,255,0", name: "Yellow" },

const TOLERANCE = 50; // this is to give us some range otgherwise it would be almost impossible to find an exact match
const FORBIDDEN_HEX = "#121212"; // a hack to prevent the default browser defined hex value on the color picker.
const TOTAL_IMAGES = 20;
const imageGallery = document.getElementById("image-gallery");
const colorPickers = document.querySelectorAll("input[type=color]");

// store image colors returned by Color Thief
const imageColors = {};

// detect color picker change
colorPickers.forEach((cp) => {
	cp.addEventListener("input", () => {
		//console.log("click")
		filterImages();
	});
});

// reset SPECIFIC color picker to its default value
document.querySelectorAll("button[data-reset]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const colorPicker = btn.previousElementSibling;
		colorPicker.value = FORBIDDEN_HEX;
		filterImages();
	});
});

// reset ALL color pìckers
document.getElementById("btn-restore").addEventListener("click", () => {
	colorPickers.forEach((cp) => (cp.value = FORBIDDEN_HEX));
	filterImages();
});

// check if color is within a tolerance range
function isColorWithinTolerance(color1, color2, tolerance) {
	return (
		Math.abs(color1[0] - color2[0]) <= tolerance &&
		Math.abs(color1[1] - color2[1]) <= tolerance &&
		Math.abs(color1[2] - color2[2]) <= tolerance
	);
}
// convert hex to rgb as the HTML color picker can't return rgb
function hexToRgb(hex) {
	// Remove the hash at the start if it's there
	hex = hex.replace(/^#/, "");

	// Parse r, g, b values
	let bigint = parseInt(hex, 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;
	//return `${r}, ${g}, ${b}`
	return `rgb(${r}, ${g}, ${b})`;
}

// filter images based on selected colors
function filterImages() {
	//console.log(imageColors)
	const selectedColors = [];
	colorPickers.forEach(function (colorPicker) {
		const colorValue = colorPicker.value.toLowerCase();
		if (colorValue !== FORBIDDEN_HEX && colorValue !== "") {
			// Convert hex color to RGB
			const userColor = hexToRgb(colorValue);
			console.log(userColor);

			// Extract RGB values from the userColor string
			const rgbValues = userColor.match(/\d+/g).map(Number);

			// Add RGB color to selectedColors array
			selectedColors.push(rgbValues);
		}
	});

	const images = document.querySelectorAll(".image-container");
	images.forEach((image) => {
		const img = image.querySelector("img");
		const palette = imageColors[img.src];
		//console.log(palette)
		const match = selectedColors.every((selectedColor) => {
			return palette.some((paletteColor) =>
				isColorWithinTolerance(selectedColor, paletteColor, TOLERANCE)
			);
		});
		if (match) {
			image.classList.remove("no-match");
		} else {
			image.classList.add("no-match");
		}
	});
}

// create an image element
function createImageElement(imgUrl, index) {
	const img = document.createElement("img");
	img.src = imgUrl;
	img.alt = `Image ${index + 1}`;
	img.setAttribute("crossorigin", "anonymous");
	const container = document.createElement("div");
	container.classList.add("image-container");
	container.appendChild(img);
	imageGallery.appendChild(container);
	return img;
}

// shuffle array using the Fisher-Yates shuffle algorithm
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
// handle image load - extract colors and assign to palette.
function handleImageLoad(img) {
    const colorThief = new ColorThief();
    const palette = colorThief.getPalette(img);
    console.log("Palette for", img.src, ":", palette); // Add this line for debugging

    // Check if palette is valid (not undefined)
    if (palette && palette.length > 0) {
        imageColors[img.src] = palette;
        filterImages(); // Call filterImages after each image is processed
    } else {
        console.error("Failed to extract palette for", img.src);
    }
}

// Shuffle images before loading
const shuffledIMGS = shuffle(IMGS);

// add images to DOM and extract color info
let imgCounter = 0;
shuffledIMGS.forEach((imgUrl, index) => {
	//if(imgCounter>= TOTAL_IMAGES) return;
	const img = createImageElement(imgUrl, index);
	img.addEventListener("load", () => handleImageLoad(img));
	imgCounter++;

	if (imgCounter === shuffledIMGS.length) {
		allImagesProcessed();
	}
});
// enable color pickers once all images have been processed
function allImagesProcessed() {
	colorPickers.forEach((cp) => (cp.disabled = false));
}
