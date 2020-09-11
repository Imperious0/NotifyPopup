//Durations for popup timer
let popupShowDuration = 4000;
let popupHideDuration = 500;
//Directory to Notify Folder
let notifyDir = "/js";
/**
 * @param {String} type Standard , Warning, Fail, Info
 * @param {String} text "Your Notification"
 * @return void
 * **/
function notifyPopup(type = "Standard", text="") {
    text = text.slice(0,100);
    if(type === "Standard")
    {
        var notifyElement = $('<div />',{
            class: 'notify-standard n-success',
        }).append(
            $('<div />', {
                class: 'notify-content'
            }).append(
                $('<div />', {
                    class: 'notify-image'
                }).append($('<img />',{
                    src: notifyDir+'/Notify/img/notify-success.png'
                })),
                $('<div />', {
                    class: 'notify-text'
                }).append($('<label />', {
                    text: text,
                }))
            )
        );
    }
    if(type === "Warning")
    {
        var notifyElement = $('<div />',{
            class: 'notify-standard n-warning',
        }).append(
            $('<div />', {
                class: 'notify-content'
            }).append(
                $('<div />', {
                    class: 'notify-image'
                }).append($('<img />',{
                    src: notifyDir+'/Notify/img/notify-warning.png'
                })),
                $('<div />', {
                    class: 'notify-text'
                }).append($('<label />', {
                    text: text,
                }))
            )
        );
    }
    if(type === "Fail")
    {
        var notifyElement = $('<div />',{
            class: 'notify-standard n-fail',
        }).append(
            $('<div />', {
                class: 'notify-content'
            }).append(
                $('<div />', {
                    class: 'notify-image'
                }).append($('<img />',{
                    src: notifyDir+'/Notify/img/notify-fail.png'
                })),
                $('<div />', {
                    class: 'notify-text'
                }).append($('<label />', {
                    text: text,
                }))
            )
        );
    }
    if(type === "Info")
    {
        var notifyElement = $('<div />',{
            class: 'notify-standard n-success',
        }).append(
            $('<div />', {
                class: 'notify-content'
            }).append(
                $('<div />', {
                    class: 'notify-image'
                }).append($('<img />',{
                    src: notifyDir+'/Notify/img/notify-success.png'
                })),
                $('<div />', {
                    class: 'notify-text'
                }).append($('<label />', {
                    text: text,
                }))
            )
        );
    }

    $(notifyElement).prependTo('body');
    setTimeout(function () {
        $(notifyElement[0]).addClass('notify-start');
        setTimeout(function () {
            $('body').find(notifyElement).remove();
        }, popupShowDuration);
    }, popupHideDuration);

}
