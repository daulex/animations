import CustomDetails from './components/custom-details.js';
import NeonSVG from './components/neon-svg.js';
import Image from './components/image.js';
import Heading from './components/heading.js';
import fetchData from './utils/fetchData.js';

const appElement = document.getElementById('app');

const renderComponents = (data) => {
    appElement.appendChild(Heading(data.heading));

    const stageContainer = document.createElement('div');
    stageContainer.setAttribute('class', 'stage');

    const figureElement = document.createElement('figure');
    figureElement.setAttribute('class', 'stage__figure');

    // Render the image
    figureElement.appendChild(Image(data.img));

    // Render the SVG component only if the data exists
    if (data.lines && data.circles) {
        figureElement.appendChild(NeonSVG(data));
    }
    stageContainer.appendChild(figureElement);

    stageContainer.appendChild(CustomDetails(data.detailsList, data.lines));

    appElement.appendChild(stageContainer);
};

// Load data from data.json
const dataURL = 'data.json';
fetchData(dataURL).then((data) => {
    if (data) {
        renderComponents(data);
    }
});
