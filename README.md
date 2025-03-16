#PARCEL

- Dev build
- Local server
- HMR = Hot Module Replacement (parcel will keep a track of all the files which
  you are updating.
  )
- File watching - File Watcher Algorithm (written in C++). It keeps
  track of all the files which are changing realtime and it tells the server to reload.
- parcel-cache: Parcel caches code all the time.When we run the application, a build is created which takes some time in ms.(fasteer Builds).
- Image Optimization
- Minification
- Bundling
- Compressing(Remove all white spaces etc..)
- Tree Shaking: Tree shaking is a process of removing the unwanted code that ,we do not use while developing the application.
  In computing, tree shaking is a dead code elimination
  technique that is applied when optimizing code.

- Browserslist:
  Browserslist is a tool that specifies which browsers should
  be supported/compatible in your frontend app.
  It makes our code compatible for a lot of browsers.
  we need to configure in package.json file

- NPX: npx is a command-line tool that comes with Node.js (starting from version 5.2.0) and is included in the npm (Node Package Manager) package. It stands for Node Package Executor and is used to execute Node.js packages directly without globally installing them.

- Starting the build of the project? npx parcel index.html
  In package.json , in the script section write the following command.
  "scripts": {
  "start":"parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
  },
  To start: npm start
  For Production Build: npm run build
