const API_URL = "http://localhost:8090"

window.Customer = {

    getCustomers: function(){
        $.ajax({
            url: API_URL + "/customers",
            method: "GET"
        }).done(function(response){
            console.log(response);
            Customer.displayCustomers(response.content);
        });
    },

    getCustomerHtml: function(customer){
        return `<div class="col-md-3 col-sm-6">
                                    <div class="single-shop-product">

                                        <h2><a href="">A Happy Customer!</a></h2>
                                        <div class="product-upper">
                                            <img src="images/dogowner.png" alt="">
                                        </div>
                                        <br>
                                        <div class="product-carousel-price">
                                            <div><span style="color:blue;font-size:250%">First name: </span><span style="font-size:250%">${customer.firstName}</span></div>
                                            <br>
                                            <div><span style="color:blue;font-size:250%">Last name: </span><span style="font-size:250%">${customer.lastName}</span></div>
                                        </div>
                                    </div>
                                </div>`
    },

    displayCustomers: function(customers){
        let customersHTML = "";

        customers.forEach(item => customersHTML += Customer.getCustomerHtml(item));

        $('#customer-container').html(customersHTML);
    },

    createCustomer: function(){

    }
};

Customer.getCustomers();