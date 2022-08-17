# Image Processing API
## Overview
A project for the **Advanced Full-Stack Web Development Nanodegree Program** offered by EgFWD initiative and Udacity. The goal of the project is building an API that can be used in two different ways. As a simple placeholder API, the first allows to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size.

## Scripts

### Intall dependencies
`npm install`

### Run development server 
`npm run dev`

### Build
`npm run build`

### Run server after build
`npm start`

### Test
`npm run test`

### Prettier
`npm run prettier`

### Lint
`npm run lint`

## Usage
1. Install the dependencies.
2. Run the server. It will be accesible at `http://localhost:7777`.
3. Add an image to `assets/full` directory.
4. Go to `http://localhost:7777/image?filename=<image-name>`.
5. To resize the image, go to `http://localhost:7777/image?filename=<image-name>&width=<width>&height=<height>`.

### Demo
Install the dependencies and run the server, then go to `http://localhost:7777/image?filename=image&width=300&height=300`.
