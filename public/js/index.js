var mymap;
var current = {
    lat: -1.2988071,
    lon: 36.8160473
}
var jsonData;
buildMap((details.coordinates.lat + 0.008), details.coordinates.lng)
getLocation(18)
fetchPoi()

function buildMap(lat, lng) {
    mymap = L.map('map').setView([lat, lng], 15);// initialize map view

    L.tileLayer(details.url, {
        attribution: details.attribution,
        apikey: ''
    }).addTo(mymap);

    mymap.on('dblclick', function (e) {
        const popLocation = e.latlng;
        L.popup().setLatLng(popLocation)
            .setContent(dataEntry(e.latlng))
            .openOn(mymap);
        mymap.flyTo([e.latlng.lat + 0.0008, e.latlng.lng], 18);
    });
}

function dataEntry(latlng) {
    let form = document.createElement('form')
    form.action = '/'
    form.method = 'POST'
    let h3 = document.createElement('h3')
    let coord = document.createElement('h2')

    let lat = document.createElement('input')
    lat.name = 'lat'
    lat.style.display = 'none'
    let lon = document.createElement('input')
    lon.name = 'lon'
    lon.style.display = 'none'
    let name = document.createElement('input')
    name.name = 'name'
    name.placeholder = 'POI'
    name.required = true
    let short_name = document.createElement('input')
    short_name.name = 'short_name'
    short_name.placeholder = 'Short Name'
    short_name.required = true

    let bname = document.createElement('input')
    bname.name = 'building'
    bname.placeholder = 'Building Name (Optional)'

    let div1 = document.createElement('div')
    div1.setAttribute('class', 'selct')
    let lbl1 = document.createElement('p')
    lbl1.textContent = 'Type '
    let poitype = document.createElement('select')
    let type = document.createElement('input')
    type.name = 'type'
    type.style.display = 'none'

    let div3 = document.createElement('div')
    div3.setAttribute('class', 'selct')
    let lbl3 = document.createElement('p')
    lbl3.textContent = 'Street Name '
    let streetSelect = document.createElement('select')
    let streetName = document.createElement('input')
    streetName.name = 'street_name'
    streetName.style.display = 'none'

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'selct')
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

    loadSubtype(poitype, poisubtype, subtype, code, "")

    loadStreets(streetSelect, streetName, "")

    poitype.onchange = () => {
        type.value = poitype.value
        loadSubtype(poitype, poisubtype, subtype, code, "")
    }

    lat.value = latlng.lat
    lon.value = latlng.lng
    type.value = poitype.value
    subtype.value = poisubtype.value
    h3.textContent = 'Add POI Data'
    coord.textContent = 'Lat: ' + lat.value.substring(0, 10) + ', Lng: ' + lon.value.substring(0, 11)



    form.addEventListener("submit", function (event) {
        const formData = new URLSearchParams(new FormData(form));
        event.preventDefault()
        fetch("", {
            method: "POST",
            body: formData
        }).then((res) => {
            return res.json();
        }).then((dt) => {
            current.lat = dt.lat
            current.lon = dt.lon
            fetchPoi()
        })
    })


    form.appendChild(h3)
    form.appendChild(coord)
    form.appendChild(lat)
    form.appendChild(lon)
    form.appendChild(name)
    form.appendChild(short_name)
    form.appendChild(bname)
    form.appendChild(div1)
    div1.appendChild(lbl1)
    div1.appendChild(poitype)
    form.appendChild(div2)
    div2.appendChild(lbl2)
    div2.appendChild(poisubtype)
    form.appendChild(type)
    form.appendChild(subtype)
    form.appendChild(code)
    form.appendChild(div3)
    div3.appendChild(lbl3)
    div3.appendChild(streetSelect)
    form.appendChild(streetName)
    form.appendChild(button)
    return form
}

