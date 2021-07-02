ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 7
    });
        
    var myPlacemark = new ymaps.Placemark([55.8, 37.6], {}, {
          iconLayout:'default#image',
          iconImageHref: './img/subtract.svg',    
          iconImageSize: [28, 40],
          
        });
          myMap.geoObjects.add(myPlacemark);
}


