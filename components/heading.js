const Heading = ({title, level = 1}) => {
    const Tag = document.createElement(`h${level}`);
    Tag.textContent = title;
    return Tag;
}

export default Heading;