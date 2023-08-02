const CustomDetails = (detailsList, lines) => {
    const container = document.createElement('div');
    const invertPercent = (y) => {
        return 100 - parseInt(y.slice(0, -1)) + '%';
    }
    detailsList.forEach(({ id, summary, p }, index) => {
        let x, y = 0;
        if (index === 0 || index === 1) {
            x = "right:" + invertPercent(lines[index].x2);
            y = lines[index].y2;
        } else {
            x = "left:" + lines[index].x2;
            y = lines[index].y2;
        }

        container.innerHTML += `
        <details id="${id}" style="top:${y}; ${x} ">
          <summary>${summary}</summary>
          <p>${p}</p>
        </details>
      `;
    });

    return container;
}

export default CustomDetails;
