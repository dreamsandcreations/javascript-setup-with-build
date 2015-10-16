# Javascript app bootstrap

The aim of this project is to provide a fast setup for creating javascript projects.

## Features
>**Gulp** 
- browserify
- mocha *chai*
- jshint
- jsdoc
- build
- minify

>**Testem**
- Unit testing in Javascript can be tedious and painful, but Testem makes it so easy that you will actually want to write tests. 

>**jsHint**
- SHint is a community-driven tool to detect errors and potential problems in JavaScript code. It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in.

>**jsHint**
- JSHint is a community-driven tool to detect errors and potential problems in JavaScript code. It is very flexible so you can easily adjust it to your particular coding guidelines and the environment you expect your code to execute in.

## Getting Started
If you don't already have Node.js and NPM, go install them. 
https://nodejs.org/en/

Once you do, you can then install the gulp executable globally:

```
$> npm install -g gulp
```

## cloning the project and add to new git
To create a duplicate of a repository without forking, you need to run a special clone command against the original repository and mirror-push to the new one.

Before starting make sure you first create a new repository where you can push the current project to

We have called ours 
```
new-repository.git
```

*download the bare git*
```
$> git clone --bare https://github.com/dreamsandcreations/javascript-setup-with-build.git
```

```
$> cd javascript-setup-with-build.git/
```

```
$> git push --mirror https://github.com/dreamsandcreations/new-repository.git
```
```
$> cd ..
```

```
$>rm -rf javascript-setup-with-build.git/
```
```
$> git clone https://github.com/dreamsandcreations/new-repository.git
```

## installing all npm modules
In the folder where you have cloned the repository, install the build dependencies using npm:

```
$> npm install
```

#### Run gulp tasks
```
$> gulp test
```

```
$> gulp jshint
```

```
$> gulp build
```

```
$> gulp watch
```

#### Testem
Will run all tests in different browsers
```
$> testem
```

#### How to generate the documentation ###

The docs can be generated using npm:

```
$> npm run docs
```

There is also a gulp task to generate them if you want to:

```
$> gulp jsdoc
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
