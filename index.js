$(document).ready(function () {
    let scoreNumber = 0;
    $("#ruls-button").click(function () {

        $(".main-section").css({
            "opacity": "0.2"
        })

        $("#rule-section").css({
            "display": "block"
        })
        $("#close-rules").click(function () {
            $(".main-section").css({
                "opacity": "1"
            })
            $("#rule-section").css({
                "display": "none"
            })
        })

    })



    $(".game-choice").click(function () {
        setTimeout(function () {
            $(".the-game").css({
                "display": "none"
            })
            $(".rules").css({
                "display": "none"
            })
        }, 200)


        setTimeout(function () {
            $(".while-game").css({
                "display": "flex"
            })

            $(".rules").css({
                "display": "flex"
            })
            $(".other-pick-shadow").css({
                "display": "flex"
            })
            $(".other-pick").css({
                "display": "none"
            })




            game();


        }, 400)


        let buttonClasses = ["paper", "scissors", "rock"];

        //clicked button

        let clickedButton = $(this).attr("src");
        $(".my-pick img").attr("src", "" + clickedButton + "");

        //************* */



        //my number of chose..
        let myNumber = 0;
        for (let i = 0; i < buttonClasses.length; i++) {
            if ($(this).hasClass("" + buttonClasses[i] + "")) {
                let borderColor = $("." + buttonClasses[i] + "").css("border-color");
                myNumber = i;
                $(".my-pick img").css({
                    "border-color": "" + borderColor + ""
                })
                break;
            }
        }

        //**************** */


        //user number chose

        let randomChoose = Math.floor(Math.random() * 3);
        let userNumber = 0;
        for (let i = 0; i < buttonClasses.length; i++) {
            if (randomChoose == i) {
                userNumber = i;
                setTimeout(function () {
                    $(".other-pick img").attr("src", "icon-" + buttonClasses[i] + ".svg");
                    let borderColor = $("." + buttonClasses[i] + "").css("border-color");
                    $(".other-pick img").css({
                        "border-color": "" + borderColor + ""
                    })

                    $(".other-pick-shadow").css({
                        "display": "none"
                    })
                    $(".other-pick").css({
                        "display": "flex"
                    })

                }, 800)
                break;
            }
        }

        //****************** */



        //check who win method


        function game() {

            let winText = $(".play-again-text");

            if ((myNumber == 0 && userNumber == 2) || (myNumber == 1 && userNumber == 0) || (myNumber == 2 &&
                userNumber == 1)) {      //I win
                scoreNumber++;

                setTimeout(function () {
                    let winAudio = new Audio("success-1-6297.mp3");
                    winAudio.play();
                    $("#score-point").text("" + scoreNumber + "");
                    winText.text("You win");
                }, 800)



            } else if ((userNumber == 0 && myNumber == 2) || (userNumber == 1 && myNumber == 0) || (userNumber == 2 &&
                myNumber == 1)) {   //user win
                setTimeout(function () {
                    winText.text("You lose")
                }, 800)


            } else {//tide
                setTimeout(function () {
                    winText.text("Tie")
                }, 800)


            }

            $(".play-again-button").click(function () {
                $(".while-game").css({
                    "display": "none"
                })
                $(".the-game").css({
                    "display": "flex"
                })
                winText.text("")

            })
        }


    })




})
