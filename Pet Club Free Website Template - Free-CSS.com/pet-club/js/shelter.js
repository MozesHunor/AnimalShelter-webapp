const API_URL = "http://localhost:8090"

window.Shelter = {

    getDogs: function(){
        $.ajax({
            url: API_URL + "/dogs",
            method: "GET"
        }).done(function(response){
            console.log(response);
            Shelter.displayDogs(response.content);
        });
    },

    getDogHtml: function(dog){
        return `<div class="col-md-3 col-sm-6">
                                    <div class="single-shop-product">

                                        <h2><a href="">${dog.name}</a></h2>
                                        <div class="product-upper">
                                            <img src="images/page4_img4.jpg" alt="">
                                        </div>
                                        <div class="product-carousel-price">
                                            <div><span style="color:blue">Breed: </span>${dog.breed}</div>
                                            <div><span style="color:blue">Age: </span>${dog.age}</div>
                                            <div><span style="color:blue">Weight: </span>${dog.weight}</div>
                                            <div><span style="color:blue">In shelter since: </span>${dog.sinceInShelter}</div>
                                            <div><span style="color:blue">Needs veterinarian: </span>${dog.needsMedicalAttention}</div>
                                            <div><span style="color:blue">Was adopted? </span>${dog.wasAdopted}</div>
                                        </div>
                                        <br>

                                        <div class="product-option-shop">
                                            <button class="open-button" onclick="Shelter.openForm()">I want to adopt this dog!</button>
                                        </div>
                                    </div>
                                </div>`
    },

    displayDogs: function(dogs){
        let dogsHTML = "";

        dogs.forEach(item => dogsHTML += Shelter.getDogHtml(item));

        $('#products-container').html(dogsHTML);
    },

    openForm: function() {
      document.getElementById("myForm").style.display = "block";
    },

    closeForm: function() {
      document.getElementById("myForm").style.display = "none";
    }
};

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

    add: function(customer) {
            $.ajax({
                url: API_URL + "/customers",
                method: "POST",
               contentType: "application/json; charset=utf-8",
               data: JSON.stringify(customer)
            }).done(function (response) {
                if (response.success) {
//                    CustomerLocalActions.add(customer);
                }
            });
        },

    bindEvents: function() {
                $(".form-container").submit(function() {
                const customer = {
                    firstName: $('input[name=firstName]').val(),
                    lastName: $('input[name=lastName]').val(),
                    ssn: $('input[name=ssn]').val()
                };
                Customer.add(customer);
         });
         }
};


Shelter.getDogs();
Customer.bindEvents();
Customer.getCustomers();