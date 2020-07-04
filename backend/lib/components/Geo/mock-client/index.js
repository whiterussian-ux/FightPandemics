// mocks geolocation for local dev so no key is needed
// always returns the same result, something more complex can be added later
class Client {
  placeDetails() {
    return {
      data: {
        html_attributions: [],
        result: {
          address_components: [
            {
              long_name: "New York Avenue",
              short_name: "New York Ave",
              types: ["route"],
            },
            {
              long_name: "Brooklyn",
              short_name: "Brooklyn",
              types: ["sublocality_level_1", "sublocality", "political"],
            },
            {
              long_name: "Kings County",
              short_name: "Kings County",
              types: ["administrative_area_level_2", "political"],
            },
            {
              long_name: "New York",
              short_name: "NY",
              types: ["administrative_area_level_1", "political"],
            },
            {
              long_name: "United States",
              short_name: "US",
              types: ["country", "political"],
            },
          ],
          formatted_address: "New York Ave, Brooklyn, NY, USA",
          geometry: {
            location: {
              lat: 40.6527697,
              lng: -73.94687549999999,
            },
          },
        },
        status: "OK",
      },
    };
  }

  placeAutocomplete() {
    return {
      data: {
        predictions: [
          {
            description: "400 New York Avenue, New York, NY, USA",
            id: "de3c4dcc0b098cdfdf62decf68d8c794e4e32d3a",
            matched_substrings: [
              {
                length: 8,
                offset: 4,
              },
              {
                length: 8,
                offset: 21,
              },
            ],
            place_id:
              "EiY0MDAgTmV3IFlvcmsgQXZlbnVlLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCfUYxQVdW8KJEceBdUpx-w67EhQKEgkJIXyUFkTCiRGGeAAEdFx2gg",
            reference:
              "EiY0MDAgTmV3IFlvcmsgQXZlbnVlLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCfUYxQVdW8KJEceBdUpx-w67EhQKEgkJIXyUFkTCiRGGeAAEdFx2gg",
            structured_formatting: {
              main_text: "400 New York Avenue",
              main_text_matched_substrings: [
                {
                  length: 8,
                  offset: 4,
                },
              ],
              secondary_text: "New York, NY, USA",
              secondary_text_matched_substrings: [
                {
                  length: 8,
                  offset: 0,
                },
              ],
            },
            terms: [
              {
                offset: 0,
                value: "400",
              },
              {
                offset: 4,
                value: "New York Avenue",
              },
              {
                offset: 21,
                value: "New York",
              },
              {
                offset: 31,
                value: "NY",
              },
              {
                offset: 35,
                value: "USA",
              },
            ],
            types: ["route", "geocode"],
          },
          {
            description: "400 East New York Street, Indianapolis, IN, USA",
            id: "37fcb911ac11d1ebc14fbc3b65793f51bc31eac5",
            matched_substrings: [
              {
                length: 24,
                offset: 0,
              },
              {
                length: 12,
                offset: 26,
              },
            ],
            place_id:
              "Ei80MDAgRWFzdCBOZXcgWW9yayBTdHJlZXQsIEluZGlhbmFwb2xpcywgSU4sIFVTQSIxEi8KFAoSCQUOg4eUUGuIEeGdGlxidVpwEJADKhQKEgkFeLiaFVBriBFuuL4Vc4Pf-w",
            reference:
              "Ei80MDAgRWFzdCBOZXcgWW9yayBTdHJlZXQsIEluZGlhbmFwb2xpcywgSU4sIFVTQSIxEi8KFAoSCQUOg4eUUGuIEeGdGlxidVpwEJADKhQKEgkFeLiaFVBriBFuuL4Vc4Pf-w",
            structured_formatting: {
              main_text: "400 East New York Street",
              main_text_matched_substrings: [
                {
                  length: 24,
                  offset: 0,
                },
              ],
              secondary_text: "Indianapolis, IN, USA",
              secondary_text_matched_substrings: [
                {
                  length: 12,
                  offset: 0,
                },
              ],
            },
            terms: [
              {
                offset: 0,
                value: "400 East New York Street",
              },
              {
                offset: 26,
                value: "Indianapolis",
              },
              {
                offset: 40,
                value: "IN",
              },
              {
                offset: 44,
                value: "USA",
              },
            ],
            types: ["street_address", "geocode"],
          },
          {
            description: "400 New York Avenue Northwest, Washington, DC, USA",
            id: "f950b4c93f0d7a81b90d6771920b58b756c7123a",
            matched_substrings: [
              {
                length: 12,
                offset: 0,
              },
              {
                length: 10,
                offset: 31,
              },
            ],
            place_id:
              "EjI0MDAgTmV3IFlvcmsgQXZlbnVlIE5vcnRod2VzdCwgV2FzaGluZ3RvbiwgREMsIFVTQSIxEi8KFAoSCSfQp6f0t7eJEf05wZGeQzDtEJADKhQKEglZF6I7jbe3iRFn_b_I1lAJ5A",
            reference:
              "EjI0MDAgTmV3IFlvcmsgQXZlbnVlIE5vcnRod2VzdCwgV2FzaGluZ3RvbiwgREMsIFVTQSIxEi8KFAoSCSfQp6f0t7eJEf05wZGeQzDtEJADKhQKEglZF6I7jbe3iRFn_b_I1lAJ5A",
            structured_formatting: {
              main_text: "400 New York Avenue Northwest",
              main_text_matched_substrings: [
                {
                  length: 12,
                  offset: 0,
                },
              ],
              secondary_text: "Washington, DC, USA",
              secondary_text_matched_substrings: [
                {
                  length: 10,
                  offset: 0,
                },
              ],
            },
            terms: [
              {
                offset: 0,
                value: "400 New York Avenue Northwest",
              },
              {
                offset: 31,
                value: "Washington",
              },
              {
                offset: 43,
                value: "DC",
              },
              {
                offset: 47,
                value: "USA",
              },
            ],
            types: ["street_address", "geocode"],
          },
          {
            description: "400 New York Avenue, Jersey City, NJ, USA",
            id: "0abaa29da2bab85eb403c64be6577a9c6ba30f90",
            matched_substrings: [
              {
                length: 3,
                offset: 0,
              },
              {
                length: 8,
                offset: 4,
              },
              {
                length: 4,
                offset: 28,
              },
            ],
            place_id: "ChIJlSNn82VXwokRSFMEAHizqLI",
            reference: "ChIJlSNn82VXwokRSFMEAHizqLI",
            structured_formatting: {
              main_text: "400 New York Avenue",
              main_text_matched_substrings: [
                {
                  length: 3,
                  offset: 0,
                },
                {
                  length: 8,
                  offset: 4,
                },
              ],
              secondary_text: "Jersey City, NJ, USA",
              secondary_text_matched_substrings: [
                {
                  length: 4,
                  offset: 7,
                },
              ],
            },
            terms: [
              {
                offset: 0,
                value: "400",
              },
              {
                offset: 4,
                value: "New York Avenue",
              },
              {
                offset: 21,
                value: "Jersey City",
              },
              {
                offset: 34,
                value: "NJ",
              },
              {
                offset: 38,
                value: "USA",
              },
            ],
            types: ["street_address", "geocode"],
          },
          {
            description: "400 New York Avenue Northeast, Washington, DC, USA",
            id: "eeea69eb7ec4c5035510bc151fccf59c7c86169b",
            matched_substrings: [
              {
                length: 12,
                offset: 0,
              },
              {
                length: 10,
                offset: 31,
              },
            ],
            place_id:
              "EjI0MDAgTmV3IFlvcmsgQXZlbnVlIE5vcnRoZWFzdCwgV2FzaGluZ3RvbiwgREMsIFVTQSIxEi8KFAoSCaWQ1PIauLeJEW4nL_ySekvMEJADKhQKEgl_VDBBeri3iRF5BSMtgr4Ocw",
            reference:
              "EjI0MDAgTmV3IFlvcmsgQXZlbnVlIE5vcnRoZWFzdCwgV2FzaGluZ3RvbiwgREMsIFVTQSIxEi8KFAoSCaWQ1PIauLeJEW4nL_ySekvMEJADKhQKEgl_VDBBeri3iRF5BSMtgr4Ocw",
            structured_formatting: {
              main_text: "400 New York Avenue Northeast",
              main_text_matched_substrings: [
                {
                  length: 12,
                  offset: 0,
                },
              ],
              secondary_text: "Washington, DC, USA",
              secondary_text_matched_substrings: [
                {
                  length: 10,
                  offset: 0,
                },
              ],
            },
            terms: [
              {
                offset: 0,
                value: "400 New York Avenue Northeast",
              },
              {
                offset: 31,
                value: "Washington",
              },
              {
                offset: 43,
                value: "DC",
              },
              {
                offset: 47,
                value: "USA",
              },
            ],
            types: ["street_address", "geocode"],
          },
        ],
        status: "OK",
      },
    };
  }

