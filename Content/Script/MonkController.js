var vm = this;

vm.index = 1;

var MoveSlider = function (index) {
    vm.index = index;
    document.getElementById('indexText').innerHTML = '';
    if (vm.index > 8) {
        vm.index = 9
        var WithToMove = (-7600 / 10) * vm.index;
    }
    if (vm.index < 1) {
        vm.index = 0
        var WithToMove = 0;
    } if (vm.index > 0 && vm.index < 9) {
        var WithToMove = (-7300 / 10) * vm.index;
    }

    document.getElementById('slider').style.backgroundPosition = WithToMove + "px 0px";
    replaceTheIndexText(index);
}

var replaceTheIndexText = function (index) {
    if (index > 0 && index < 9) {
        document.getElementById('indexText').innerHTML = 'Step ' + index + ' out of 8 on the path to digital enlightenment';
        var arrowLeft = document.getElementById('leftArrow');
        arrowLeft.className = 'arrows';
        var arrowRight = document.getElementById('rightArrow');
        arrowRight.className = 'arrows';
    }
    if (index == 0) {
        var arrowLeft = document.getElementById('leftArrow');
        arrowLeft.className = 'dontShow';
        var arrowRight = document.getElementById('rightArrow');
        arrowRight.className = 'arrows';
    }
    if (index == 9) {
        var arrowRight = document.getElementById('rightArrow');
        arrowRight.className = 'dontShow';
        var arrowLeft = document.getElementById('leftArrow');
        arrowLeft.className = 'arrows';
    }


    for (i = 0; i < 10 ; i++) {
        var element = document.getElementById('slide' + i);
        if (i == index) {
            if (i == 9) {
                var efect = " moving3";
            } else {
                var efect = " fadeIn";
            }
            element.className = 'showSlide' + i + efect ;

        } else {
            element.className = 'dontShow';
        }

    }

}

var moveBackground = function (direction) {
    if (direction === 'left') {
        vm.index--;
    } else {
        vm.index++;
    }
    MoveSlider(vm.index)
}

MoveSlider(0);

document.getElementById('slider').style.visibility = "hidden";
var delay = 1000; //1 second
var timeConsumed = 20;
var j = 0;
document.getElementById('counter').innerHTML = timeConsumed;

setTimeout(function () {
    timeConsumed = vm.timeConsumed + 20;
    document.getElementById('counter').innerHTML = timeConsumed;
    setTimeout(function () {
        timeConsumed = vm.timeConsumed + 20;
        document.getElementById('counter').innerHTML = timeConsumed;
        setTimeout(function () {
            timeConsumed = vm.timeConsumed + 20;
            document.getElementById('counter').innerHTML = timeConsumed;
            setTimeout(function () {
                timeConsumed = vm.timeConsumed + 20;
                document.getElementById('counter').innerHTML = timeConsumed;
                setTimeout(function () {
                    document.getElementById('timeOut').className = "dontShow";
                    document.getElementById('slider').style.visibility = "visible";
                }, delay);
            }, delay);
        }, delay);
    }, delay);
}, delay);

var GoToMediaMonks = function () {
    window.open('https://www.mediamonks.com/');
}

var GoToMediaMonksFacebook = function () {
    window.open('https://www.facebook.com/mediamonks');
}

var GoToMediaMonksTwitter = function () {
    window.open('https://twitter.com/mediamonks/');
}

var GoToMediaMonksCareers = function () {
    document.location = ('https://www.mediamonks.com/careers/');
}




