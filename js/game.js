// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "space.gif",
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
                    text: "Fight Marth",
                    nextLevel: "marth",
                },
                {
                    text: "Fight Isabelle",
                    nextLevel: "isabelle",
                },
                {
                    text: "Fight Little Mac",
                    nextLevel: "mac",
                },
            ]
        },
        isabelle: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You understimated your openent and lost!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        marth: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Start over because he just spammed Either",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        mac: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You won because his recovery still sucks",
            choices: [
                {
                    text: "Fight King K Rool",
                    nextLevel: "krool",
                },
                {
                    text: "Fight Mega Man",
                    nextLevel: "megaman",
                },
                {
                    text: "Fight Incineroar",
                    nextLevel: "incineroar",
                },
            ]
        },
        incineroar: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "With downsmash and super armor, you were obliterated",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },

            ]
        },
        megaman: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You won because his recovery still sucks",
            choices: [
                {
                    text: "Fight Pac-Man",
                    nextLevel: "pac",
                },
                {
                    text: "Fight Bowser Junior",
                    nextLevel: "junior",
                },
                {
                    text: "Fight Ridley",
                    nextLevel: "ridley",
                },
            ]
        },
        krool: {
            background_image: "fire.gif",
            message: "He got the better of you and got 'revenge'",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    }
};
