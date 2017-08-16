angular.module('skillenza', [])
    .controller('myCtrl', function ($scope) {
        $scope.tracks = [
            {
                title: 'Data Visualization',
                description: 'Discover, model and visualize interesting relationships among attributes of any dataset of your choice. Examples of cool data sets to explore visually are census data, earthquake data, Environ emails etc.'
            }, {
                title: 'Text Mining',
                description: 'Social media can reveal more about us than we know. One can even figure out the content on one’s character by analyzing their Twitter feed. Find out if someone you know (or even yourself!) is a psychopath by delving deep into their social data.'
            }, {
                title: 'Chat Bot',
                description: 'Build your own intelligent chat bot that answers routine queries. Let your bot do the mundane work, while humans do the heavy lifting. Perhaps, eventually, your bot can do it too!'
            }, {
                title: 'Predictive Analytics',
                description: 'Become the next Oracle. Predict the winners of the next IPL season. If you want to get a bit more serious, try your hand at stock market prediction and walk away a billionaire!! :P'
            }, {
                title: 'Game AIs',
                description: 'Build a bigger and better Deep Blue! (Or for you younger folks, AlphaGo!). Beat all human comers (or perhaps other machines) at games: be it board or otherwise.'
            }, {
                title: 'Algorithmic Madness',
                description: 'Train your best classifier on a given dataset. Come up with your own ensemble algorithms, or create your own!'
            }, {
                title: 'Recommender Systems',
                description: 'You know how eCommerce websites seem to suggest the best stuff for your needs? You can do it yourself, you know! Build the best recommender system be it for movies, books or even job listings.'
            }, {
                title: 'Image Processing',
                description: 'Build a cool visual search engine. Or try your hand at filtering out objectionable images and the like. Perhaps even build a QR Code scanner!'
            }, {
                title: 'Audio Processing',
                description: 'Analyze audio recordings to find your favorite tunes among static noise. Mayhap you can build your own personal assistant like Siri or Cortona.'
            }, {
                title: 'Wildcard',
                description: 'It\'s completely open. Hack away at whatever strikes your fancy. Use any APIs you are comfortable with. Build ANYTHING you want. It could be face-recognition devices, visual search engines, recommendation services ...'
            }
        ];

        $scope.works = [
            {
                icon: 'fa-id-card',
                title: 'APPLY'
            },{
                icon: 'fa-calendar',
                title: 'ATTEND'
            },{
                icon: 'fa-code',
                title: 'CODE'
            },{
                icon: 'fa-arrows-alt',
                title: 'SHOWTIME'
            },{
                icon: 'fa-money',
                title: 'PRIZE'
            }
        ];

        $scope.faqs = [
            {
                question: 'Can any one participate?',
                answer: 'This is strictly for students only. However, if you are an experienced developer, a still want to have fun, you can mentor a student team. But you will not be eligible for any prizes.'
            },{
                question: 'What is the venue for the challenge?',
                answer: 'No. 389, 12 Main, 1st Cross, Indiranagar, Bangalore 560038'
            },{
                question: 'Is it compulsory to stay back?',
                answer: 'If you have to go home for the night, we won\'t stop you. Just come back the next morning. :)'
            },{
                question: 'Do I need to bring my laptop?',
                answer: 'Yes! Don\'t forget to bring a charger too.'
            },{
                question: 'Can I participate as an individual?',
                answer: 'This is a team event. No lone crusaders, please.'
            },{
                question: 'I don\'t have any team members. Where can I find one?',
                answer: 'Not to worry. Just hop on over to our Vhackers group in Facebook and list your requirements. If you are still having trouble, we will help you find a team member on the day of the hack.'
            },{
                question: 'What is the team size limit?',
                answer: 'Team size is limited to 4. Any more, and the team might be a little crowded, don\'t you think?'
            },{
                question: 'Does it cost me anything?',
                answer: 'No. Nothing. You don\'t even have to pay for food! We will take care of everything. But transportation is your responsibility.'
            }
        ];
    });