// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "https://i.imgflip.com/2li4sn.jpg",
    levels: {

        start: {
        message: "Welcome to the Smash Ultimate Tournament, you are the smash character of your choice and will go through a series of competitors to be an elite Smash player.",
            choices: [
                {
                    text: "Fight Mario",
                    nextLevel: "mario",
                },

                {
                    text: "Fight Luigi",
                    nextLevel: "luigi",
                },
            ]
        },

        luigi: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You challenged Luigi and lost!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        mario: {
            background_image: "mario.gif",
            message: "You challenged Mario and 3 stocked him!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
