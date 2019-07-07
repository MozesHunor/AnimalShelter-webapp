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
                                            <button type="button">I want to adopt this dog!</button>
                                        </div>
                                    </div>
                                </div>`
    },

    displayDogs: function(dogs){
        let dogsHTML = "";

        dogs.forEach(item => dogsHTML += Shelter.getDogHtml(item));

        $('#products-container').html(dogsHTML);
    }
};

Shelter.getDogs();