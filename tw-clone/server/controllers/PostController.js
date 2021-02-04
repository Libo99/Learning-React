const Post = require('../Models/Post');


exports.GetPost = (req, res) => {
    Post.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).json({ msg: err }));
}

exports.CreatePost = (req, res) => {
    const post = new Post({
        name: req.body.name.toString().trim(),
        text: req.body.text.toString().trim(),
        created: Date.now()
    })
    post.save()
    .then(data => res.status(201).json({
        message: data
    })).catch(err => console.log(err));
    
}



