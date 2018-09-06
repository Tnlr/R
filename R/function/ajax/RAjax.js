
var R = {
    ajax : function (c) {
        if (!c.type) {
            c.type = 'post';
        }

        if (!c.url) {
            console.error('R::ajax FUNCTION : need URL');
        }

        if (!c.async) {
            c.async = true;
        }
    }  
};