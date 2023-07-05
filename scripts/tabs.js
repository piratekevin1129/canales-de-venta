function clickHeaderTab(btn,t){
    var tabs_header = btn.parentNode
    var tabs_header_children = tabs_header.getElementsByClassName('cv-tab-header')
    for(var i = 0;i<tabs_header_children.length;i++){
        tabs_header_children[i].setAttribute('class','cv-tab-header')
    }
    tabs_header_children[t-1].classList.add('cv-tab-header-active')

    document.getElementById('cv-tabs-container').className = 'cv-tabs-container-active-'+t


    document.getElementById('cv-tabs-header-container').scrollIntoView();
}

