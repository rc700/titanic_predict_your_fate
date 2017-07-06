// dependencies

var restify = require('restify');

var builder = require('botbuilder');

var request = require('request');

// Setup Restify Server

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function () {

   console.log('%s listening to %s', server.name, server.url); 

});

// Create chat connector for communicating with the Bot Framework Service

var connector = new builder.ChatConnector({

    appId: process.env.MICROSOFT_APP_ID,

    appPassword: process.env.MICROSOFT_APP_PASSWORD

});

// create the bot

var bot = new builder.UniversalBot(connector);

// Listen for messages from users 

server.post('/GrammarGuru', connector.listen());

//entry point for branches and receving an image

var bot = new builder.UniversalBot(connector, function(session){

    var msg = "You are embarking the titanic, will you survive? Say 'chat' to board and find out your fate...";
    session.send(msg)

});

bot.dialog('chat', [

    function (session, results){
        builder.Prompts.text(session, 'What class were you in? (1,2,3)')
    },

    function(session, results) {
        session.dialogData.class = results.response;
        builder.Prompts.text(session, "Are you male or female?");
    },

    function (session, results) {
        session.dialogData.gender = results.response;
        builder.Prompts.text(session, 'What age are you?')
    },

    function (session, results){
        session.dialogData.age = results.response;
        builder.Prompts.text(session, 'How many siblings do you have?')
    },

    function (session, results){
        session.dialogData.siblings = results.response;
        builder.Prompts.text(session, 'How many parents/children do you have?')
    },
    function (session, results){
        session.dialogData.parentschildren = results.response;
        builder.Prompts.text(session, 'How much did you pay for your ticket?')
    },
    function (session, results){
        session.dialogData.price = results.response;
        builder.Prompts.text(session, 'Where did you get on? (1 = Southhampton, 2 = Place 1, 3 = Place 2')
    },
    function (session, results){
        session.dialogData.parentschildren = results.response;
        builder.Prompts.text(session, 'How much did you pay for your ticket?')
    },
    function (session, results){
        session.endDialog('You would have ' /*+ result*/)
        
    }




]).triggerAction({

    matches: /^chat$/i

});

3.0, 0, 21, 0, 2, 211, 1
// pclass 	survived 	name 	sex 	age 	sibsp 	parch 	ticket 	fare 	cabin 	embarked 	boat 	body 	home.dest

