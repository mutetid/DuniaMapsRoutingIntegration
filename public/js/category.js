let types =  [
        {
            type: "sustenance",
            subtype: [
                { code: "101", subtype: "bar" },
                { code: "102", subtype: "bbq" },
                { code: "103", subtype: "biergarten" },
                { code: "104", subtype: "cafe" },
                { code: "105", subtype: "drinking_water" },
                { code: "106", subtype: "fast_food" },
                { code: "107", subtype: "food_court" },
                { code: "108", subtype: "ice_cream" },
                { code: "109", subtype: "pub" },
                { code: "110", subtype: "restaurant" }
            ]
        },
        {
            type: "education",
            subtype: [
                { code: "201", subtype: "college" },
                { code: "202", subtype: "driving_school" },
                { code: "203", subtype: "kindergarten" },
                { code: "204", subtype: "language_school" },
                { code: "205", subtype: "library" },
                { code: "206", subtype: "toy_library" },
                { code: "207", subtype: "music_school" },
                { code: "208", subtype: "school" },
                {
                    code: "209", subtype: "university"
                }
            ]
        },
        {
            type: "transportation",
            subtype: [
                { code: "301", subtype: "bicycle_parking" },
                { code: "302", subtype: "bicycle_repair_station" },
                { code: "303", subtype: "bicycle_rental" },
                { code: "304", subtype: "boat_rental" },
                { code: "305", subtype: "boat_sharing" },
                { code: "306", subtype: "bus_station" },
                { code: "307", subtype: "car_rental" },
                { code: "308", subtype: "car_sharing" },
                { code: "309", subtype: "car_wash" },
                { code: "310", subtype: "vehicle_inspection" },
                { code: "311", subtype: "charging_station" },
                { code: "312", subtype: "ferry_terminal" },
                { code: "313", subtype: "fuel" },
                { code: "314", subtype: "grit_bin" },
                { code: "315", subtype: "motorcycle_parking" },
                { code: "316", subtype: "parking" },
                { code: "317", subtype: "parking_entrance" },
                { code: "318", subtype: "parking_space" },
                {
                    code: "319", subtype: "taxi"
                }
            ]
        },
        {
            type: "financial",
            subtype: [
                { code: "401", subtype: "atm" },
                { code: "402", subtype: "bank" },
                {
                    code: "403", subtype: "bureau_de_change"
                }
            ]
        },
        {
            type: "healthcare",
            subtype: [
                { code: "501", subtype: "baby_hatch" },
                { code: "502", subtype: "clinic" },
                { code: "503", subtype: "dentist" },
                { code: "504", subtype: "doctors" },
                { code: "505", subtype: "hospital" },
                { code: "506", subtype: "nursing_home" },
                { code: "507", subtype: "pharmacy" },
                { code: "508", subtype: "social_facility" },
                {
                    code: "509", subtype: "veterinary"
                }
            ]
        },
        {
            type: "entertainment",
            subtype: [
                { code: "601", subtype: "arts_centre" },
                { code: "602", subtype: "brothel" },
                { code: "603", subtype: "casino" },
                { code: "604", subtype: "cinema" },
                { code: "605", subtype: "community_centre" },
                { code: "606", subtype: "fountain" },
                { code: "607", subtype: "gambling" },
                { code: "608", subtype: "love_hotel" },
                { code: "609", subtype: "nightclub" },
                { code: "610", subtype: "planetarium" },
                { code: "611", subtype: "public_bookcase" },
                { code: "612", subtype: "social_centre" },
                { code: "613", subtype: "stripclub" },
                { code: "614", subtype: "studio" },
                { code: "615", subtype: "swingerclub" },
                {
                    code: "616", subtype: "theatre"
                }
            ]
        },
        {
            type: "others",
            subtype: [
                { code: "701", subtype: "animal_boarding" },
                { code: "702", subtype: "animal_breeding" },
                { code: "703", subtype: "animal_shelter" },
                { code: "704", subtype: "baking_oven" },
                { code: "705", subtype: "bench" },
                { code: "706", subtype: "childcare" },
                { code: "707", subtype: "clock" },
                { code: "708", subtype: "conference_centre" },
                { code: "709", subtype: "courthouse" },
                { code: "710", subtype: "crematorium" },
                { code: "711", subtype: "dive_centre" },
                { code: "712", subtype: "dog_toilet" },
                { code: "713", subtype: "embassy" },
                { code: "714", subtype: "fire_station" },
                { code: "715", subtype: "funeral_hall" },
                { code: "716", subtype: "give_box" },
                { code: "717", subtype: "grave_yard" },
                { code: "718", subtype: "gym" },
                { code: "719", subtype: "hunting_stand" },
                { code: "720", subtype: "internet_cafe" },
                { code: "721", subtype: "kitchen" },
                { code: "722", subtype: "kneipp_water_cure" },
                { code: "723", subtype: "lounger" },
                { code: "724", subtype: "marketplace" },
                { code: "725", subtype: "monastery" },
                { code: "726", subtype: "photo_booth" },
                { code: "727", subtype: "place_of_mourning" },
                { code: "728", subtype: "place_of_worship" },
                { code: "729", subtype: "police" },
                { code: "730", subtype: "post_box" },
                { code: "731", subtype: "post_depot" },
                { code: "732", subtype: "post_office" },
                { code: "733", subtype: "prison" },
                { code: "734", subtype: "public_bath" },
                { code: "735", subtype: "public_building" },
                { code: "736", subtype: "ranger_station" },
                { code: "737", subtype: "recycling" },
                { code: "738", subtype: "refugee_site" },
                { code: "739", subtype: "sanitary_dump_station" },
                { code: "740", subtype: "shelter" },
                { code: "741", subtype: "shower" },
                { code: "742", subtype: "telephone" },
                { code: "743", subtype: "toilets" },
                { code: "744", subtype: "townhall" },
                { code: "745", subtype: "vending_machine" },
                { code: "746", subtype: "waste_basket" },
                { code: "747", subtype: "waste_disposal" },
                { code: "748", subtype: "waste_transfer_station" },
                { code: "749", subtype: "watering_place" },
                {
                    code: "750", subtype: "water_point"
                }
            ]
        }
    ]