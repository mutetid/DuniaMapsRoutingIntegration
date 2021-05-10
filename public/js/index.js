var mymap = L.map('map').setView([(details.coordinates.lat + 0.008), details.coordinates.lng], 15);// initialize map view

L.tileLayer(details.url, {
    attribution: details.attribution,
    apikey: ''
}).addTo(mymap);

mymap.on('click', function (e) {
    const popLocation = e.latlng;
    L.popup().setLatLng(popLocation)
        .setContent(dataEntry(e.latlng))
        .openOn(mymap);
    mymap.flyTo([e.latlng.lat + 0.0008, e.latlng.lng], 18);
});

function dataEntry(latlng) {
    let form = document.createElement('form')
    form.action = '/'
    form.method = 'POST'
    let h3 = document.createElement('h3')
    let coord = document.createElement('div')
    coord.setAttribute('class', 'coord')
    let lat = document.createElement('input')
    lat.name = 'lat'
    let lon = document.createElement('input')
    lon.name = 'lon'
    let name = document.createElement('input')
    name.name = 'name'
    name.placeholder = 'POI name'
    name.required = true
    let short_name = document.createElement('input')
    short_name.name = 'short_name'
    short_name.placeholder = 'short name'
    short_name.required = true

    let div1 = document.createElement('div')
    div1.classList.add = 'selct'
    let lbl1 = document.createElement('p')
    lbl1.textContent = 'Type '
    let poitype = document.createElement('select')
    let type = document.createElement('input')
    type.name = 'type'
    type.style.display = 'none'

    let div2 = document.createElement('div')
    div2.classList.add = 'selct'
    let lbl2 = document.createElement('p')
    lbl2.textContent = 'Subtype '
    let poisubtype = document.createElement('select')
    let subtype = document.createElement('input')
    subtype.name = 'subtype'
    subtype.style.display = 'none'
    let code = document.createElement('input')
    code.name = 'code'
    code.style.display = 'none'
    let button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'Submit'

    types.forEach(element => {
        let option = document.createElement('option')
        option.value = element.type
        option.textContent = element.type
        poitype.appendChild(option)
    });

    loadSubtype(poitype, poisubtype, subtype, code)

    poitype.onchange = () => {
        type.value = poitype.value
        loadSubtype(poitype, poisubtype, subtype, code)
    }

    lat.value = latlng.lat
    lon.value = latlng.lng
    type.value = poitype.value
    subtype.value = poisubtype.value
    code.value = code.value
    h3.textContent = 'Add POI Data'

    form.appendChild(h3)
    form.appendChild(coord)
    coord.appendChild(lat)
    coord.appendChild(lon)
    form.appendChild(name)
    form.appendChild(short_name)
    form.appendChild(div1)
    div1.appendChild(lbl1)
    div1.appendChild(poitype)
    form.appendChild(div2)
    div2.appendChild(lbl2)
    div2.appendChild(poisubtype)
    form.appendChild(type)
    form.appendChild(subtype)
    form.appendChild(button)
    return form
}

function displayPoi(data) {
    L.marker([parseFloat(data.lat), parseFloat(data.lon)], { title: data.name }).addTo(mymap)
    str = (data.name.length > 20) ? data.name.substring(0, 20) +'...' : data.name
    var popupContent1 = '<p>'+ str +' </p>',
        popup1 = new L.Popup();

    popup1.setLatLng([parseFloat(data.lat), parseFloat(data.lon)]);
    popup1.setContent(popupContent1);
    mymap.addLayer(popup1)
}

fetchPoi()

function fetchPoi() {
    fetch('/poi', { method: "GET" }).then(response => response.json()).then(result => {
        result.forEach(element => {
            displayPoi(element)
        });
    })
}

function loadSubtype(poitype, poisubtype, subtype, code) {

    poisubtype.textContent = ''
    let result = types.filter(obj => {
        return obj.type === poitype.value
    })

    result[0].subtype.forEach(element => {
        let option = document.createElement('option')
        option.value = element.subtype
        option.textContent = element.subtype
        code.value = element.code
        poisubtype.appendChild(option)
    });
    subtype.value = poisubtype.value
    code.value = code.value
    poisubtype.onchange = () => {
        subtype.value = poisubtype.value
        code.value = code.value
    }
}

getLocation()

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        L.popup().setLatLng(details.coordinates)
            .setContent('We could not get your location. Default location is used!')
            .openOn(mymap);
        mymap.flyTo([details.coordinates.lat + 0.0008, details.coordinates.lon], 15);
    }
}

function showPosition(position) {
    details.coordinates.lat = position.coords.latitude
    details.coordinates.lng = position.coords.longitude

    mymap.flyTo([position.coords.latitude, position.coords.longitude], 15);
    L.popup().setLatLng(details.coordinates)
        .setContent('Map is zoomed to your location!<br> Pan to the desired location')
        .openOn(mymap);
}