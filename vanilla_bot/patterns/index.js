const patternDict = [{
     pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
     intent : 'Hello '
     },{
     pattern :'\\b(bye|exit|stop)\\b',
     intent : 'Exit'
     },{
     pattern : 'bye',
     intent : 'Exit'
     },{
     pattern : 'How are you',
     intent : 'How are you'
     },{
     pattern : '\\bin (?<city>([A-Z][a-z]+\\s?)+)\\s?(?<date>(today|tomorrow|the day after tomorrow))?\\b',
     intent : 'Current weather'
     },{
     pattern : 'thank',
     intent : 'Thanks'
     }];

module.exports=patternDict;
