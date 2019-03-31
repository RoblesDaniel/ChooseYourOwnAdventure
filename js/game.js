// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    levels: {
        start: {
        background_image: "cover.png",
        message: "Welcome to the Super Smash Bros:Ultimate Tournament, you are the smash character of your choice and will go through a series of competitors to be an Elite Smash player.",
        music: "smash-menu.mp3",
            choices: [
                {
                    text: "Fight Pac-Man",
                    nextLevel: "PM",
                },
                {
                    text: "Fight Luigi",
                    nextLevel: "luigi",
                },
                {
                    text: "Fight Mario",
                    nextLevel: "mario",
                },
            ]
        },
        PM: {
            background_image: "pacman.gif",
            music: "pac.mp3",
            message: "A yellow cheese ball that will smile at your demise",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        luigi: {
            background_image: "luigi.gif",
            music: "luigismansion.mp3",
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
            music: "jump-up.mp3",
            message: "You challenged Mario and 3 stocked him!",
            choices: [
                {
                    text: "Fight Marth",
                    nextLevel: "marth",
                },
                {
                    text: "Fight Little Mac",
                    nextLevel: "mac",
                },
                {
                    text: "Fight Isabelle",
                    nextLevel: "isabelle",
                },
            ]
        },
        marth: {
            background_image: "marth.gif",
            music: "marth.mp3",
            message: "Better dodge him next time because he will constantly up smash or shield break and you don't want any of that business.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        isabelle: {
            background_image: "isabelle.gif",
            music: "isabelle.mp3",
            message: "She may look cute but I can promise you she is a biter",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        mac: {
            background_image: "littlemac.gif",
            music: "littlemac.mp3",
            message: "You only won because his recovery sucks.",
            choices: [
                {
                    text: "Fight Mega Man",
                    nextLevel: "megaman",
                },
                {
                    text: "Fight Ridley",
                    nextLevel: "ridley",
                },
                {
                    text: "Fight Bowser Junior",
                    nextLevel: "junior",
                },
            ]
        },
        megaman: {
            background_image: "bluebomber.gif",
            music: "megaman.mp3",
            message: "Never mess with the Blue Bomber!!!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        ridley: {
            background_image: "ridley.gif",
            music: "vsridley.mp3",
            message: "This ferocious beast will drag you to your grave.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        junior: {
            background_image: "jr.gif",
            music: "fortress-boss.mp3",
            message: "Jr and his crew aren't as slick as they thought they were, that's why they're low tier.",
            choices: [
                {
                    text: "Fight Docter Mario",
                    nextLevel: "DM",
                },
                {
                    text: "Fight King K Rool",
                    nextLevel: "krool",
                },
                {
                    text: "Fight Incineroar",
                    nextLevel: "roar",
                },
            ]
        },
        roar: {
            background_image: "incenaroar.gif",
            music: "inCENAroar.mp3",
            message: "He has the eye of the tiger and will get his 'Revenge'",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        krool: {
            background_image: "krool.gif",
            music: "gg.mp3",
            message: "The big belly king crock himself that will bury you alongside your dreams",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        DM: {
            background_image: "dm.gif",
            music: "drm.mp3",
            message: "Literary Mario but with a degree, so there's no competition.",
            choices: [
                {
                    text: "Continue",
                    nextLevel: "next",
                },
            ]
        },
        next: {
            background_image:"infinity.gif",
            music: "Halo.mp3",
            message: "Great, you finally became an Elite Smash player along with all the other cool people. But now your greatest challenge is to be the Ultimate Smash Player. You will now face off against multiple skilled players like yourself and claim your place as 'The Ultimate Smash Player'.",
            choices: [
                {
                    text: "Ready!!!",
                    nextLevel: "ready",
                },
            ]
        },
        ready: {
            background_image: "elitecover.jpg",
            music: "finale.mp3",
            message: "Here are the next contestants. GOOD LUCK!!!",
            choices: [
                {
                    text: "Fight Kirby",
                    nextLevel: "poyo",
                },
                {
                    text: "Fight Inklings",
                    nextLevel: "ink",
                },
                {
                    text: "Fight Olimar",
                    nextLevel: "olimar",
                },
                {
                    text: "Fight Wolf",
                    nextLevel: "wolf",
                },
            ]
        },
        poyo: {
            background_image: "kirby.gif",
            music: "poyo.mp3",
            message: "Kirby's cutness is just a destraction of the his destructive inhaling power.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        ink: {
            background_image: "inkling.gif",
            music: "splat.mp3",
            message: "Very annoying to play against, especially with that giant roller of theirs to constantly bury you alive.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        wolf: {
            background_image: "wolf.gif",
In            music: "wolf.mp3",
            message: "Wolf mains are serious about this character and wil always play him to maximze efficiency... just like fox mains.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        olimar: {
            background_image: "olimar.gif",
            music: "pikmin.mp3",
            message: "Wasn't someone to take seriously. ",
            choices: [
                {
                    text: "Fight Pirahna Plant",
                    nextLevel: "plant",
                },
                {
                    text: "Fight Dark Samus",
                    nextLevel: "samus",
                },
                {
                    text: "Fight Richter Belmont",
                    nextLevel: "richter",
                },
                {
                    text: "Fight Link",
                    nextLevel: "link",
                },
            ]
        },
        samus: {
            background_image: "darksamus.gif",
            music: "samus.mp3",
            message: "Played for either a JOJ reference or to have an edgier viable character.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        richter: {
            background_image: "richter.gif",
            music: "richter.mp3",
            message: "Likes to have some distance between his opponents and plays it safe.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        link: {
            background_image: "link.gif",
            music: "link.mp3",
            message: "Hyrules #1 hero that only knows how to throw projectiles.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        plant: {
            background_image: "plant.gif",
            music: "plant.mp3",
            message: "A venomous creature that isn't all that great but also doesn't suck. At least he isn't the equivalent of Smash 4's Nerf Little Mac.",
            choices: [
                {
                    text: "Fight Sonic",
                    nextLevel: "sonic",
                },
                {
                    text: "Fight Cloud",
                    nextLevel: "cloud",
                },
                {
                    text: "Fight Lucas",
                    nextLevel: "lucas",
                },
                {
                    text: "Fight Bowser",
                    nextLevel: "bowser",
                },
            ]
        },
        sonic: {
            background_image: "sonic.gif",
            music: "sonic.mp3",
            message: "If only you caould run at the speed of sound, maybe you could have beaten him.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        cloud: {
            background_image: "cloud.gif",
            music: "finalfantasy.mp3",
            message: "Fans of the Final Fantasy will probably tryhard with him and land Cloud's special to maximize coolness.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        bowser: {
            background_image: "bowser.gif",
            music: "bowser.mp3",
            message: "A Koopa King that is a serious challenge and can smash you into oblivion.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "ready",
                },
            ]
        },
        lucas: {
            background_image: "lucas.gif",
            music: "lucas.mp3",
            message: "Lucas is quite the versatile player and facing someone like him is such a dawnting task. Beating him could be considered as a big achievment.",
            choices: [
                {
                    text: "Game!",
                    nextLevel: "end",
                },
            ]
        },
        end: {
            background_image: "goodending.jpg",
            music: "lifelight.mp3",
            message: "Congats on earnig your place as 'The Ultimate Smash Player' and because you made it this far, you now get to pick one of 3 characters to in Super Smash Bros: Ultimate.",
            choices: [
                {
                    text:"Geno for Smash",
                    nextLevel: "geno",
                },
                {
                    text:"Waluigi for Smash",
                    nextLevel: "waluigi",
                },
                {
                    text:"Doomguy for Smash",
                    nextLevel: "doom",
                },
            ]
        },
        geno: {
            background_image: "geno.jpg",
            music: "lifelight.mp3",
            message: "",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        waluigi: {
            background_image: "waluigi.jpg",
            music: "lifelight.mp3",
            message: "",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        doom: {
            background_image: "doomguy.jpg",
            music: "lifelight.mp3",
            message: "",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
    }
};
