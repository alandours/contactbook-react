import ColorThief from 'colorthief/dist/color-thief.mjs';

const colorThief = new ColorThief();

export const getPalette = (img, colorAmount, quality = 10) => {
  const palette = colorThief.getPalette(img, colorAmount, quality);
  return palette.map((color) => {
    const [red, green, blue] = color;
    return `rgb(${red}, ${green}, ${blue})`;
  });
};

export const getDominantColor = (img, quality = 10) => {
  const color = colorThief.getColor(img, quality);
  const [red, green, blue] = color;
  return `rgb(${red}, ${green}, ${blue})`;
};
