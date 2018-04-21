(function (window, document) {

    var
        zoekLink = document.getElementById('zoekLink'),
        zoekbalk  = document.getElementById('zoekbalk'),
        zoekform  = document.getElementById('zoekform');


    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(zoekbalk, active);
        toggleClass(zoekLink, active);
        toggleClass(zoekform, active);
    }


        zoekLink.onclick = function (e) {
            toggleAll(e);
        };




}(this, this.document));