  reverseGeocode() {
    return {
      data: {
        plus_code: {
          compound_code: "M333+46 New York, NY, USA",
          global_code: "87G8M333+46",
        },
        results: [
          {
            address_components: [
              {
                long_name: "336",
                short_name: "336",
                types: ["street_number"],
              },
              {
                long_name: "Linden Boulevard",
                short_name: "Linden Blvd",
                types: ["route"],
              },
              {
                long_name: "East Flatbush",
                short_name: "East Flatbush",
                types: ["neighborhood", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
              {
                long_name: "11226",
                short_name: "11226",
                types: ["postal_code"],
              },
            ],
            formatted_address: "336 Linden Blvd, Brooklyn, NY 11226, USA",
            geometry: {
              location: {
                lat: 40.6525569,
                lng: -73.9471997,
              },
              location_type: "ROOFTOP",
              viewport: {
                northeast: {
                  lat: 40.6539058802915,
                  lng: -73.94585071970849,
                },
                southwest: {
                  lat: 40.6512079197085,
                  lng: -73.9485486802915,
                },
              },
            },
            place_id: "ChIJqXlX3GdbwokRpPKBNZRtj4A",
            plus_code: {
              compound_code: "M333+24 Brooklyn, NY, USA",
              global_code: "87G8M333+24",
            },
            types: ["street_address"],
          },
          {
            address_components: [
              {
                long_name: "322",
                short_name: "322",
                types: ["street_number"],
              },
              {
                long_name: "Linden Boulevard",
                short_name: "Linden Blvd",
                types: ["route"],
              },
              {
                long_name: "East Flatbush",
                short_name: "East Flatbush",
                types: ["neighborhood", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
              {
                long_name: "11226",
                short_name: "11226",
                types: ["postal_code"],
              },
              {
                long_name: "8910",
                short_name: "8910",
                types: ["postal_code_suffix"],
              },
            ],
            formatted_address: "322 Linden Blvd, Brooklyn, NY 11226, USA",
            geometry: {
              location: {
                lat: 40.65255459999999,
                lng: -73.9470857,
              },
              location_type: "ROOFTOP",
              viewport: {
                northeast: {
                  lat: 40.65390358029149,
                  lng: -73.94573671970849,
                },
                southwest: {
                  lat: 40.65120561970849,
                  lng: -73.94843468029151,
                },
              },
            },
            place_id: "ChIJx0Sp3GdbwokR02hHRXNHMTE",
            plus_code: {
              compound_code: "M333+25 Brooklyn, NY, USA",
              global_code: "87G8M333+25",
            },
            types: ["doctor", "establishment", "health", "point_of_interest"],
          },
          {
            address_components: [
              {
                long_name: "860",
                short_name: "860",
                types: ["street_number"],
              },
              {
                long_name: "New York Avenue",
                short_name: "New York Ave",
                types: ["route"],
              },
              {
                long_name: "East Flatbush",
                short_name: "East Flatbush",
                types: ["neighborhood", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
              {
                long_name: "11203",
                short_name: "11203",
                types: ["postal_code"],
              },
              {
                long_name: "2721",
                short_name: "2721",
                types: ["postal_code_suffix"],
              },
            ],
            formatted_address: "860 New York Ave, Brooklyn, NY 11203, USA",
            geometry: {
              location: {
                lat: 40.6527697,
                lng: -73.94687549999999,
              },
              location_type: "RANGE_INTERPOLATED",
              viewport: {
                northeast: {
                  lat: 40.6541186802915,
                  lng: -73.94552651970848,
                },
                southwest: {
                  lat: 40.6514207197085,
                  lng: -73.9482244802915,
                },
              },
            },
            place_id:
              "Eik4NjAgTmV3IFlvcmsgQXZlLCBCcm9va2x5biwgTlkgMTEyMDMsIFVTQSIbEhkKFAoSCQ_bTc1nW8KJEanuA2eZ8l2xENwG",
            types: ["street_address"],
          },
          {
            address_components: [
              {
                long_name: "853-851",
                short_name: "853-851",
                types: ["street_number"],
              },
              {
                long_name: "New York Avenue",
                short_name: "New York Ave",
                types: ["route"],
              },
              {
                long_name: "East Flatbush",
                short_name: "East Flatbush",
                types: ["neighborhood", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
              {
                long_name: "11203",
                short_name: "11203",
                types: ["postal_code"],
              },
              {
                long_name: "2720",
                short_name: "2720",
                types: ["postal_code_suffix"],
              },
            ],
            formatted_address: "853-851 New York Ave, Brooklyn, NY 11203, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.6528333,
                  lng: -73.94687549999999,
                },
                southwest: {
                  lat: 40.6527697,
                  lng: -73.94688289999999,
                },
              },
              location: {
                lat: 40.6528015,
                lng: -73.9468792,
              },
              location_type: "GEOMETRIC_CENTER",
              viewport: {
                northeast: {
                  lat: 40.6541504802915,
                  lng: -73.9455302197085,
                },
                southwest: {
                  lat: 40.6514525197085,
                  lng: -73.94822818029151,
                },
              },
            },
            place_id: "ChIJD9tNzWdbwokRqO4DZ5nyXbE",
            types: ["route"],
          },
          {
            address_components: [
              {
                long_name: "11226",
                short_name: "11226",
                types: ["postal_code"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "Brooklyn, NY 11226, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.660069,
                  lng: -73.945869,
                },
                southwest: {
                  lat: 40.633662,
                  lng: -73.972145,
                },
              },
              location: {
                lat: 40.6470923,
                lng: -73.9536163,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 40.660069,
                  lng: -73.945869,
                },
                southwest: {
                  lat: 40.633662,
                  lng: -73.972145,
                },
              },
            },
            place_id: "ChIJNaXk4UZbwokRB5PGAqkFhbc",
            types: ["postal_code"],
          },
          {
            address_components: [
              {
                long_name: "East Flatbush",
                short_name: "East Flatbush",
                types: ["neighborhood", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "East Flatbush, Brooklyn, NY, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.665596,
                  lng: -73.9082588,
                },
                southwest: {
                  lat: 40.631328,
                  lng: -73.952518,
                },
              },
              location: {
                lat: 40.6481656,
                lng: -73.9299899,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 40.665596,
                  lng: -73.9082588,
                },
                southwest: {
                  lat: 40.631328,
                  lng: -73.952518,
                },
              },
            },
            place_id: "ChIJiZm3_qFcwokR6i2OVX2y1vY",
            types: ["neighborhood", "political"],
          },
          {
            address_components: [
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "Brooklyn, NY, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.739446,
                  lng: -73.8333651,
                },
                southwest: {
                  lat: 40.551042,
                  lng: -74.05663,
                },
              },
              location: {
                lat: 40.6781784,
                lng: -73.9441579,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 40.739446,
                  lng: -73.8333651,
                },
                southwest: {
                  lat: 40.551042,
                  lng: -74.05663,
                },
              },
            },
            place_id: "ChIJCSF8lBZEwokRhngABHRcdoI",
            types: ["political", "sublocality", "sublocality_level_1"],
          },
          {
            address_components: [
              {
                long_name: "Kings County",
                short_name: "Kings County",
                types: ["administrative_area_level_2", "political"],
              },
              {
                long_name: "Brooklyn",
                short_name: "Brooklyn",
                types: ["political", "sublocality", "sublocality_level_1"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "Kings County, Brooklyn, NY, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.739446,
                  lng: -73.8333651,
                },
                southwest: {
                  lat: 40.551042,
                  lng: -74.05663,
                },
              },
              location: {
                lat: 40.6528762,
                lng: -73.95949399999999,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 40.739446,
                  lng: -73.8333651,
                },
                southwest: {
                  lat: 40.551042,
                  lng: -74.05663,
                },
              },
            },
            place_id: "ChIJOwE7_GTtwokRs75rhW4_I6M",
            types: ["administrative_area_level_2", "political"],
          },
          {
            address_components: [
              {
                long_name: "New York",
                short_name: "New York",
                types: ["locality", "political"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "New York, NY, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 40.9175771,
                  lng: -73.70027209999999,
                },
                southwest: {
                  lat: 40.4773991,
                  lng: -74.25908989999999,
                },
              },
              location: {
                lat: 40.7127753,
                lng: -74.0059728,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 40.9175771,
                  lng: -73.70027209999999,
                },
                southwest: {
                  lat: 40.4773991,
                  lng: -74.25908989999999,
                },
              },
            },
            place_id: "ChIJOwg_06VPwokRYv534QaPC8g",
            types: ["locality", "political"],
          },
          {
            address_components: [
              {
                long_name: "Long Island",
                short_name: "Long Island",
                types: ["establishment", "natural_feature"],
              },
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "Long Island, New York, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 41.1612401,
                  lng: -71.85620109999999,
                },
                southwest: {
                  lat: 40.5429789,
                  lng: -74.0419497,
                },
              },
              location: {
                lat: 40.789142,
                lng: -73.13496099999999,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 41.1612401,
                  lng: -71.85620109999999,
                },
                southwest: {
                  lat: 40.5429789,
                  lng: -74.0419497,
                },
              },
            },
            place_id: "ChIJy6Xu4VRE6IkRGA2UhmH59x0",
            types: ["establishment", "natural_feature"],
          },
          {
            address_components: [
              {
                long_name: "New York",
                short_name: "NY",
                types: ["administrative_area_level_1", "political"],
              },
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "New York, USA",
            geometry: {
              bounds: {
                northeast: {
                  lat: 45.015861,
                  lng: -71.777491,
                },
                southwest: {
                  lat: 40.4773991,
                  lng: -79.7625901,
                },
              },
              location: {
                lat: 43.2994285,
                lng: -74.21793260000001,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 45.015861,
                  lng: -71.777491,
                },
                southwest: {
                  lat: 40.4773991,
                  lng: -79.7625901,
                },
              },
            },
            place_id: "ChIJqaUj8fBLzEwRZ5UY3sHGz90",
            types: ["administrative_area_level_1", "political"],
          },
          {
            address_components: [
              {
                long_name: "United States",
                short_name: "US",
                types: ["country", "political"],
              },
            ],
            formatted_address: "United States",
            geometry: {
              bounds: {
                northeast: {
                  lat: 71.5388001,
                  lng: -66.885417,
                },
                southwest: {
                  lat: 18.7763,
                  lng: 170.5957,
                },
              },
              location: {
                lat: 37.09024,
                lng: -95.712891,
              },
              location_type: "APPROXIMATE",
              viewport: {
                northeast: {
                  lat: 71.5388001,
                  lng: -66.885417,
                },
                southwest: {
                  lat: 18.7763,
                  lng: 170.5957,
                },
              },
            },
            place_id: "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
            types: ["country", "political"],
          },
        ],
        status: "OK",
      },
    };
  }
}

module.exports = Client;