function dataUpdate(data) {
    let form = document.createElement('form')
    let h3 = document.createElement('h3')
    let coord = document.createElement('h2')

    let lat = document.createElement('input')
    lat.name = 'lat'
    lat.style.display = 'none'
    let lon = document.createElement('input')
    lon.name = 'lon'
    lon.style.display = 'none'
    let name = document.createElement('input')
    name.name = 'name'
    name.value = data.name
    name.required = true
    let short_name = document.createElement('input')
    short_name.name = 'short_name'
    short_name.value = data.short_name
    short_name.required = true

    let bname = document.createElement('input')
    bname.name = 'building'
    bname.placeholder = 'Building Name (Optional)'

    let div1 = document.createElement('div')
    div1.setAttribute('class', 'selct')
    let lbl1 = document.createElement('p')
    lbl1.textContent = 'Type '
    let poitype = document.createElement('select')
    let type = document.createElement('input')
    type.name = 'type'
    type.style.display = 'none'

    let div3 = document.createElement('div')
    div3.setAttribute('class', 'selct')
    let lbl3 = document.createElement('p')
    lbl3.textContent = 'Street Name '
    let streetSelect = document.createElement('select')
    let streetName = document.createElement('input')
    streetName.name = 'street_name'
    streetName.style.display = 'none'

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'selct')
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

    poitype.value = data.type
    subtype.value = data.subtype
    streetName.value = data.street_name

    loadStreets(streetSelect, streetName, streetName.value)
    loadSubtype(poitype, poisubtype, subtype, code, subtype.value)

    poitype.onchange = () => {
        type.value = poitype.value
        loadSubtype(poitype, poisubtype, subtype, code, "")
    }

    if (data.building != null)
        bname.value = data.building
    lat.value = data.lat
    lon.value = data.lon
    type.value = poitype.value
    subtype.value = poisubtype.value
    h3.textContent = 'Update POI Data'
    coord.textContent = 'Lat: ' + data.lat.substring(0, 10) + ', Lng: ' + data.lon.substring(0, 11)


    form.addEventListener("submit", function (event) {
        const formData = new URLSearchParams(new FormData(form));
        event.preventDefault()

        let url = '/' + data._id
        console.log(url)

        fetch(url, {
            method: "POST",
            body: formData
        }).then((res) => {
            return res.json();
        }).then((dt) => {
            current.lat = dt.lat
            current.lon = dt.lon
            fetchPoi()
        })
    })

    form.appendChild(h3)
    form.appendChild(coord)
    form.appendChild(lat)
    form.appendChild(lon)
    form.appendChild(name)
    form.appendChild(short_name)
    form.appendChild(bname)
    form.appendChild(div1)
    div1.appendChild(lbl1)
    div1.appendChild(poitype)
    form.appendChild(div2)
    div2.appendChild(lbl2)
    div2.appendChild(poisubtype)
    form.appendChild(type)
    form.appendChild(subtype)
    form.appendChild(code)
    form.appendChild(div3)
    div3.appendChild(lbl3)
    div3.appendChild(streetSelect)
    form.appendChild(streetName)
    form.appendChild(button)


    let del = document.createElement('h6')
    del.textContent = "Delete POI"
    del.onclick = () => {
        let url = '/' + data._id
        fetch(url, { method: "DELETE" }).then(response => response.json()).then(result => {
            alert(result.message)
            window.location.href = '/'
        })
    }

    form.appendChild(del)

    return form
}

function fetchPoi() {
    fetch('/poi', { method: "GET" }).then(response => response.json()).then(result => {
        if (result.length > 0) {
            document.getElementById('total').textContent = result.length + ' POIs'
            if (mymap && mymap.remove) {
                mymap.off();
                mymap.remove();
            }

            jsonData = result
            exportDataCSV()
            buildMap(parseFloat(result[result.length - 1].lat), parseFloat(result[result.length - 1].lon))
            var markers = L.markerClusterGroup();
            result.forEach(element => {
                displayPoi(element, markers)
            });
            mymap.addLayer(markers);
            mymap.flyTo([current.lat, current.lon], 18);

        }
    })
}

