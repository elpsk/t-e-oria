
//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
});
 
function scramble( text ) {
    //
    // teoria
    // 012345
    //
    // 0 3245
    // t roia

    var shuffled = text.split('').sort(function() { return 0.3-Math.random() }).join('');
    return shuffled;
} 

function copy( str ) {
    str = scramble(str);
    document.oncopy = function(event) {
        event.clipboardData.setData("Text", str);
        event.preventDefault();
    };
    document.execCommand("Copy");
    document.oncopy = undefined;
}

chrome.contextMenus.create({ title: "[t(e)oria] => '%s'...", contexts:["selection"], onclick: function(info, tab) {
  copy ( info.selectionText );
}});
