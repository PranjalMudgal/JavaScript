
//Generate a basic insight based on Month
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

//Based on Date, size 31
const compliments = [
    "You have an amazing smile!",
    "Your kindness is truly inspiring.",
    "You're a wonderful listener.",
    "You brighten up any room.",
    "Your creativity knows no bounds.",
    "You are incredibly thoughtful.",
    "You make the world a better place.",
    "Your positivity is contagious.",
    "You have a great sense of humor!",
    "You're a great problem solver.",
    "Your confidence is admirable.",
    "You are genuinely caring.",
    "You handle challenges with grace.",
    "You always bring out the best in people.",
    "Your words have a way of uplifting others.",
    "You're a ray of sunshine!",
    "Your dedication is commendable.",
    "You are brave and strong.",
    "You make people feel valued.",
    "Your enthusiasm is refreshing.",
    "You radiate warmth and kindness.",
    "You're a fantastic friend.",
    "You have a heart of gold.",
    "Your hard work does not go unnoticed.",
    "You're a joy to be around.",
    "You have an infectious laugh.",
    "You inspire those around you.",
    "You make life more exciting.",
    "You have an incredible sense of style.",
    "You're amazing just the way you are!",
    "You make the world brighter!"
];

//Size 20
const victimCardCompliments = [
    "You always go out of your way for others, but they seldom notice.",
    "You're the one everyone relies on, yet no one asks if you need help.",
    "You give your all, but people take it for granted.",
    "You're always there for everyone, but when you need someone, they're nowhere to be found.",
    "You put others first, yet you're always the last to be appreciated.",
    "Your kindness is endless, but it feels like no one truly values it.",
    "You make sacrifices for people who don't even acknowledge them.",
    "You listen to everyone's problems, but when you speak, no one hears you.",
    "You do so much for others, but all you get in return is silence.",
    "You build everyone up, but they forget to lift you when you're down.",
    "You're the glue that holds everything together, yet you're overlooked.",
    "Your efforts make a difference, but you rarely get credit for it.",
    "You give second chances when others wouldn't, yet you remain underappreciated.",
    "You're the peacekeeper, but no one notices your struggles.",
    "You always remember birthdays, but yours comes and goes unnoticed.",
    "You're the shoulder to cry on, but where is yours when you need it?",
    "You spread positivity, yet people rarely reciprocate.",
    "You work hard to keep relationships strong, but they don't always see the effort.",
    "You forgive easily, even when people don't deserve it.",
    "You bring warmth into people's lives, but they don't always realize it."
];

//size 30
const recommendations = [
    "Feed a street dog or cat and provide fresh water.",
    "Smile at a stranger—it might brighten their day.",
    "Plant a tree or care for a plant.",
    "Help an elderly person carry their groceries.",
    "Donate books to a local library or school.",
    "Write a heartfelt note to someone you appreciate.",
    "Pick up litter in your neighborhood or at a park.",
    "Compliment someone sincerely.",
    "Share food with someone in need.",
    "Volunteer at a shelter or community service center.",
    "Listen patiently when someone needs to talk.",
    "Leave a kind message for a stranger to find.",
    "Teach someone a skill you're good at.",
    "Support a local artist or small business.",
    "Hold the door open for someone.",
    "Spend time with someone who might feel lonely.",
    "Give away clothes you no longer wear to charity.",
    "Help a friend with a task they're struggling with.",
    "Celebrate others' successes without envy.",
    "Pay for a stranger's meal or coffee.",
    "Write down three things you're grateful for every day.",
    "Make someone laugh—it's the best medicine.",
    "Send a loving message to a family member.",
    "Encourage someone who's feeling low.",
    "Play with children and embrace their joy.",
    "Cook a homemade meal for a loved one.",
    "Take a break to appreciate nature.",
    "Offer directions if someone looks lost.",
    "Respect others' time and efforts.",
    "Practice kindness even when nobody's watching."
];

//size is 20
const predictions = [
    "You will become a crorepati!",
    "Success will chase you in unexpected ways.",
    "You will find the love of your life soon.",
    "Your dream career is just around the corner.",
    "A surprise opportunity will change your life.",
    "You will travel to your dream destination.",
    "Your efforts will finally get the recognition they deserve.",
    "Financial abundance is coming your way.",
    "Happiness will fill your home and heart.",
    "You will inspire thousands with your journey.",
    "A long-lost friend will reconnect with you.",
    "You will unlock hidden talents within yourself.",
    "Your hard work will pay off beyond expectations.",
    "A major breakthrough is waiting for you.",
    "You will achieve the fitness goals you always dreamed of.",
    "Unexpected wealth will come your way.",
    "Your business idea will be a massive success.",
    "You will find peace and fulfillment in life.",
    "Your name will be known far and wide.",
    "All the struggles you faced will turn into great stories of triumph."
];


const form = document.getElementById('astroForm');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log("Submitted");
    const Name = document.getElementById('name').value;
    const SurName = document.getElementById('surname').value;
    const Day = Number(document.getElementById('day').value);
    const Month = Number(document.getElementById('month').value);
    const Year = Number(document.getElementById('year').value);

    const result = document.getElementById('result');
    
    const first_message = `Hello ${Name} ${SurName}.`;
    const second_message = `Your Zodiac Sign is ${zodiacSigns[Month-1]}`;
    const third_message = compliments[Day-1];

    let index = Math.floor(Math.random()*20);
    const fourth_message = victimCardCompliments[index];

    index = (Name.length*SurName.length*Year)%30;
    const fifth_message = recommendations[index];

    index = (Day*Month*Year)%20;
    const sixth_message = predictions[index];

    result.innerText = `${first_message}\n ${second_message}\n ${third_message}\n ${fourth_message}\n Our Recommendation for you: ${fifth_message}\n Your Future Prediction is: ${sixth_message}`
});











