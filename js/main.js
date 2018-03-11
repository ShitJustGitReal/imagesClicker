let myPicturesArray = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796"
},
{
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "http://placehold.it/600/8e973b",
    "thumbnailUrl": "http://placehold.it/150/8e973b"
},
{
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "http://placehold.it/600/121fa4",
    "thumbnailUrl": "http://placehold.it/150/121fa4"
},
{
    "albumId": 3,
    "id": 127,
    "title": "magnam quia sed aspernatur",
    "url": "http://placehold.it/600/74456b",
    "thumbnailUrl": "http://placehold.it/150/74456b"
},
{
    "albumId": 3,
    "id": 128,
    "title": "est facere ut nam repellat numquam quia quia eos",
    "url": "http://placehold.it/600/b0931d",
    "thumbnailUrl": "http://placehold.it/150/b0931d"
}
];

// cache relevant page parts in variables
const imagesWrapper = document.querySelector('#thumbnails');
const largeImage = document.querySelector('#large-image img');
const filter = document.querySelector('#filters');

// function to display a large image
function showImage(imageURL, imageTitle){
    largeImage.src=imageURL;
    largeImage.alt=imageTitle;
}

// display the first image as a large image
showImage(myPicturesArray[0].url, myPicturesArray[0].title);

// function to render the image thumbnails
function renderImages(album) {
    imagesWrapper.innerHTML = "";
    myPicturesArray.forEach(function (currentImage) {

        if (album == undefined || album == "all" || album == currentImage.albumId) {
            // create the image item
            let imageItem = document.createElement("div");
            imageItem.classList.add('thumbnail');

            // create the image
            let image = document.createElement("img");
            image.src = currentImage.thumbnailUrl;
            image.alt = currentImage.title;
            image.setAttribute('data-id', currentImage.id);
            image.setAttribute('data-album', currentImage.albumId);
            image.addEventListener('click', function () {
                showImage(currentImage.url, currentImage.title);
            });

            // create the delete button
            let deleteButton = document.createElement("button");
            deleteButton.innerText = 'X';
            deleteButton.addEventListener('click', function () {
                deleteImage(this, currentImage.id);
            });

            // append image and button to item wrapper
            imageItem.append(image);
            imageItem.append(deleteButton);

            // append image item to images wrapper
            imagesWrapper.append(imageItem);

        }

    });
}

// render the image thumbnails
renderImages();

// function to delete an image thumbnail from the page and array
function deleteImage(element, imageID){
    // remove clicked item from the DOM
    imagesWrapper.removeChild(element.parentNode); // alternative way --> element.parentNode.parentNode.removeChild(element.parentNode);
    
    // remove clicked item from the images array
    for(i=0; i<myPicturesArray.length; i++){
        if (myPicturesArray[i].id === imageID){
            myPicturesArray.splice(i, 1);
            break;
        }
    }
}

// function to filter images per album
filter.onchange = function() {
    let selectedOption = filter.options[filter.selectedIndex].value;
    renderImages(selectedOption);
}