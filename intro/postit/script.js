function init() {
  if (!localStorage.getItem('postitDatastore')) {
    var now = new Date().toJSON();
    var postitDatastore = {
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
  loadPostits();
  $('#postit-add').click(addPostit);
  $('#board').on('click', '.vote-btn', vote);
}

function loadPostits() {
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  $('#board').html('');
  $.each(postitDatastore.postits, function (index, postit) {
    var voteBtn = '<button class="vote-btn" data-postit-id="' + postit.id + '">Vote</button>';
    $('#board').prepend('<div class="postit" data-id="' + postit.id + '">' + postit.title + ' (' + postit.links.upvotes.length + ') ' + voteBtn + '</div>');
  });
}

function addPostit() {
  var title = $('#postit-msg').val();
  var nextId = $('.postit').data('id') + 1;
  var now = new Date().toJSON();
  var postit = {
    id: nextId,
    title: title,
    created: now,
    links: {
      upvotes: []
    }
  }
  savePostit(postit);
  loadPostits();
}

function savePostit(postit) {
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  postitDatastore.postits.push(postit);
  localStorage.setItem('postitDatastore', JSON.stringify(postitDatastore));
}

function vote() {
  var $this = $(this);
  saveVote($this.data('postit-id'));
}

function saveVote(postitId) {
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  var nextVoteId = getNextVoteId();
  var now = new Date().toJSON();
  var upvote = {
    id: nextVoteId,
    postitId: postitId,
    created: now,
  }

  // Save the upvote to the upvotes model
  postitDatastore.upvotes.push(upvote);

  // Update the postit in the postits module
  $.each(postitDatastore.postits, function (index, postit) {
    if (postit.id == postitId) {
      postit.links.upvotes.push(nextVoteId);
    }
  });

  // Update the datastore
  localStorage.setItem('postitDatastore', JSON.stringify(postitDatastore));

  // Refresh the view
  loadPostits();
}

function getNextVoteId() {
  var postitDatastore = JSON.parse(localStorage.getItem('postitDatastore'));
  return postitDatastore.upvotes.length + 1;
}