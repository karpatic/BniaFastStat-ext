const valueSelect = document.querySelector('#endpoint-select');
const textareaElement = document.querySelector('#result-textarea');
const saveButton = document.querySelector('#query-button');

// function sendMessageAsync(message) {
//     return new Promise((resolve, reject) => {
//         chrome.runtime.sendMessage(message, response => {
//             resolve(response);
//         });
//     });
// }

async function sendQuery() {
    textareaElement.value = '';
    const url = `https://services1.arcgis.com/mVFRs7NF4iFitgbY/ArcGIS/rest/services/${valueSelect.value}/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&returnCentroid=false&f=pgeojson`;
    const response = await fetch(url);
    const result = await response.json();
    textareaElement.value = JSON.stringify(result);
}

async function init() {
    saveButton.addEventListener('click', sendQuery);
}

init();