const NeonSVG = ({ lines = [], circles = [] }) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'lines');
  
    const createLine = ({ id, x1, y1, x2, y2, stroke }) =>
      `<line id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" />`;
  
    const createCircleGroup = ({ id, outerCircle, innerCircle }) =>
      `<g class="neon-circles" id="${id}">
        <circle class="outer-circle" cx="${outerCircle.cx}" cy="${outerCircle.cy}" r="${outerCircle.r}" />
        <circle class="inner-circle" cx="${innerCircle.cx}" cy="${innerCircle.cy}" r="${innerCircle.r}" />
      </g>`;
  
    const linesMarkup = lines.map(createLine).join('');
    const circlesMarkup = circles.map(createCircleGroup).join('');
  
    svg.innerHTML = linesMarkup + circlesMarkup;
    return svg;
  }
  
  export default NeonSVG;