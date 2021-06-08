# Music RPG
Created by Michael Auld and Joshua Singer

![License](https://img.shields.io/badge/license-MIT-green)

## How to Play
The goal of the game is simple, have our protagonist, Plink use the note buttons to match a given song.
Controls:

- Arrow Keys (up, down, left, right) can be
used to move Plink through the map

- Walk up to a button and press the Space Key to press it. Buttons will visually click
when they are pressed.

To play the song Plink needs to emulate, walk up to the ‘play’ button in the center of the level.
Listen to the tune.

Then, use the note buttons surrounding the play button to make a tune that matches what you just heard. This will be tough!
Once you’ve matched all the tune, you will hear a victory jingle and a door will open up ahead of you. You can now progress to the next level.

The next level has you do the same thing, but the tune is twice as long and the arrangement of the note blocks has changed. This level is HARD, and we recommend you use a piece of paper to keep track of the notes you have heard.

HINT: The first half second room's note pattern is the same as the note pattern from the first room. A tune will play if you get the first half right, letting you know you are on track.
         

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Parcel](https://parceljs.org/) installed.

It is highly recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) to install Node.js and npm.

For Windows users there is [Node Version Manager for Windows](https://github.com/coreybutler/nvm-windows).

Install Node.js and `npm` with `nvm`:

```bash
nvm install node

nvm use node
```

Replace 'node' with 'latest' for `nvm-windows`.

Then install Parcel:

```bash
npm install -g parcel-bundler
```

## Run Locally

Clone this repository to your local machine

Go into your new project folder and install dependencies:

```bash
cd phaser3-typescript-parcel-template # or 'my-folder-name'
npm install
```

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## License

[MIT License](https://github.com/ourcade/phaser3-typescript-parcel-template/blob/master/LICENSE)
