demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#f44b42';
        console.log('state1');
        addChangeStateEventListeners();
    },
    update: function(){}
};