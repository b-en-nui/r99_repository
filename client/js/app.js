var url = "https://api.openaq.org/v1/countries?order_by=count&sort=desc";

$.getJSON(url, function (data) {

    $.each(data.results, function(i, result) {
        if (i%2 == 0){
            $('#data').append(
                $('<div class="col-sm-2 itemBox" style="background-color:rgb(199, 215, 230);">')
                .append("<b>" + result.name + "</b><br>Quantity: " + result.count + "<br>JN price: " + result.count + "<br>SSW price: " + result.count)
                .append("<img class=\"element\" src=\"http://images.neopets.com/items/bd_spagetti_attack.gif\"></div>") // Placeholder image, can dynamically set
            );
        }
        else{
            $('#data').append(
                $('<div class="col-sm-2 itemBox" style="background-color:rgb(201, 223, 215);">')
                .append("<b>" + result.name + "</b><br>Quantity: " + result.count + "<br>JN price: " + result.count + "<br>SSW price: " + result.count)
                .append("<img class=\"element\" src=\"http://images.neopets.com/items/bd_spagetti_attack.gif\"></img, >") // Placeholder image, can dynamically set
            );
        }
    });
});