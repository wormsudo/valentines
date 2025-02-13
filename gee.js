const cdPicture = document.getElementById("cd");
const songGrid = document.getElementById("songGrid");
let currentSlideIndex = 0;

const songs = [
    {
        title: "In the Aeroplane Over the Sea",
        image: "images/aero.jpg",
        description: "by Neutral Milk Hotel",
        lyrics: "This is a song from one of my favorite albums, and while a lot of the album itself is very down and depressing, this is one of the most uplifting songs they put on the album. It reminds me of you because while the song addresses death in its face, it shows the value of living in the moment and just how beautiful it is in the world when we're together in each others arms. It shows me that no matter what, we can always create our own beauty in the world, because as long as I'm with you, everything feels ok and I'm forever going to treasure and cherish every single second in the world with you."
    },

    {
        title: "Formidable",
        image: "images/sai.png",
        description: "by Twenty One Pilots",
        lyrics: "A bit of a contrast because it's probably one of my lesser favorite albums from this artist, but this song's always meant a lot to me. I remember when you first made me that playlist of love songs, even though my mind kept telling me I was completely stupid for considering that maybe you liked me, I still felt that love through the playlist, and I remember when I first tried making just any playlist in general and you said you had wanted to see if it was okay, so I showed it to you and I didn't want to be too forward about putting too affectionate songs because I didn't want to be obvious or anything, but this was one of the first songs I put cause it's always reminded me of you and just how truly amazing and formidable you are to me."
    },

    {
        title: "Slow Dances",
        image: "images/slow.jpg",
        description: "by Winnetka Bowling League",
        lyrics: "I remember when I was really super vulnerable about my music taste I tried hiding what I listened to a lot because I was so scared of being judged for it, and you were the person I opened up to about showing you the songs I personally liked. I remember when you were telling me that one day you saw I was listening to this song and you thought it looked a little bit silly if I remember correctly, but then you took a listen and actually thought it was a pretty ok song, so it's just something I always found really sweet and how much you've made me feel so comfortable and safe and open. Plus the song itself has always reminded me of you because of our long distance and how much I desire getting to be there with you."
    },

    {
        title: "I Found a Way",
        image: "images/found.jpg",
        description: "by First Aid Kit",
        lyrics: "I think this is a really sweet song and I think about you each time I listen to it because you always make me feel like I'm placed on the right path. I felt so lost and hopeless and directionless before I met you, but then not only when you stepped in my life, but every single day that I share my life with you I feel like you make me whole and that I'm on the most loving and comforting path in the world to where I shine brightly instead of fading away."
    },

    {
        title: "Under Your Spell",
        image: "images/desire.jpg",
        description: "by Desire",
        lyrics: "I think of you anytime I listen to this song because it feels like I'm forever under your amazing spell. Each time I talk to you I'm so mesmerized by your sweet self and how amazing you are and how happy it makes me to talk to you all throughout the day, and even when I'm not talking to you whether I'm in class or I'm starting to doze off for bed, you're always in my mind 24/7 because all I do is think of you. No matter what I do you're permanently etched in my mind and I'm more than happy with you as my every thought."
    },
    
    {
        title: "watch you sleep.",
        image: "images/sleep.jpg",
        description: "by girl in red",
        lyrics: "I've always found this as just a really sweet and meaningful song, it was a song that inspired one of the ones I wrote you for you in my gift for our first anniversary, because it's just a really comforting song to me. It makes me dream of when I get to wake up to you every single day and see your angelic face under the blankets resting your pretty eyes. Any time that I dream about it, knowing that one day I'll get to wake up to you every single day for the rest of my life makes me cry of joy each time. I could look at you and admire your face for an eternity."
    },

    {
        title: "I'll Be Your Mirror",
        image: "images/mirror.jpg",
        description: "by The Velvet Underground, Nico",
        lyrics: "I chose this song because every time that you talk badly about your looks or try to discredit how beautiful you are I always stand my ground and state just how truly gracious and beautiful you are. I always wish to be that mirror that can be held up to show how amazing of a person you truly are with all of the beauty and gorgeousness in the world."
    },

    {
        title: "There She Goes",
        image: "images/goes.jpg",
        description: "by The La's",
        lyrics: "This is a really cute song to me because it's just a sweet little ballad about how mesmerizing one can be. Each time I recieve your message, or hear your voice, or just think about you in general, you start running laps in my mind spreading all of the love and happiness to me in the world. They always feel like the most everlasting feelings in the world and I think that this is just a really sweet song that represents it well."
    },

    {
        title: "Lovely",
        image: "images/lovely.jpg",
        description: "by Twenty One Pilots",
        lyrics: "I chose this song for a lot of similar reasons as I did with \"I'll Be Your Mirror\" because I always want you to know just how beautiful you truly are. This song's a lot more meaningful to me though cause I just think the word \"Lovely\" is such a pretty word and you're the pure embodiment of that word. Cause any time you try to play down your beauty, I'm always going to go to every end of the earth to show to you just how lovely you are. You're the prettiest, sweetest, most perfect girl in the world and I love you for it."
    },

    {
        title: "There Is a Light That Never Goes Out",
        image: "images/smiths.jpg",
        description: "by The Smiths",
        lyrics: "I really like this song and it's a song that makes me think about you because I feel so at home with you and so safe with you, and I would walk through literally anything, because no matter what life could ever throw at us, I'll forever feel as honored and thankful as can be that I'll be in it by your side. I'll forever hold your hand through every single step in life because you're the most heavenly way to possibly ever spend a life."
    },

    {
        title: "Future Days",
        image: "images/days.jpg",
        description: "by Pearl Jam",
        lyrics: "I've always thought that this was just a super pretty little song, because I dream about all of our days together in the future more than anything. I sit and daydream all the time about getting to spend my life with you, I dream at night about getting to fall asleep by your side each and every night, and it just all is so comforting. You're the one and only person I could ever think of a future with and I'm so happy each time I dream of our life together."
    },

    {
        title: "All Night",
        image: "images/r5.jpg",
        description: "by R5",
        lyrics: "I remember when I showed you the song \"If\" by R5 that one playlist I mentioned that I showed and how much you ended up liking it, especially cause you put it as one of the cute paper records that you made for me and sent to me, and I'd say this song isn't fully on par with how much I like \"If\" but it's just a fun and upbeat song that always reminds me of you cause I know that we'll be alright when we're together and no matter what gets in our way we'll forever have one another each and every night."
    },

    {
        title: "Send My Heart With A Kiss",
        image: "images/kiss.jpg",
        description: "by Stephen Sanchez",
        lyrics: "I remember listening to this song for the first time as I made that last little silly website for you with the marriage proposal choose your own adventure kind of game and I ended up putting this song on in the background of it. It's a really pretty song to me, I think the entire album where this song comes from is filled with tons of gorgeous songs but this one has always stood out to me because even though we're far right now, I still feel your love as brightly as it can possibly ever shine as if you're hugging and kissing my heart every single day."
    },

    {
        title: "Halley's Comet",
        image: "images/happier.jpg",
        description: "by Billie Eilish",
        lyrics: "This is a song that's always really stood out to me because it's just a really sweet song about falling in love with you and it's always reminded me of you. Cause honestly, I fall in love with you more and more every single day and you make so unimaginably happy. Every single time I talk to you it makes me feel like I'm falling in love all over again and this song is a really sweet representation of it to me."
    },

    {
        title: "Kismet",
        image: "images/silly.jpg",
        description: "by Liam Gift",
        lyrics: "I wrote this song for you a little while ago cause I'm always thinking about our future honestly. You're the person who's made me believe in a future. You give me so much hope and motivation and I love you so much for everything amazing and inspiring that you instill in me. I love dreaming about when we finally get to step in our apartment together for the first time, and when we get to hug each other to sleep for the first time knowing that we'll get to hold each other for the rest of our lives together. The song isn't much but it's just things I always dream about and look forward to because I love you and I can't wait to have my entire life with you. (I apologize for always making you listen to my silly music)."
    }
];

function createSlideshow() {
    songs.forEach((song, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="slide-content">
                <h1>${song.title}</h1>
                <h2>${song.description}</h2>
                <p class="description">${song.lyrics}</p>
            </div>
        `;
        slideshow.appendChild(slideElement);
    });
    updateSlides();
}

function updateSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'previous', 'next');
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else if (index === currentSlideIndex - 1 || 
                  (currentSlideIndex === 0 && index === slides.length - 1)) {
            slide.classList.add('previous');
        } else if (index === currentSlideIndex + 1 || 
                  (currentSlideIndex === slides.length - 1 && index === 0)) {
            slide.classList.add('next');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

function unlock() {
    cdPicture.classList.add('fade-out');
    setTimeout(() => {
        cdPicture.style.display = 'none';
        slideshow.style.visibility = 'visible';
        slideshow.style.opacity = '1';
    }, 500);
    createSlideshow();
}