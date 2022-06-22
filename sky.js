function getUrlVars() { for (var a, b = [], d = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), c = 0; c < d.length; c++) a = d[c].split("="), b.push(a[0]), b[a[0]] = a[1]; return b }
var gClid = getUrlVars().gclid,
    utmCampaign2 = getUrlVars().utm_campaign,
    utmSource = getUrlVars().utm_source,
    utmMedium = getUrlVars().utm_medium,
    utmTerm = getUrlVars().utm_term,
    utmContent = getUrlVars().utm_content;
title = document.title.replace(/\s+/g, "-").toLowerCase();
window.addEventListener("load", function() {
    var a = new BlipChat,
        b = location.href;
    a.withTarget("blip-chat-open-iframe").withAppKey("c2t5cm91dGVyMjpmY2Q5ZDNmNC00ZTg2LTRhNjgtYTEzOS1jOWVmZTNmN2M2ZTM=").withButton({ color: "#b72312", icon: "" }).withCustomCommonUrl("https://macro.chat.blip.ai/").withEventHandler(BlipChat.LOAD_EVENT, function() { a.sendMessage({ type: "text/plain", content: "Quero Conhecer" }) }).withAccount({
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        extras: {
            url: b,
            gclid: gClid,
            UtmCampaign: "CHATBOT SKY - Selectra",
            UtmCampaign2: utmCampaign2,
            UtmSource: utmSource,
            UtmMedium: utmMedium,
            UtmTerm: utmTerm,
            UtmContent: utmContent,
            Title: title
        }
    }).build()
});
$(document).on("click", ".js-open_autlab", function(a) { $("#blip-chat-open-iframe").trigger("click") });
OpenChat = function(a) { $("#blip-chat-open-iframe").trigger("click") };