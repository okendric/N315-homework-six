var CAMP = [
    {
    equipmentTitle: "First Aid Kit",
    equipmentThumbnail: "aid_150.jpg",
    equipmentFullImg: "aid_300.jpg",
    equipmentPrice: "Price: " + "$24.99",
    equipmentShip: "SHIPS IN: " + "2 days",
    equipmentDesc: "This first aid kit will help you whenever you get a scratch or a serious injury.",
    equipmentRating: "Rating: " + "4.5/5 ⭐"

},
{
    equipmentTitle: "Sleeping Bag",
    equipmentThumbnail: "bag_150.jpg",
    equipmentFullImg: "bag_300.jpg",
    equipmentPrice: "Price: " + "$29.99",
    equipmentShip: "SHIPS IN: " + "5 days",
    equipmentDesc: "A sleeping bag with good comfort is important, so we made sure to design it with just that.",
    equipmentRating: "Rating: " + "4.7/5 ⭐"
},
{
    equipmentTitle: "Bug Spray",
    equipmentThumbnail: "bug_150.jpg",
    equipmentFullImg: "bug_300.jpg",
    equipmentPrice: "Price: " + "$13.99",
    equipmentShip: "SHIPS IN: " + "5 hours",
    equipmentDesc: "The finest of bug sprays. Gotta keep those pesky mosquitoes out somehow.",
    equipmentRating: "Rating: " + "4.2/5 ⭐"
},
{
    equipmentTitle: "Canned Food",
    equipmentThumbnail: "canned_150.jpg",
    equipmentFullImg: "canned_300.jpg",
    equipmentPrice: "Price: " + "$16.99",
    equipmentShip: "SHIPS IN: " + "2 hours",
    equipmentDesc: "Canned food can always come in handy because of portability and shelf life!",
    equipmentRating: "Rating: " + "3.0/5 ⭐"
},
{
    equipmentTitle: "Camping Chairs",
    equipmentThumbnail: "chair_150.jpg",
    equipmentFullImg: "chair_300.jpg",
    equipmentPrice: "Price: " + "$44.99",
    equipmentShip: "SHIPS IN: " + "3 days",
    equipmentDesc: "Going on a camping trip? Try out our highly rated camping chairs!",
    equipmentRating: "Rating: " + "4.8/5 ⭐"
},
{
    equipmentTitle: "Flashlight",
    equipmentThumbnail: "flashlight_150.jpg",
    equipmentFullImg: "flashlight_300.jpg",
    equipmentPrice: "Price: " + "$22.99",
    equipmentShip: "SHIPS IN: " + "2 days",
    equipmentDesc: "This flashlight has one of the highest powered beams out there. Buy one and you won't regret it.",
    equipmentRating: "Rating: " + "4.2/5 ⭐"
},
{
    equipmentTitle: "Camping Grill",
    equipmentThumbnail: "grill_150.jpg",
    equipmentFullImg: "grill_300.jpg",
    equipmentPrice: "Price: " + "$37.99",
    equipmentShip: "SHIPS IN: " + "5 days",
    equipmentDesc: "We all know that sometimes that campfire won't start... well fear no more because our grill is here to save the day!",
    equipmentRating: "Rating: " + "4.6/5 ⭐"
},
{
    equipmentTitle: "Hammock",
    equipmentThumbnail: "hammock_150.jpg",
    equipmentFullImg: "hammock_300.jpg",
    equipmentPrice: "Price: " + "$49.99",
    equipmentShip: "SHIPS IN: " + "7 days",
    equipmentDesc: "Going on a vacation soon? Bring one of our hammocks with you and you'll never want to leave it once you lay down in it.",
    equipmentRating: "Rating: " + "4.9/5 ⭐"
},
{
    equipmentTitle: "Lighter",
    equipmentThumbnail: "lighter_150.jpg",
    equipmentFullImg: "lighter_300.jpg",
    equipmentPrice: "Price: " + "$26.99",
    equipmentShip: "SHIPS IN: " + "3 days",
    equipmentDesc: "Sometimes it's hard to start a fire naturally so our highly-rated lighter can come in handy in many situations.",
    equipmentRating: "Rating: " + "4.0/5 ⭐"
},
{
    equipmentTitle: "Camping Tent",
    equipmentThumbnail: "tent_150.jpg",
    equipmentFullImg: "tent_300.jpg",
    equipmentPrice: "Price: " + "$149.99",
    equipmentShip: "SHIPS IN: " + "5 days",
    equipmentDesc: "Going on a camping trip? Check out our 10-people camping tent. A tent for the entire family to enjoy with plenty of space!",
    equipmentRating: "Rating: " + "5.0/5 ⭐"
}];


function loadData() {
    $.each(CAMP, function(index, equipment){
        $("#app").append(`<div id="${index}" class="camp-wrap">
        <h3>${equipment.equipmentTitle}</h3>
        <div class="camp-image">
        <img src="images/150_Image/${equipment.equipmentThumbnail}" alt="${equipment.equipmentTitle}" />
        </div>

    <div class="campBox">

        <div class="price">
        ${equipment.equipmentPrice}
        </div>

        <div class="ship">
        ${equipment.equipmentShip}
        </div>

        <div class="rating">
        ${equipment.equipmentRating}
        </div>

    </div>
</div>

`);
    })

    initListeners();
}


function initListeners() {
    $(".camp-wrap").click(function (e) {
        let campIndex = e.currentTarget.id;

        $("#app").html(`<div class="camp-wrap2">
        <h3>${CAMP[campIndex].equipmentTitle}</h3>
        <div class="camp-image">
          <img src="images/300_Images/${CAMP[campIndex].equipmentFullImg}" alt="${CAMP[campIndex].equipmentTitle}"/>
        </div>

        <div class="campBox2">
          <div class="price2">${CAMP[campIndex].equipmentPrice}</div>

          <div class="desc2">${CAMP[campIndex].equipmentDesc}</div>
          <div class="close">CLOSE</div>
        </div>
      </div>
      `);

      addCloseListener();
    })
};

function addCloseListener() {
    $(".close").click(function () {
        $("#app").html("");
        loadData();
    })
};

$(document).ready(function() {
    loadData();
})