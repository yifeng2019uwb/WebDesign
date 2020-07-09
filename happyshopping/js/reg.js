window.onload = function() {
    var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regpin = /^[0-9]{6}/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;

    var email = document.querySelector('#email');
    var pin = document.querySelector('#pin');
    var pwd = document.querySelector('#pwd');
    var cpwd = document.querySelector('#cpwd');

    email.onblur = function() {
        if (this.value.match(regemail)) {
            console.log('success');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> Success';
        } else {
            console.log('error');
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> You have entered an invalid email address!';
        }
    };


    regexp(pin, regpin);
    regexp(pwd, regpwd);

    regmatch(cpwd, pwd);



    function regexp(target, reg) {
        target.onblur = function() {
            if (reg.test(this.value)) {
                console.log('success');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> Success';
            } else {
                console.log('error');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> error, please input again';
            }
        }
    };

    function regmatch(target, reg) {
        target.onblur = function() {
            if (this.value == reg.value) {
                console.log('success');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> Success';
            } else {
                console.log('match error');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> do not match, please input again ';
            }
        }
    }




}