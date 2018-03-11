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

// function to display a large image
function showImage(imageURL, imageTitle){
    largeImage.src=imageURL;
    largeImage.alt=imageTitle;
}

// display the first image as a large image
showImage(myPicturesArray[0].url, myPicturesArray[0].title);

// function to render the image thumbnails
function renderImages() {
    myPicturesArray.forEach(function (currentImage) {

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
        }
    }
}

/* ASIGNMENTS
1.	Improve the display, by adding margins (CSS), shadows, border, and changing the URLs for real pictures.
Remember that you need to have a smaller versions of the pictures, i.e., thumbnails.
You can use existing images (images.google.com is your friend) or images you upload somewhere.

2. Use JavaScript for adding a click event listener on each image, then when clicked, you will show a bigger version of each picture.
For the moment, just change the value of the src attribute of the clicked image (set it to the URL of the full size image from the array).

3. Try to make something nicer: reserve a <div> on the right of the document so to display the clicked image with a bigger size.
In that case, you will need to create an image (only once, after the first click), to set it to the size of the div (use the width and height attributes of the img element), and to append it to the div.

4. Try to add more images, and find a way to display them per album.
Create buttons entitled "album1", "album2", etc., and when clicked, you will only display images from the selected album.

5. [Advanced] Add an option for deleting a picture. It should be removed from the document and from the array too...

6. Feel free to add any interesting feature you think about ;-)
*/