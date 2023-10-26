 function copywx(){
        const range = document.createRange();
        range.selectNode (document.getElementById('sss'));
        const selection = window.getSelection ();
        if(selection.rangeCount > 0)  selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        alert("复制成功！");
    }