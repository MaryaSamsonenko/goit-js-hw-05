const colorPickerOptions = [
    { label: 'red', color: '#f44336' },
    { label: 'green', color: '#4caf50' },
    { label: 'blue', color: '#2196f3' },
    { label: 'grey', color: '#687088' },
    { label: 'pink', color: '#e91e63' },
    { label: 'indigo', color: '#3f5185' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');
const elements = colorPickerOptions.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('color-picker--options');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    // buttonEl.style.width = '100px';
    // buttonEl.style.height = '50px';

    return buttonEl;
});

// for (let i = 1; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     buttonEl.style.width = '100px';
//     buttonEl.style.height = '50px';
//     // buttonEl.classList.add('.color-picker--options');

//     elements.push(buttonEl);
// }
colorPickerContainerEl.append(...elements);
