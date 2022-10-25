var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    let dataArray = [{
            "name": "Waregem",
            "id": 0,
            "image": "images/Waregem Golf-5.webp",
            "colours": ["white", "yellow", "blue", "red"],
            "courses": [{
                "courseName": "Waregem",
                "holes": [{
                        "number": 1,
                        "distances": [309, 299, 287, 276],
                        "par": 4,
                        "hcp": 10
                    },
                    {
                        "number": 2,
                        "distances": [185, 164, 147, 132],
                        "par": 3,
                        "hcp": 16
                    },
                    {
                        "number": 3,
                        "distances": [483, 437, 400, 387],
                        "par": 5,
                        "hcp": 4
                    },
                    {
                        "number": 4,
                        "distances": [388, 369, 334, 318],
                        "par": 4,
                        "hcp": 2
                    },
                    {
                        "number": 5,
                        "distances": [281, 281, 246, 226],
                        "par": 4,
                        "hcp": 18
                    },
                    {
                        "number": 6,
                        "distances": [339, 321, 279, 272],
                        "par": 4,
                        "hcp": 8
                    },
                    {
                        "number": 7,
                        "distances": [339, 326, 295, 279],
                        "par": 4,
                        "hcp": 6
                    },
                    {
                        "number": 8,
                        "distances": [347, 321, 266, 257],
                        "par": 4,
                        "hcp": 14
                    },
                    {
                        "number": 9,
                        "distances": [447, 431, 397, 356],
                        "par": 5,
                        "hcp": 12
                    },
                    {
                        "number": 10,
                        "distances": [459, 459, 444, 404],
                        "par": 5,
                        "hcp": 9
                    },
                    {
                        "number": 11,
                        "distances": [172, 163, 151, 140],
                        "par": 3,
                        "hcp": 13
                    },
                    {
                        "number": 12,
                        "distances": [246, 246, 214, 214],
                        "par": 4,
                        "hcp": 17
                    },
                    {
                        "number": 13,
                        "distances": [391, 364, 338, 324],
                        "par": 4,
                        "hcp": 1
                    },
                    {
                        "number": 14,
                        "distances": [376, 355, 324, 315],
                        "par": 4,
                        "hcp": 5
                    },
                    {
                        "number": 15,
                        "distances": [330, 267, 244, 227],
                        "par": 4,
                        "hcp": 3
                    },
                    {
                        "number": 16,
                        "distances": [158, 141, 122, 89],
                        "par": 3,
                        "hcp": 11
                    },
                    {
                        "number": 17,
                        "distances": [351, 313, 282, 273],
                        "par": 4,
                        "hcp": 7
                    },
                    {
                        "number": 18,
                        "distances": [310, 250, 250, 234],
                        "par": 4,
                        "hcp": 15
                    }
                ]
            }]
        },
        {
            "name": "Oudenaarde",
            "id": 1,
            "image": "images/logo2.png",
            "colours": ["black", "white", "yellow", "blue", "red"],
            "courses": [{
                "courseName": "kasteel",
                "holes": [{
                        "number": 1,
                        "distances": [327, 322, 315, 292, 239],
                        "par": 4,
                        "hcp": 5
                    },
                    {
                        "number": 2,
                        "distances": [137, 130, 125, 114, 109],
                        "par": 3,
                        "hcp": 17
                    },
                    {
                        "number": 3,
                        "distances": [439, 427, 409, 394, 384],
                        "par": 5,
                        "hcp": 11
                    },
                    {
                        "number": 4,
                        "distances": [166, 147, 143, 122, 115],
                        "par": 3,
                        "hcp": 9
                    },
                    {
                        "number": 5,
                        "distances": [348, 339, 302, 289, 250],
                        "par": 4,
                        "hcp": 7
                    },
                    {
                        "number": 6,
                        "distances": [398, 386, 342, 331, 310],
                        "par": 4,
                        "hcp": 1
                    },
                    {
                        "number": 7,
                        "distances": [435, 427, 410, 355, 340],
                        "par": 5,
                        "hcp": 13
                    },
                    {
                        "number": 8,
                        "distances": [175, 148, 145, 129, 100],
                        "par": 3,
                        "hcp": 15
                    },
                    {
                        "number": 9,
                        "distances": [329, 319, 310, 265, 250],
                        "par": 4,
                        "hcp": 3
                    },
                    {
                        "number": 10,
                        "distances": [168, 153, 145, 137, 110],
                        "par": 3,
                        "hcp": 6
                    },
                    {
                        "number": 11,
                        "distances": [348, 336, 294, 286, 246],
                        "par": 4,
                        "hcp": 16
                    },
                    {
                        "number": 12,
                        "distances": [307, 307, 284, 284, 243],
                        "par": 4,
                        "hcp": 18
                    },
                    {
                        "number": 13,
                        "distances": [505, 461, 417, 399, 375],
                        "par": 5,
                        "hcp": 4
                    },
                    {
                        "number": 14,
                        "distances": [166, 153, 146, 136, 130],
                        "par": 3,
                        "hcp": 12
                    },
                    {
                        "number": 15,
                        "distances": [380, 366, 334, 325, 300],
                        "par": 4,
                        "hcp": 10
                    },
                    {
                        "number": 16,
                        "distances": [366, 352, 341, 321, 300],
                        "par": 4,
                        "hcp": 8
                    },
                    {
                        "number": 17,
                        "distances": [425, 388, 362, 328, 300],
                        "par": 4,
                        "hcp": 2
                    },
                    {
                        "number": 18,
                        "distances": [470, 459, 411, 400, 370],
                        "par": 5,
                        "hcp": 14
                    }
                ]
            }]
        },
        {
            "name": "Damme",
            "id": 3,
            "image": "images/damme-logo.png",
            "colours": ["black", "white", "yellow", "blue", "red", "orange"],
            "courses": [{
                "courseName": "Championship Course",
                "holes": [{
                        "number": 1,
                        "distances": [343, 321, 312, 299, 267, 257],
                        "par": 4,
                        "hcp": 9
                    },
                    {
                        "number": 2,
                        "distances": [387, 385, 375, 334, 325, 269],
                        "par": 4,
                        "hcp": 3
                    },
                    {
                        "number": 3,
                        "distances": [490, 483, 465, 438, 428, 371],
                        "par": 5,
                        "hcp": 5
                    },
                    {
                        "number": 4,
                        "distances": [292, 292, 284, 250, 246, 246],
                        "par": 4,
                        "hcp": 13
                    },
                    {
                        "number": 5,
                        "distances": [135, 135, 129, 125, 82, 82],
                        "par": 3,
                        "hcp": 17
                    },
                    {
                        "number": 6,
                        "distances": [303, 303, 293, 251, 270, 258],
                        "par": 4,
                        "hcp": 11
                    },
                    {
                        "number": 7,
                        "distances": [375, 375, 350, 338, 299, 292],
                        "par": 4,
                        "hcp": 7
                    },
                    {
                        "number": 8,
                        "distances": [185, 167, 155, 139, 112, 108],
                        "par": 3,
                        "hcp": 15
                    },
                    {
                        "number": 9,
                        "distances": [439, 426, 379, 363, 318, 318],
                        "par": 4,
                        "hcp": 1
                    },
                    {
                        "number": 10,
                        "distances": [295, 295, 277, 245, 235, 235],
                        "par": 4,
                        "hcp": 18
                    },
                    {
                        "number": 11,
                        "distances": [386, 386, 376, 308, 298, 259],
                        "par": 18,
                        "hcp": 4
                    },
                    {
                        "number": 12,
                        "distances": [474, 474, 449, 436, 400, 325],
                        "par": 5,
                        "hcp": 6
                    },
                    {
                        "number": 13,
                        "distances": [220, 202, 193, 184, 175, 122],
                        "par": 3,
                        "hcp": 14
                    },
                    {
                        "number": 14,
                        "distances": [373, 373, 365, 306, 300, 256],
                        "par": 4,
                        "hcp": 2
                    },
                    {
                        "number": 15,
                        "distances": [315, 315, 300, 291, 278, 252],
                        "par": 4,
                        "hcp": 16
                    },
                    {
                        "number": 16,
                        "distances": [479, 479, 475, 418, 409, 401],
                        "par": 5,
                        "hcp": 10
                    },
                    {
                        "number": 17,
                        "distances": [221, 182, 170, 164, 148, 148],
                        "par": 3,
                        "hcp": 12
                    },
                    {
                        "number": 18,
                        "distances": [511, 479, 467, 447, 410, 364],
                        "par": 5,
                        "hcp": 8
                    }
                ]
            }]
        }
    ]

    res.json({
        data: dataArray
    })
});

module.exports = router;