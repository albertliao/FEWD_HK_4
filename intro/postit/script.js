function init() { // <!-- 18. Init Function -->
  if (!localStorage.getItem('postitDatastore')) { // 19. Use LocalStorage for PostIts
    var now = new Date().toJSON(); // 21. Store timestamp with built in function
    var postitDatastore = { // 20. define postits in an object
      postits: [
        {
          id: 1,
          title: 'This is the first postit.',
          created: now,
          links: {
            upvotes: []
          }
        },
        {
          id: 2,
          title: 'This is the second postit.',
          created: now,
          links: {
            upvotes: []
          }
        },
        {
          id: 3,
          title: 'This is the third postit.',
          created: now,
          links: {
            upvotes: []
          }
        }
      ],
      upvotes: []
    }
    localStorage.setItem('postitDatastore', JSON.stringify(postitDatastore));
  }
  loadPostits(); // 22. Use JS to build the Postits
  $('#postit-add').click(addPostit); // 26. Click handler for adding postits
  $('#board').on('click', '.vote-btn', vote);
}

function loadPostits() { // 22. Use JS to build the Postits
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  $('#board').html('');
  $.each(postitDatastore.postits, function (index, postit) { // 23. Loop through all the postits and build them
    var voteBtn = '<button class="vote-btn" data-postit-id="' + postit.id + '">Vote</button>'; // 24. Add a vote button
    $('#board').prepend('<div class="postit" data-id="' + postit.id + '">' + postit.title + ' (' + postit.links.upvotes.length + ') ' + voteBtn + '</div>'); // 25. Build Post-it HTML string
  });
}

function addPostit() { // 27. Build a postit note for storage in the postit store
  var title = $('#postit-msg').val(); // 28. Get the title from the input
  var nextId = $('.postit').data('id') + 1; // 29. Give it a unique ID
  var now = new Date().toJSON(); // 30. Give it a timestamp
  var postit = { // 31. Make it into an object
    id: nextId,
    title: title,
    created: now,
    links: {
      upvotes: []
    }
  }
  savePostit(postit); // 32. Save it into the store
  loadPostits(); // 33. Refresh the view
}

function savePostit(postit) { // 32. Save it into the store
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  postitDatastore.postits.push(postit);
  localStorage.setItem('postitDatastore', JSON.stringify(postitDatastore));
}

function vote() { // 34. Upvote
  var $this = $(this);
  saveVote($this.data('postit-id'));
}

function saveVote(postitId) { // 35. Save the vote in the dataStore
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  var nextVoteId = getNextVoteId(); // 36. Create unique ID
  var now = new Date().toJSON();
  var upvote = {
    id: nextVoteId,
    postitId: postitId,
    created: now,
  }

  // Save the upvote to the upvotes model
  postitDatastore.upvotes.push(upvote);


  $.each(postitDatastore.postits, function (index, postit) { // 37. Update the postit in the postits module
    if (postit.id == postitId) {
      postit.links.upvotes.push(nextVoteId);
    }
  });


  localStorage.setItem('postitDatastore', JSON.stringify(postitDatastore)); // 38. Update the datastore

  loadPostits(); // 39. Refresh the view
}

function getNextVoteId() { // 36. Create unique ID
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  return postitDatastore.upvotes.length + 1;
}
