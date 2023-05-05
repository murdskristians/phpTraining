
const search_text = document.getElementById('searchText');
const products_array_box = document.getElementById('products_array_box');


search_text.addEventListener('input', function(){

    const uri = "/server/test_f.php";
    const xmlhttp = new XMLHttpRequest();
    const fd = new FormData();

    xmlhttp.open('POST', uri, true);

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            console.log('php_date: ', xmlhttp.responseText);

            let product_titles = "";

            // No JSON stringa uz masīvu
            // xmlhttp.readyState ir tas ko saņem no php echo
            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);

            for (let i = 0; i < response.length; i++) {

                // Ja filtrē front endā
                // if ( response[i].includes(search_text.value) === false) {
                //     continue
                // }

                product_titles += "<div>"+response[i]+"</div>";
            }
            products_array_box.innerHTML = product_titles;
        }
    };

    // Būs pieejams $_POST['get_products_names' ar vērtību 1]
    fd.append('get_products_names', 1);

    // Būs pieejami $_POST['search_value'] ar search_text vērtību
    fd.append('search_value', this.value);
    xmlhttp.send(fd);
});