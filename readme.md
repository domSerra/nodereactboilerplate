Things to do when forked and pulled down:

  -Make a new repo
    -Change and link the remotes so you can push to the new repo
  -package.json
    -change name, description, & keywords
    -add the following:
      "repositiry": {
        "type": "git",
        "url": "git+repoLink.git"
      },
      "bugs": {
        "url": "repoLink/issues"
      },
      "homepage": "domain name"
  -src/server/server.js
    -Server Work & file structure goes here. You don't need the app.get()
  -src/client/App.js
    -get rid of state, image, everything in render and the componentDidMount. Turn into stateless function rendering components that will be saved in the Containers folder
  -src/client/App.scss
    -get rid of all of it
  -public/icon
    -get rid of the icon and find your own
  -public/images
    -get rid of the image. Images go here
  -public/index.html
    -change title
    -add favicon link
    -whatever else needs linking
  -run nom i

  -GET TO CODIN
