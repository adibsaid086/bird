// An array to store the posts
var posts = [];


// A function to add a post to the page
function addPost(name, topic, description) {
  // Create a new post element
  var postEl = document.createElement('div');
  postEl.classList.add('post');
  postEl.innerHTML = `
    <h3>${name}</h3>
    <h4>${topic}</h4>
    <p>${description}</p>
  `;

  // Add the post to the top of the list of posts
  document.getElementById('posts').prepend(postEl);
}

// Add an event listener for the post form
$(document).ready(function() { //jquery document.ready
document.getElementById('post-form').addEventListener('submit', function(event){
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values from the form elements
  var name = document.getElementById('name').value;
  var topic = document.getElementById('topic').value;
  var description = document.getElementById('description').value;

  // If the values are not empty
  if (name.trim() && topic.trim() && description.trim()) {
    // Add the post to the array of posts
    posts.unshift({
      name: name,
      topic: topic,
      description: description
    });

    // Add the post to the page
    addPost(name, topic, description);

    // Clear the form elements
    document.getElementById('name').value = '';
    document.getElementById('topic').value = '';
    document.getElementById('description').value = '';
  }
});
});
// When the page loads, add any existing posts to the page
posts.forEach(function(post) {
  addPost(post.name, post.topic, post.description);
});
