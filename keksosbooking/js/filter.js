'use strict';

(function () {
    var filterForm = document.querySelector('.map__filters');

    var prevTimer;

    filterForm.addEventListener('change', function () {

        window.clearTimeout(prevTimer);

        prevTimer = window.setTimeout(function () {

            var wipePins = function () {
                var container = document.querySelector('.map__pins');
                var oldPins = container.querySelectorAll('button[type="button"]');
                var arrOldPins = Array.from(oldPins);

                arrOldPins.forEach(function (it) {
                    container.removeChild(it);
                });
            };

            var container = document.querySelector('.map__pins');
            var housingFeatures = document.querySelector('#housing-features');
            var MAX = 5;

            var filterSettings = {
                'type': document.querySelector('#housing-type').value,
                'priceRange': document.querySelector('#housing-price').value,
                'wrooms': document.querySelector('#housing-rooms').value,
                'wguests': document.querySelector('#housing-guests').value,
                'features': {
                    'wifi': housingFeatures.querySelector('#filter-wifi').checked,
                    'dishwasher': housingFeatures.querySelector('#filter-dishwasher').checked,
                    'parking': housingFeatures.querySelector('#filter-parking').checked,
                    'washer': housingFeatures.querySelector('#filter-washer').checked,
                    'elevator': housingFeatures.querySelector('#filter-elevator').checked,
                    'conditioner': housingFeatures.querySelector('#filter-conditioner').checked
                }
            };

            console.dir(filterSettings);


            var data = window.downloads;

            var newData = (function () {

                var dataCopy = data.slice(0);
                var newNewData = [];

                // маприруем загруженные данные
                dataCopy.map(function (value) {
                    value.offer.priceRange = 'any';
                    value.offer.wguests = value.offer.guests;
                    value.offer.wrooms = value.offer.rooms;

                    if (value.offer.price <= 10000) {
                        value.offer.priceRange = 'low';
                    }
                    if (value.offer.price > 10000 && value.offer.price < 50000) {
                        value.offer.priceRange = 'middle';
                    }
                    if (50000 <= value.offer.price) {
                        value.offer.priceRange = 'high'
                    }

                    if (value.offer.rooms > 3) {
                        value.offer.wrooms = 'any';
                    }

                    if (value.offer.guests > 2) {
                        value.offer.wguests = 'any';
                    }

                    value.offer.wrooms = value.offer.wrooms.toString();
                    value.offer.wguests = value.offer.wguests.toString();

                });

                var funcCheck = function (inThing) {
                    return value.offer.features.includes(inThing) !== filterSettings.features[inThing] && filterSettings.features[inThing] !== false
                };

                var funcSelect = function (inThing) {
                    return value.offer[inThing] !== filterSettings[inThing] && filterSettings[inThing] !== 'any'

                };

                for (var j = 0; newNewData.length <= MAX; j++) {
                    var value = dataCopy[j];

                    if (!value) {
                        break;
                    }

                    //фильтры

                    if (funcSelect('type') || funcSelect('priceRange') || funcSelect('wrooms') || funcSelect('wguests')) {
                        continue;
                    }

                    var isCheck = 0;

                    var typeForChecks = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

                    for (var l = 0; l < typeForChecks.length; l++) {
                        if (funcCheck(typeForChecks[l])) {
                            isCheck = 1;
                        }
                    };

                    if (isCheck) {
                        continue;
                    }
                    newNewData.push(value);
                };

                return newNewData
            })();

            console.dir(newData);

            wipePins();
            window.createPins(newData); //window.map.pins новые;

            container.appendChild(window.map.pins);
            window.map.renderCards();
            window.card.removeActiveElement();

            var popup = document.querySelector('.popup');
            if (popup) {
                popup.parentNode.removeChild(popup);
            }

        }, 300);

    });

})();