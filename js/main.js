var loadButton = $('#instagram-load-more');
function getMultipleTags (tags) {
    var feeds = [];
    for (var i=0, len=tags.length; i < len; i++) {
        feeds.push(new Instafeed({
            // rest of your options
            clientId: 'bba47d20c68d4c5d9ebb1ef4d783a643',
            accessToken: '2282545458.1677ed0.cb86ffa5d63d470294e5c248c27f4e34',
            get: 'tagged',
            limit: 48,
            tagName: tags[i],
            target: "instafeed-" + tags[i]
        }));
    }
    return feeds;
    
    $(document).on('click', loadButton, function(e) {
  e.preventDefault(); 
  feeds.next();
});



}


// get multiple tags
var myTags = getMultipleTags(['bedstuy', 'blackswanbedstuy', 'blackswanbrooklyn']);
// run each instance
for(var i=0, len=myTags.length; i < len; i++) {
    myTags[i].run();
}


