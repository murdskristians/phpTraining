document.getElementById('product_list').innerText = '';

function get_products_list() {

    const uri = "/server/product_list_f.php";
    const xmlhttp = new XMLHttpRequest();
    const fd = new FormData();

    xmlhttp.open('POST', uri, true);
    xmlhttp.onreadystatechange = function () {

        let html = ``;

        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // console.log(xmlhttp.responseText);

            let resultFromJSON = JSON.parse(xmlhttp.responseText)


            for (let i = 0; i < resultFromJSON.length; i++) {

                // let productPrice = resultFromJSON[i]["product_price"].replace(/,/g, ".");
                // if ( productPrice < 20 ) continue;

                // document.getElementById('product_list').innerHTML += "<br><div>" + resultFromJSON[i]["product_title"] + "</div>";
                let html_inner = `<div style="margin-bottom:50px; border-bottom:1px solid black;">`;

                for (const key in resultFromJSON[i]) {
                    if (resultFromJSON[i].hasOwnProperty(key)) {
                        const value = resultFromJSON[i][key];
                        console.log(value);

                        html_inner += `
                                <div style="">${key} = ${value}</div>
                        `;
                    }
                }

                html_inner += `</div>`;
                html += html_inner;
            }



            document.getElementById('product_list').innerHTML = html;
            // console.log("teee:",resultFromJSON);

        }
    };


    fd.append('get_product_list', 'asdasd');

    xmlhttp.send(fd);
}

get_products_list();