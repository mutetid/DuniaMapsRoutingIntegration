let types = [
    {
        type: "Accomodation",
        subtype: [
            { code: "101", subtype: "Alpine hut" },
            { code: "102", subtype: "Camping" },
            { code: "103", subtype: "Caravan" },
            { code: "104", subtype: "Chalet" },
            { code: "105", subtype: "Guesthouse" },
            { code: "106", subtype: "Hostel" },
            { code: "107", subtype: "Hotel" },
            { code: "108", subtype: "Motel" },
            { code: "199", subtype: "Others" }
            
        ]
    },
    {
        type: "Automotive",
        subtype: [
            { code: "201", subtype: "Carwash" },
            { code: "202", subtype: "Fuel" },
            { code: "203", subtype: "Parking" },
            { code: "204", subtype: "Rental car" },
            { code: "205", subtype: "Rest area" },
            { code: "206", subtype: "Tollgate" },
            { code: "299", subtype: "Others" }
        ]
    },
    {
        type: "Business",
        subtype: [
            { code: "301", subtype: "Advertising" },
            { code: "302", subtype: "ATM" },
            { code: "303", subtype: "Audiovisual" },
            { code: "304", subtype: "Bank" },
            { code: "305", subtype: "Construction" },
            { code: "306", subtype: "Currency" },
            { code: "307", subtype: "Employment" },
            { code: "308", subtype: "Energy" },
            { code: "309", subtype: "Financial" },
            { code: "310", subtype: "Insurance" },
            { code: "311", subtype: "IT" },
            { code: "312", subtype: "Legal" },
            { code: "313", subtype: "Real-estate" },
            { code: "314", subtype: "Telecom" },
            { code: "315", subtype: "Travel agency" },
            { code: "399", subtype: "Others" }
        ]
    },
    {
        type: "Eat/Drink",
        subtype: [
            { code: "401", subtype: "Bar" },
            { code: "402", subtype: "Beer Garden" },
            { code: "403", subtype: "Cafe" },
            { code: "404", subtype: "Fast-Food" },
            { code: "405", subtype: "Ice-cream" },
            { code: "406", subtype: "Internet cafe" },
            { code: "407", subtype: "Pub" },
            { code: "408", subtype: "Restaurant" },
            { code: "499", subtype: "Others" }
        ]
    },
    {
        type: "Education",
        subtype: [
            { code: "501", subtype: "College" },
            { code: "502", subtype: "Nursery" },
            { code: "503", subtype: "School" },
            { code: "504", subtype: "University" },
            { code: "599", subtype: "Others" }
        ]
    },
    {
        type: "Health",
        subtype: [
            { code: "601", subtype: "Clinic" },
            { code: "602", subtype: "Dentist" },
            { code: "603", subtype: "Doctors" },
            { code: "604", subtype: "Hospital" },
            { code: "605", subtype: "Pharmacy" },
            { code: "606", subtype: "Veterinary" },
            { code: "699", subtype: "Others" }
        ]
    },
    {
        type: "Land use",
        subtype: [
            { code: "701", subtype: "Cemetery" },
            { code: "702", subtype: "Dam" },
            { code: "703", subtype: "Dump" },
            { code: "704", subtype: "Farm" },
            { code: "705", subtype: "Forest" },
            { code: "706", subtype: "Grass" },
            { code: "707", subtype: "Industrial" },
            { code: "708", subtype: "Military" },
            { code: "709", subtype: "Mineshaft" },
            { code: "710", subtype: "Nature reserve" },
            { code: "711", subtype: "Park" },
            { code: "712", subtype: "Quarry" },
            { code: "713", subtype: "Riverbank" },
            { code: "714", subtype: "Rock" },
            { code: "715", subtype: "Scrub" },
            { code: "716", subtype: "Swamp" },
            { code: "717", subtype: "Water" },
            { code: "799", subtype: "Others" }
        ]
    },
    {
        type: "Public Service",
        subtype: [
            { code: "801", subtype: "Association" },
            { code: "802", subtype: "Court" },
            { code: "803", subtype: "Educational" },
            { code: "804", subtype: "Embassy" },
            { code: "805", subtype: "Fire station" },
            { code: "806", subtype: "Government" },
            { code: "807", subtype: "Library" },
            { code: "808", subtype: "NGO" },
            { code: "809", subtype: "Police" },
            { code: "810", subtype: "Post Office" },
            { code: "811", subtype: "Prison" },
            { code: "812", subtype: "Public Building" },
            { code: "813", subtype: "Social care" },
            { code: "814", subtype: "Toilets" },
            { code: "815", subtype: "Town hall" },
            { code: "899", subtype: "Others" }
        ]
    },
    {
        type: "Religious",
        subtype: [
            { code: "901", subtype: "Buddhist" },
            { code: "902", subtype: "Christian" },
            { code: "903", subtype: "Hindu" },
            { code: "904", subtype: "Islamic" },
            { code: "905", subtype: "Jewish" },
            { code: "906", subtype: "Sikh" },
            { code: "907", subtype: "Unknown" },
            { code: "999", subtype: "Others" }
        ]
    },
    {
        type: "Settlements",
        subtype: [
            { code: "1001", subtype: "City" },
            { code: "1002", subtype: "Hamlet" },
            { code: "1003", subtype: "Suburb" },
            { code: "1004", subtype: "Town" },
            { code: "1005", subtype: "Village" },
            { code: "1099", subtype: "Others" }
        ]
    },
    {
        type: "Shop",
        subtype: [
            { code: "1101", subtype: "Alcohol" },
            { code: "1102", subtype: "Appliance" },
            { code: "1103", subtype: "Art" },
            { code: "1104", subtype: "Bakery" },
            { code: "1105", subtype: "Bicycle" },
            { code: "1106", subtype: "Book" },
            { code: "1107", subtype: "Butcher" },
            { code: "1108", subtype: "Car" },
            { code: "1109", subtype: "Car repair" },
            { code: "1110", subtype: "Clothes" },
            { code: "1111", subtype: "Computer" },
            { code: "1112", subtype: "Confectionery" },
            { code: "1113", subtype: "Convenience" },
            { code: "1114", subtype: "Copy shop" },
            { code: "1115", subtype: "Cosmetics" },
            { code: "1116", subtype: "Department store" },
            { code: "1117", subtype: "DIY" },
            { code: "1118", subtype: "Electronics" },
            { code: "1119", subtype: "Fish" },
            { code: "1120", subtype: "Florist" },
            { code: "1121", subtype: "Furniture" },
            { code: "1122", subtype: "Gambling" },
            { code: "1123", subtype: "Garden Centre" },
            { code: "1124", subtype: "Gift" },
            { code: "1125", subtype: "Greengrocer" },
            { code: "1126", subtype: "Hairdresser" },
            { code: "1127", subtype: "Jewelry" },
            { code: "1128", subtype: "Kiosk" },
            { code: "1129", subtype: "Kitchen" },
            { code: "1130", subtype: "Launderette" },
            { code: "1131", subtype: "Marketplace" },
            { code: "1132", subtype: "Message" },
            { code: "1133", subtype: "Motorcycle" },
            { code: "1134", subtype: "Music" },
            { code: "1135", subtype: "Newspaper" },
            { code: "1136", subtype: "Optician" },
            { code: "1137", subtype: "Pawnbroker" },
            { code: "1138", subtype: "Phone" },
            { code: "1139", subtype: "Photo" },
            { code: "1140", subtype: "Retail" },
            { code: "1141", subtype: "Shoes" },
            { code: "1142", subtype: "Sports" },
            { code: "1143", subtype: "Supermarket" },
            { code: "1144", subtype: "Tailor" },
            { code: "1145", subtype: "Toys" },
            { code: "1146", subtype: "Video rental" },
            { code: "1199", subtype: "Others" }
        ]
    },
    {
        type: "Sport",
        subtype: [
            { code: "1201", subtype: "Baseball" },
            { code: "1202", subtype: "Basketball" },
            { code: "1203", subtype: "Cricket" },
            { code: "1204", subtype: "Diving" },
            { code: "1205", subtype: "Golf" },
            { code: "1206", subtype: "Gym" },
            { code: "1207", subtype: "Hockey" },
            { code: "1208", subtype: "Horse" },
            { code: "1209", subtype: "Leisure center " },
            { code: "1210", subtype: "Marina" },
            { code: "1211", subtype: "Motor Racing" },
            { code: "1212", subtype: "Playground" },
            { code: "1213", subtype: "Rugby" },
            { code: "1214", subtype: "Shooting" },
            { code: "1215", subtype: "Skating " },
            { code: "1216", subtype: "Soccer " },
            { code: "1217", subtype: "Stadium " },
            { code: "1218", subtype: "Surfing " },
            { code: "1219", subtype: "Swimming " },
            { code: "1220", subtype: "Tennis" },
            { code: "1221", subtype: "Volleyball " },
            { code: "1299", subtype: "Others" }

        ]
    },
    {
        type: "Tourism",
        subtype: [
            { code: "1301", subtype: "Archeological" },
            { code: "1302", subtype: "Attraction" },
            { code: "1303", subtype: "Battlefield" },
            { code: "1304", subtype: "Beach" },
            { code: "1305", subtype: "Casino" },
            { code: "1306", subtype: "Castle" },
            { code: "1307", subtype: "Cave" },
            { code: "1308", subtype: "Cinema" },
            { code: "1309", subtype: "Clock " },
            { code: "1310", subtype: "Event venue" },
            { code: "1311", subtype: "Fountain" },
            { code: "1312", subtype: "Glacier" },
            { code: "1313", subtype: "Information" },
            { code: "1314", subtype: "Lighthouse" },
            { code: "1315", subtype: "Memorial " },
            { code: "1316", subtype: "Monument" },
            { code: "1317", subtype: "Museum " },
            { code: "1318", subtype: "Nightclub " },
            { code: "1319", subtype: "Peak" },
            { code: "1320", subtype: "Pedestrian" },
            { code: "1321", subtype: "Ruins " },
            { code: "1322", subtype: "Shelter" },
            { code: "1323", subtype: "Theatre" },
            { code: "1324", subtype: "Theme park" },
            { code: "1325", subtype: "Tower" },
            { code: "1326", subtype: "Tower communication" },
            { code: "1327", subtype: "Volcano " },
            { code: "1328", subtype: "Water tower " },
            { code: "1329", subtype: "Windmill" },
            { code: "1330", subtype: "Wreck" },
            { code: "1331", subtype: "Zoo" },
            { code: "1399", subtype: "Others" }
            
        ]
    },
    {
        type: "Transport",
        subtype: [
            { code: "1401", subtype: "Airport" },
            { code: "1402", subtype: "Air terminal" },
            { code: "1403", subtype: "Bus stop" },
            { code: "1404", subtype: "Ferry terminal" },
            { code: "1405", subtype: "Station" },
            { code: "1406", subtype: "Tram stop" },
            { code: "1499", subtype: "Others" }
            
        ]
    }
]