function displayPoi(data, markers) {

    if (data.street_name == null) {
        let marker = L.marker([parseFloat(data.lat), parseFloat(data.lon)], {
            icon: L.icon({
                iconUrl: '../images/ic_location_red.svg',
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, -20]
            })
            , title: data.name
        }).on('click', () => {
            popup = new L.Popup();
            popup.setLatLng([parseFloat(data.lat), parseFloat(data.lon)]);
            popup.setContent(dataUpdate(data));
            mymap.addLayer(popup)
        })
        markers.addLayer(marker);
    } else {
        let marker = L.marker([parseFloat(data.lat), parseFloat(data.lon)], {
            icon: L.icon({
                iconUrl: '../images/ic_location.svg',
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                popupAnchor: [0, -20]
            })
            , title: data.name
        }).on('click', () => {
            popup = new L.Popup();
            popup.setLatLng([parseFloat(data.lat), parseFloat(data.lon)]);
            popup.setContent(dataUpdate(data));
            mymap.addLayer(popup)
        })
        markers.addLayer(marker);
    }
}

function loadSubtype(poitype, poisubtype, subtype, code, selected) {
    types.sort((a, b) => (a.type > b.type) ? 1 : -1)
    poisubtype.textContent = ''
    let result = types.filter(obj => {
        return obj.type === poitype.value
    })

    result[0].subtype.sort((a, b) => (a.subtype > b.subtype) ? 1 : -1)
    result[0].subtype.forEach(element => {
        let option = document.createElement('option')
        option.value = element.subtype
        option.textContent = element.subtype
        code.value = element.code
        poisubtype.appendChild(option)
    });

    if (selected != "") {
        poisubtype.value = selected
        result[0].subtype.forEach(element => {
            if (element.subtype == selected)
                code.value = element.code
        });
    }

    subtype.value = poisubtype.value
    code.value = code.value
    poisubtype.onchange = () => {
        subtype.value = poisubtype.value
        code.value = code.value
    }
}

function loadStreets(streetSelect, streetName, selected) {
    streets.sort();
    streets.forEach(element => {
        let option = document.createElement('option')
        option.value = element
        option.textContent = element
        streetSelect.appendChild(option)
    });

    if (selected != "") {
        streetSelect.value = streetName.value
    }

    streetName.value = streetSelect.value
    streetSelect.onchange = () => {
        streetName.value = streetSelect.value
    }
}

function getLocation(zoom) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        L.popup().setLatLng(details.coordinates)
            .setContent('We could not get your location. Default location is used!')
            .openOn(mymap);
        mymap.flyTo([details.coordinates.lat, details.coordinates.lon], zoom);
    }
}

function showPosition(position) {
    details.coordinates.lat = position.coords.latitude
    details.coordinates.lng = position.coords.longitude

    mymap.flyTo([position.coords.latitude, position.coords.longitude], 17);
}

function previewPoi(data) {
    let form = document.createElement('form')
    form.action = '/'
    form.method = 'POST'
    let h3 = document.createElement('h3')
    let coord = document.createElement('p')
    let name = document.createElement('p')
    let short_name = document.createElement('p')
    let type = document.createElement('p')
    let subtype = document.createElement('p')

    h3.textContent = 'Preview POI Data'
    name.textContent = 'Name: ' + data.name
    short_name.textContent = 'Short Name: ' + data.short_name
    type.textContent = 'Type: ' + data.type
    subtype.textContent = 'Subtype: ' + data.subtype
    coord.textContent = 'Lat: ' + data.lat.substring(0, 10) + ', Lng: ' + data.lon.substring(0, 11)

    form.appendChild(h3)
    form.appendChild(coord)
    form.appendChild(name)
    form.appendChild(short_name)
    form.appendChild(type)
    form.appendChild(subtype)
    return form
}

function exportDataCSV() {
    var str = '';

    for (var i = 0; i < jsonData.length; i++) {
        var line = '';
        if (i == 0)
            str += 'ID,Latitude,Longitude,Name,Short Name,Type,Sub Type,Code,Street Name,Display,Building' + '\r\n';


        line += jsonData[i]._id + ',';
        line += jsonData[i].lat + ',';
        line += jsonData[i].lon + ',';
        line += jsonData[i].name + ',';
        line += jsonData[i].short_name + ',';
        line += jsonData[i].type + ',';
        line += jsonData[i].subtype + ',';
        line += jsonData[i].code + ',';
        line += jsonData[i].street_name + ',';
        line += jsonData[i].display + ',';
        line += jsonData[i].building + ',';

        str += line + '\r\n';
    }

    //Download the file as CSV
    var downloadLink = document.getElementById("download");
    var blob = new Blob(["\ufeff", str]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "duniamapsPOIdata.csv";
}

