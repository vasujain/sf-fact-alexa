'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.7c4bb79f-9932-4494-bf6f-ebb047eb2eab"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'San Francisco Facts';

/**
 * Array containing San Francisco facts.
 */
var FACTS = [
"The Chinese fortune cookie was invented by a Japanese resident of San Francisco.",
"Lombard Street gets all the love, but Filbert St. between Hyde and Leavenworth Streets is the steepest—31.5 degrees!",
"San Francisco was part of Mexico until the Mexican-American War in 1848.",
"During the Depression, not a single San Francisco-based bank failed. Infact Business was so good, the city constructed the Oakland Bay Bridge and the Golden Gate Bridge during the Depression.",
"As historical beginnings go, the United Nations Charter was drafted and ratified in San Francisco in 1945.",
"As historic endings go, the Beatles gave their last full concert at Candlestick Park, San Francisco, on August 29, 1966.",
"The bear on California’s state flag is modeled after a California grizzly named Monarch, who was held at Golden Gate Park. Monarch weighed 1,100 pounds, and he was one of the last wild grizzly bears in California. He was captured and brought to a zoo in the park in 1889 and lived there for over 22 years until he was euthanized due to old age in 1911.",
"The U.S. Navy originally planned on painting the Golden Gate Bridge black with yellow stripes. The famed “International Orange” color was supposed to be a sealant.",
"Of over 2,500 National Historic Landmarks in the U.S, San Francisco’s Cable Cars Are the Only National Historic Landmark that Can Move",
"According to a study in 2014, 29% of San Francisco’s pollution comes from China.",
"Alcatraz was the only federal prison to offer hot-water showers—supposedly to prevent prisoners from acclimating to the cold temperatures of the San Francisco Bay if they tried to escape.",
"Over 3,000 people have committed suicide from the Golden Gate Bridge, but of the 26 who survived, all 26 reported they regretted their action the moment they jumped.",
"The average depth of the San Francisco Bay is only as deep as a swimming pool at approximately 12-15 feet deep. Large ships in the bay must follow deep underwater channels that are maintained by frequent dredging.",
"San Francisco citizen Joshua Abraham Norton self-declared himself the Emperor of the United States in 1859 and everyone just went with it.",
"The San Francisco International Airport is supported by 267 columns that each rest on a steel ball bearing, allowing the ground to move 20 inches in any direction during an earthquake.",
"San Francisco was originally called Yerba Buena back in 1835, which is Spanish for Good Herb. While this referred to a fragrant plant that grew native to the shoreline, some might say it could apply to…other herbs.",
"Much of San Francisco is built on top of old Gold Rush ships."
"On Mar. 21, 1963, Alcatraz federal prison island in San Francisco Bay was emptied of its last inmates at the order of Attorney General Robert F. Kennedy.",
"Behind New York, Moscow and London, San Francisco is 4th in the world in terms of numbers of billionaires living within its city limits, while having less than 10% the population of the the other three cities.",
"Denim jeans were invented in San Francisco for the Gold Rush miners who needed tough, comfortable clothing",
"The City burned to the ground 6 times before the 1906 earthquake and fire.  After 1906 - it became difficult to get insurance in some locations of the city because of the lack of water/firefighting capabilities.",
"The current Water System in San Francisco is capable of covering a city block (100,000 square feet) with water to a depth of 25 feet in one day.",
"The original United Nations charter was drafted and signed in San Francisco.",
"Soon after the Golden Gate Park opened in 1890, John McLaren, the park's designer added a free-range zoo that was home to elk, bears, goats, and buffalo. The buffalo are the only ones that remain.",
"The 1906 Eartquake in San Francisco destroyed about 1/4 of San Francisco buildings and rendered over half of the city's 400,000 residents homeless.",
"Much of the area near The Embarcadero is built on top of a group of ships abandoned in Yerba Buena Cove during the Gold Rush. Passengers and crews both had gold fever and didn't care about the ships once they arrived",
"The streets in Potrero Hill ARE NOT named after states. They are named after U.S. battleships",
"The movie projector was invented in San Francisco",
"The San Francisco Bay as we know it  today is only about 10,000 years old, and was formed by the runoff of melting glaciers from the last ice age.",
"From the mid-19th century to the late 20th century more than 1/3 of the San Francisco Bay was filled in in order to make more land to build on. You can easily see where this has occurred - it's anywhere along the shoreline that is flat!",
"Golden Gate park, which first opened in the 1870s, is the third most visited park in the United States.",
"According to the Wikipedia entry for a List of songs about California there are 232 songs about San Francisco.",
"San Francisco's fire department uses wooden ladders to reduce the risk of electrocution from the many overhead lines in the city. They actually make the ladders from scratch themselves",
"San Francisco pays $395/mo to homeless as a General Assistance grant, on top of $1-2k/mo in additional services (rent subsidy, health care, etc.) from the city, state, and federal government.",
"The City hall's foundation is made to float on   530 isolators shock absorbers designed to dissipate earthquake motion and   allow the building to sway horizontally up to 26 inches without shaking apart.",
"Polk Street is named after architect and native son of Hope, AK, Willis Polk, not President James K. Polk He was instrumental in rebuilding SF with stunning buildings after the 1906 quake.",
"During the 1906 earthquake, 15 million gallons of wine were destroyed when the Sonoma Wine Company collapsed.",
"The Twin Peaks are named Noe Peak and Eureka Peak. Both are just over 900 ft above sea level.",
"In San Francisco, temperatures exceed 75 °F on average only 28 days a year.",
"San Francisco has more people with bachelors' or graduate degrees per square mile than any other city. ",
"The dome of the San Francisco City Hall is the 5th largest in the world, it's even larger than the US Capitol.",
"Golden Gate Park is 174 acres larger than Central Park in New York.",
"You could build a 16 foot wide road from New York City to San Francisco with the amount of concrete used to build the Hoover Dam.",
"Who needs a beer when you can drink San Francisco’s finest tap water from the Hetch Hetchy reservoir? The water is 85 percent pure snow-melt and comes right from Yosemite national park. (It’s also the reason why local craft beer is so tasty)",
"SF has the second largest Chinatown outside of Asia. It's also the oldest in North America. It is around one mile long by one and a half miles wide. More than 100,000 people live in Chinatown. It's the most densely populated neighborhood in the city.",
"SF also has the largest and oldest Japantown in the United States. It's also one of only three Japantown's still that remain in the US.",
"There are hundreds of earthquakes every year in the Bay Area. However, most are so small (less than a 3.0) that you cannot feel them and they aren't often discussed.",
"San Francisco is only seven miles long by seven miles wide. Due to its small size, it makes it really easy to see a lot in SF in just one day.",
"The dahlia was voted as the city’s official flower by the San Francisco Board of Supervisors under Mayor James Rolph’s administration in 1926.",
"The first tube television was created by Philo T. Farnsworth at the Green Street Studio laboratory in 1927.",
"San Francisco has more dogs than children living in the city. Children living in San Francisco only make up 14.5% of the total population. There are more doggie daycares than public high schools.",
"The Golden Gate Bridge has never been golden and all the steel came from Bethlehem, Pennsylvania. The steel had a primer color of international orange. Unfortunately, Bethlehem Steel no longer exists; it is now a Sands casino."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random San Francisco fact from the San Francisco facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your Game of Thrones fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Game of Thrones fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};