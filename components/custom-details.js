const CustomDetails = (detailsList, lines) => {
    const container = document.createElement('div');
    const invertPercent = (y) => {
        y = y.slice(0, -1);
        y = parseInt(y);
        y = 100 - y;
        return y + '%';
    }
    detailsList.forEach(({ id, summary, p }, index) => {
        let x, y = 0;
        if (index === 0 || index === 1) {
            console.log(lines[index].x2, invertPercent(lines[index].x2));
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