(function () {
    'use strict';
    function getId(id) {
        return document.getElementById(id);
    }

    (function projBtns() {

        getId('snobz').addEventListener('click', () => {
            window.open("https://snobz.vercel.app/", "_blank");
        });

        getId('snobzGit').addEventListener('click', () => {
            window.open("https://github.com/JosephSchec/Snobz", "_blank");
        });

    }());

    (function accSvgs() {
        const accHeadings = ['JavaHeading', 'SQLHeading', 'pythonHeading', 'htmlHeading'];
        accHeadings.forEach(head => {
            let open = false;
            getId(head).addEventListener('click', () => {
                let lang = head.split('Head')[0];
                if (!open) {
                    getId(head).firstElementChild.setAttribute('style', "transition: .15s ; transform : rotate(180deg);");
                    getId(`collapse${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.add('show');
                    open = true;
                } else {
                    getId(head).firstElementChild.setAttribute('style', "transition: .15s ; transform : rotate(0deg);");
                    getId(`collapse${lang.charAt(0).toUpperCase() + lang.slice(1)}`).classList.remove('show');
                    open = false;
                }
            });
        });
    }());
}());