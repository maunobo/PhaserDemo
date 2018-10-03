demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#f4f141';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};